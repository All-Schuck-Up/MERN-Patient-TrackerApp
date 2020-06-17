<h1 align="center">
🌐 Symptom Tracking App 🌐
</h1>
<h3 align="center">
	A group-F production
</h3>
## Patient Symptom Tracking Web Application <br  />
The idea behind our app was to provide a service/ resource for individuals who
were expieriencing symptoms similar to ones related to covid-19.  We thought of an app that extends
the provider interaction, allowing for real-time patient monoriting for providers and quick response for patients without
the dreaded wait times and added inconvinience.

## The UI/UX
![image](https://user-images.githubusercontent.com/55608123/84739172-05f6c100-af60-11ea-9194-0bd47746a038.png)
![image](https://user-images.githubusercontent.com/55608123/84739291-2e7ebb00-af60-11ea-8c67-c06c689921d6.png) 
![image](https://user-images.githubusercontent.com/55608123/84739505-9cc37d80-af60-11ea-8f0d-38c8da3b68db.png)
![image](https://user-images.githubusercontent.com/55608123/84739632-d0060c80-af60-11ea-9d5e-43ac104795f7.png)
![image](https://user-images.githubusercontent.com/55608123/84739704-fb88f700-af60-11ea-9fcc-4e1e74311bd1.png)

## Branch structure
Master - Ready to install and run version of the application <br  />
Dev - Current working version that received pull requests <br  />
Rest of the branches - Feature branches <br  />

## Steps to Launch 
(Please keep in mind that this in a work in progress and is currently under development by our team.)

<strong>Installing instruction: </strong> <br />
	1.  Clone the master repository<br />
	2.  On your local directory rename the "client" directory into "client0" <br />
	3.  From the terminal, run "npx create-react-app client" <br />
		(now you will have "client" and "client0" directories) <br />
	4.  copy the "public" and "src" directories from the "client0" replace the files into "client" <br />
	5.  From your terminal run "npm install" to install all the dependencies needed <br />
		<strong>(Repeat step 5 for both the root directory and client directory)</strong><br />
	6.  Install "reactstrap" and "bootstrap" manually from your terminal "npm i reactstrap" and "npm i bootstrap" <br />
	7.  Last but not least, from your terminal run <strong> npm run dev </strong> (we made a concurrent script to run both the server and the react) <br />

### File Structure
  --Backend directory has all the routes and express services<br />
  --Client directory has the main application index.js and app.js along with the styling css files<br />
  --Components directory have all the components <br />
<br />
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
