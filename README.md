# AD-410-F
Web App for Group-F <br  />
<br  />
Patient Symptom Tracking Web Application <br  />

## Branch structure
Master - Ready to install and run version of the application <br  />
Dev - Current working version that received pull requests <br  />
Rest of the branches - Feature branches <br  />

## Steps to Launch 
Please keep in mind that this in a work in progress and is currently under development by our team.

<strong>Installing instruction: </strong> <br />
-Clone the master repository<br />
-On your local directory rename the "client" directory into "client0" <br />
-from the terminal, run "npx create-react-app client" <br />
(now you will have "client" and "client0" directories) <br />
-copy the "public" and "src" directories from the "client0" replace the files into "client" <br />
-from your terminal run "npm install" to install all the dependencies needed <br />
-install "reactstrap" and "bootstrap" manually from your terminal "npm i reactstrap" and "npm i bootstrap" <br />
-last but not least, from your terminal run <strong> npm run dev </strong> (we made a concurrent script to run both the server and the react) <br />

Backend directory has all the routes and express services<br />
Client directory has the main application index.js and app.js along with the styling css files<br />
Components directory have all the components <br />
<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
