## Setting up frontend dev environment
1. Install node - v20.15.1 (LTS) - https://nodejs.org/en/download/prebuilt-installer 
  * Node - Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.    Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.
2. Install git - https://github.com/git-guides/install-git
3. Download VScode IDE - https://code.visualstudio.com/download

## Project installation
1. In terminal - git clone https://github.com/liadbe-genesys/react-app-starter.git
2. In VSCode:
  * Open the project folder
  * Navigate to Terminal menu
  * Open a new terminal
3. In the terminal:
  * Run `npm install`
  * Run `npm run dev`
4. Open the browser on http://localhost:5173/


## Additional Resources
### React
React language is a component-based, open-source JavaScript library for front-end development. It is specifically used to build user interfaces for single-page applications.
* https://react.dev/learn

### Joy UI
Joy UI is an open-source React component library that follows a lightly opinionated design direction, for a clean and modern UI that gives you plenty of room to customize the look and feel.

You don't need to install anything, it will all be part of the project installation.
* https://mui.com/joy-ui/getting-started/

### AG-Grid
AG Grid is the industry standard Data Grid and Charting solution for JavaScript Enterprise Applications
* https://www.ag-grid.com/react-data-grid/getting-started/

### Setting up the LLM API
To make the Ask AI page work you will have to generate an api key for your requests. Go to https://openrouter.ai/ and log in with your student gmail account (or any other gmail).
Then go to Keys in the setting menu and you will see a button saying **Create API Key**. Click it and copy the key you get. Inside the `AskModel.jsx` file you will see a place in the request headers to paste that key. And thats it, as long as you use a free model you can make requests to it through your app. Remember that these API provider enforce a limit to the amount of requests you can make to **50 per day**. So I suggest you use several student accounts to get more keys.
