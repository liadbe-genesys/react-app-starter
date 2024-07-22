## Project installation
1. Install node - v20.15.1 (LTS) - https://nodejs.org/en/download/prebuilt-installer
2. Install git - https://github.com/git-guides/install-git
3. download VScode IDE - https://code.visualstudio.com/download
4. Clone the repository - https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository
5. In VSCode, navigate to Terminal menu, open new terminal:
  * Run `npm install`
  * Run `npm run dev` and open the browser on http://localhost:5173/


## Additional Resources
### Joy UI
Joy UI is an open-source React component library that follows a lightly opinionated design direction, for a clean and modern UI that gives you plenty of room to customize the look and feel.

You don't need to install anything, it will all be part of the project installation.
* https://mui.com/joy-ui/getting-started/




# Step 1: Install Node.js
- Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. (From Wikipedia)
- In short this lets you run your javascript code (like a python interpreter)
- In addition it lets you use npm which is the package manager for node (like pip for python)
- Link to download: https://nodejs.org/en/download/package-manager

# Step 2: Fork the repository
- If you don't know what git or Github look for tutorials and read online a bit
- Forking is the same as copying the repository so you can work on it and make any changes you want. You can fork by just pressing the fork option at the top right. This will open the repository under your own account.
- I would suggest working with some graphic UI for git like Github Desktop or GitKraken:
- Github Desktop: https://desktop.github.com/download/
- GitKraken: https://www.gitkraken.com/
- After you fork clone the repository to download it localy and start working

# Step 3: Install dependencies
- After opening your version of the repo run **npm i** in the terminal (while in the folder of the repo). This will take a bit and it will download all the packages needed to run the app

# Step 4: Preview the project
- Now you can create a build of your app and run it to view
- Run **npm run build** to create the build
- Then run **npm run preview** and Vite will take care of the rest. You will get an address on your local host (http://localhost:4173/ or something like that) and now you can open your browser and in this address you will see the deployed app

# Step 5: Useful Links
- React is a very useful framework with a lot to use. Read the docs of React (especially the hooks part) to know what capabilities React provides: https://react.dev/reference/react
- This repo uses Material UI (mui in short) which has a lot more to offer than what is presented in this small example. You should read the docs of mui and see what it offers and how to work with the components presented: https://mui.com/core/
