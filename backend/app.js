const express = require("express");
const app = express();
const Parse = require("parse/node");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

Parse.initialize(
  "G1o3jtJRe1HTEPIMwtwtUFNVwR0WaB40EkaB1a5v",
  "UWmig8troZyoOxr0v2U8eTDFdtLNzzG96UpNwgBu"
);
Parse.serverURL = "https://parseapi.back4app.com";

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.get("/users", (req, res) => { //bring all users
  console.log("\nSearching...\n");
  const Users = Parse.Object.extend("User");
  const query = new Parse.Query(Users);
  query
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/users/:id", (req, res) => {  //get user by Id. We will use this one for pointer data.
  console.log("\nSearching...\n");
  const User = Parse.Object.extend("User");
  var _id = req.params.id;
  const query = new Parse.Query(User);
  query
    .get(_id)
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.get("/cases", (req, res) => { //bring all cases
  console.log("\nSearching...\n");
  const Cases = Parse.Object.extend("case");
  const query = new Parse.Query(Cases);
  query
    .find()
    .then((result) => {
      res.json(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.post("/cases", (req, res) => { //create case

  const Case = Parse.Object.extend("case");
  const User = Parse.Object.extend("User");
  const myNewObject = new Case();
  const cas1 = req.body.caseType;
  myNewObject.set("caseType", cas1);
  myNewObject.set(
    "file",
    new Parse.File("resume.txt", { base64: req.body.file })
  );
  myNewObject.set("belongTo", {
    __type: "Pointer",
    _objCount: 0,
    className: "_User",
    objectId: req.body.belongTo.objectId,
  });
  
  myNewObject.set("order", Number(req.body.order));

  myNewObject.save().then(
    (result) => {
      if (typeof document !== "undefined")
        document.write(`case created: ${JSON.stringify(result)}`);
      res.send(result);
      console.log("case created", result);
    },
    (error) => {
      if (typeof document !== "undefined")
        document.write(`Error while creating case: ${JSON.stringify(error)}`);
      console.error("Error while creating case: ", error);
    }
  );
});

app.put("/cases/:id", (req, res) => { //update  case

  const Case = Parse.Object.extend("case");
  const query = new Parse.Query(Case);
  // here you put the objectId that you want to update
  console.log(req.body.file);
  const cas1 = req.body.caseType;
  query.get(req.params.id).then((object) => {
    object.set("caseType", cas1);
    object.set(
      "file",
      new Parse.File("resume.txt", { base64: req.body.file })
    );
    object.set("belongTo", {
      __type: "Pointer",
      _objCount: 0,
      className: "_User",
      objectId: req.body.belongTo.objectId,
    });
    object.set("order", Number(req.body.order));
    object.save().then(
      (response) => {
        // You can use the "get" method to get the value of an attribute
        // Ex: response.get("<ATTRIBUTE_NAME>")
        if (typeof document !== "undefined")
        res.json(response);
        console.log("Updated case", response);
      },
      (error) => {
        if (typeof document !== "undefined")
         
        console.error("Error while updating case", error);
        res.json(error);
      }
    );
  });
});

app.delete("/cases/:id", (req, res) => { //delete  case

    const Case = Parse.Object.extend("case");
    const query = new Parse.Query(Case);
   
query.get(req.params.id).then((object) => {
    object.destroy().then((response) => {
     
      res.json("deleted")
      console.log('Deleted case', response);
    }, (error) => {
      if (typeof document !== 'undefined') document.write(`Error while deleting case: ${JSON.stringify(error)}`);
      console.error('Error while deleting case', error);
    });
  });
  });

app.get("/user/:id", (req, res) => {
  console.log("\nSearching...\n");
  const Cars = Parse.Object.extend("Cars");
  const query = new Parse.Query(Cars);
  query.equalTo("color", req.params.query);
  query
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      res.send(error);
    });
});

app.listen(3000, () => console.log("App listening on port 3000!"));
