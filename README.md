# MySQL_Training
## Basic Login System with  MySQL and Node.js-Express

In this workshop, you'll be developing a login system with MySQL and Node.js-Express will enable us to develop our application with JavaScript, Express is a web framework, and we'll be using MySQL to store and retrieve account details (username, password, etc.).

## 2. Getting Started
Before we start developing our Node.js login system, we need to install software and packages that our app will depend on, and subsequently create the structure for our app.

### 2.1. What You Will Practice in this Workshop
- Establishing a connection to a MySQL database and selecting rows using MySQL queries.
- Implementing GET and POST requests with Node.js and Express.
- Designing a login form with CSS3.
- Implementing validation that will ensure the captured data is valid.
- Leveraging sessions, which will determine whether a user is logged in or not.

### 2.2. Requirements

- MySQL Server 
- Node.js
- Express - Install 
- Express Sessions 
- MySQL for Node.js 

### 2.3. Setup & File Structure
Follow the below instructions.

- Create a new directory called nodelogin, which can be created anywhere on your environment.
- Open command line as administrator, and navigate to your new directory with the following command:* cd c:\nodeprojects\nodelogin*
- Run the command:* npm init* - it will prompt us to enter a package name, enter: *login*.
- When it prompts to enter the entry point, enter login.js.
- You need to install the packages listed in the requirements, so you must execute the commands listed in the requirements above.
- A new directory will appear called node_modules, which is populated with all the modules you've installed. Don't delete this directory, otherwise it will break our app.

####  File Structure

```
\-- nodelogin
    |-- login.html
    |-- login.js
    \-- static
        |-- style.css
```

        
### 3. Styling the Login Form with CSS  
Cascading style sheets will enable us to structure the login form and make it look more appealing. The stylesheet file consists of properties that are associated with HTML elements.

### 4. Creating the Login Template with HTML
The login form will consist of an HTML form element and input elements, enabling the user to enter their details and submit them. There is no need to include Node.js code in the template file.

### 5. Creating the Login App with Node.js
- Include the MySQL, Express, Express-session, and Path modules, and associate them with the variables 
- Before we implement the database connection code, we need a database to connect to.
- Make sure the MySQL server is running on port 
        
##### You can proceed to log in with the test account (username: test, password: test). If successful, you will see the username displayed on the screen!
