import { Stack } from "@mui/system";
import PostCard from "../components/PostCard";
import { Grid } from "@mui/joy";
import { useScatterChartProps } from "@mui/x-charts/internals";
import { useState } from "react";

const blogsData = [
  {
    id: "001",
    title: "Thinking in React",
    href: "https://react.dev/learn/thinking-in-react",
    description: "Getting familiar with React concepts",
    category: "dev",
    image: "https://picsum.photos/200?random=1",
    review: 3
  }, {
    id: "002",
    title: "React App Starter",
    href: "https://github.com/liadbe-genesys/react-app-starter",
    description: "Hassle-free boilerplate to win the hackathon ",
    category: "dev",
    image: "https://picsum.photos/200?random=2",
    review: 3
  }, {
    id: "003",
    title: "Clone a Github Repository",
    href: "https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository",
    description: "Get the files to your laptop",
    category: "dev",
    image: "https://picsum.photos/200?random=3",
    review: 3
  }, {
    id: "004",
    title: "Bike Map Tel-Aviv",
    href: "https://experience.arcgis.com/experience/0b4adbaac0b84c21af90f4ee4a397fe6",
    description: "No more guessing bus ETAs",
    category: "leisure",
    image: "https://picsum.photos/200?random=4",
    review: 3
  }
]

// const { category, title, rareFind = false, liked = false, image } = props;

export default function BlogPosts() {
  const [blogPosts, setBlogPosts] = useState(blogsData);

  return (
    <Grid container>
      <Grid sm={12} md={8}>
        <Stack 
          direction="column" 
          spacing="1rem"
        >
          {blogPosts.map(blog => 
            <PostCard 
              key={blog.id} 
              blog={blog}
              removePost={(id) => {
                let clonedBlogPosts = blogPosts.slice();
                const blogIdToRemove = blogPosts.findIndex(blog => id === blog.id);
                if (blogIdToRemove > -1) {
                  clonedBlogPosts.splice(blogIdToRemove, 1);
                  setBlogPosts(clonedBlogPosts);
                }
              }} 
            />
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}
