const express = require("express");
const axios = require("axios");
const port = 8000;
const cors = require("cors");
const faker = require("faker");


const app = express();
app.use( cors () );
var randomName = faker.name.findName();
console.log(randomName);

class User {
    constructor() {
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone_number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Comapny {
    constructor() {
        this.name = faker.company.name();
        this.street = faker.address.street();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zip_code = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) =>{
    newUser = new User();
    res.json({newUser});
});

app.get("/api/companies/new", (req, res) => {
    newCompany = new Company();
    res.json({newCompany});
});

app.get("/api/user/company", (req, res) => {
    newCompany = new Company();
    newUser = new User();
    res.json({newUser, newCompany});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
