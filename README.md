<h1 align="center">
🌐 Symptom Tracking App 🌐
</h1>
<h3 align="center">
	A group-F production
</h3>

The idea behind our app was to provide a service/ resource for individuals who
were expieriencing symptoms similar to ones related to covid-19.  We thought of an app that extends
the provider interaction, allowing for real-time patient monoriting for providers and quick response for patients without
the dreaded wait times and added inconvinience.

---

## The UI/UX
### LogIn/ Auth
![image](https://user-images.githubusercontent.com/55608123/84931706-08543a80-b088-11ea-8278-fcfa2d07c226.png)
### Patient Symptom Entry/ Profile
![image](https://user-images.githubusercontent.com/55608123/84739632-d0060c80-af60-11ea-9d5e-43ac104795f7.png)
![image](https://user-images.githubusercontent.com/55608123/84739704-fb88f700-af60-11ea-9fcc-4e1e74311bd1.png)

---

## Steps to Deploy 
(Please keep in mind that this in a work in progress and is currently under development by our team.)

- Connect your MongoDB to app:
   - Navigate to /backend/config/default.json
   - Replace placeholder string with your connect string
   ![image](https://user-images.githubusercontent.com/55608123/84935861-35a3e700-b08e-11ea-8e0a-adb863e23e43.png)

- Clone Repo: 

```terminal
$ git clone https://github.com/All-Schuck-Up/AD-410-F.git
```
- Install backend Dependencies:

``` terminal
$ cd backend
$ npm i -D
$ cd ..
```

- Install frontend Dependencies: 

```terminal
$ cd client
$ npm i
$ cd ..
```

- Run app:
```terminal
$ npm run dev
```

- Enjoy app @ http://localhost:3000 (chrome)


### Branch structure
-Master - Ready to install and run version of the application <br  />
-Dev - Current working version that received pull requests <br  />
-Rest of the branches - Feature branches <br  />

### File Structure
  --Backend directory has all the routes and express services<br />
  --Client directory has the main application index.js and app.js along with the styling css files<br />
  --Components directory have all the components <br />
<br />

### Dependencies
| Backend                               | Client                         | Dev                      |
|---------------------------------------|--------------------------------|--------------------------|
| "axios": "^0.19.2"                    | "axios": "^0.19.2"             | "concurrently": "^5.2.0" |
| "bcrypt": "^4.0.1"                    | "bootstrap": "^4.5.0"          | "nodemon": "^2.0.3"      |
| "bcryptjs": "^2.4.3"                  | "multer": "^1.4.2"             |                          |
| "body-parser": "^1.19.0"              | "react": "^16.13.1"            |                          |
| "bootstrap": "^4.5.0"                 | "react-dom": "^16.13.1"        |                          |
| "cors": "^2.8.5"                      | "react-redux": "^7.2.0"        |                          |
| "config": "^3.3.1"                    | "react-scripts": "3.4.1"       |                          |
| "dotenv": "^8.2.0"                    | "reactstrap": "^8.4.1"         |                          |
| "express": "^4.17.1"                  | "redux": "^4.0.5"              |                          |
| "express-validator": "^6.4.1"         | "redux-thunk": "^2.3.0"        |                          |
| "jsonwebtoken": "^8.5.1"              | "semantic-ui-react": "^0.88.2" |                          |
| "mongoose": "^5.9.12"                 | "uuid": "^8.1.0"               |                          |
| "multer": "^1.4.2"                    |                                |                          |
| "redux-devtools-extension": "^2.13.8" |                                |                          |
| "uuid": "^8.1.0"                      |                                |                          |

