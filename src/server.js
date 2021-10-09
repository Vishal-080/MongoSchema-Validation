const express = require('express');
const connect =  require('./config/db');
const UsersController = require('./controllers/user.controller');


const app = express();
app.use(express.json());
app.use("/users", UsersController);



const start = async () => {
    await connect();

    app.listen(3000,() => {
        console.log('listening on port 3000');
    });

};

module.exports = start;