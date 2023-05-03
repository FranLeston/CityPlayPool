# Express & React Template

Starter Template utilizing a React frontend and Express server. The Express server leverages a MySQL database for persistent storage, and JWTs in concert with Passport.js for authentication.

## Dependencies

* [React.js](https://reactjs.org/)
* [Tailwind](https://tailwindcss.com/)
* [Express.js](https://expressjs.com/)
* [Passport.js](http://www.passportjs.org/)
* [Sequelize](https://sequelize.org/)
* [MySQL](https://www.mysql.com/)

## Installation

After cloning the repository:

###  Create a .env file and add the following with your own secret keys

    PASSPORT_SECRET_KEY=<Generate Secret Key>
    JWT_SECRET=<Generate Secret Key>

*(make sure to add .env to gitignore if you're going to commit the project to source control)*

### Install dependencies

```bash
cd client
npm install
```

Then do the same in the server directory

```bash
cd server
npm install
```

## Database Setup
This project uses MySQL as its database. You will need to have a MySQL server installed and running on your machine. Create a new MySQL database and update the config/config.json file with your database information.

After updating the config/config.json file with your database information, you can run the following command to create the necessary tables in the database:

```bash
npx sequelize-cli db:migrate
```

# Usage

## Running the Server
To start the server, run the following command in your terminal:

```bash
cd server
npm start
```

## Running the React App
To run the React app, navigate to the client directory and run the following command in your terminal:

```bash
cd client
npm start
```