'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sessions = require('express-session');
var session;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(sessions(
    {
        secret: 'my secret key',
        resave: false,
        saveUninitialized: false
    }
));

app.post("/login", function (req, res) {
    session = req.session;

    console.log("The session in post login is : ", session);
    /* When you log a session object, it will output as follows :
    *
    *
    * Session {
    *    cookie:
    *       { path: '/',
    *          _expires: null,
    *          originalMaxAge: null,
    *          httpOnly: true },
    *          uniqueId: 'admin'
    *          }
    *
    * Here, you will notice, there is no sessionId. Actually, when you log session, it does not log sessionId. But, you
    * can get and log the session id on the session object also in the following way.
    * */
    console.log("The session id for post request in session is : ", req.session.id);

    /* This is another way to get the session id.*/
    console.log("The session id for post request is : ", req.sessionID);

    if (session.uniqueId) {
        res.redirect("/redirects");
    }

    session.uniqueId = req.body.uname;
    res.redirect("/redirects");
});

app.get("/login", function (req, res) {

    session = req.session;
    if (session.uniqueId) {
        res.redirect("/redirects");
    }

    res.sendFile("login.html", {root: "../../../views"});

});

app.get("/admin", function (req, res) {
    session = req.session;
    console.log("The session in admin::: ", session);
    if (session.uniqueId !== "admin") {
        res.send("Unauthorized access.");
    }

    res.send("You are logged-in. <a href='/logout'> Click to logout</a>");
});


app.get("/redirects", function (req, res) {
    session = req.session;
    if (session.uniqueId === "admin") {
        res.redirect("/admin");
    } else {
        res.send(req.session.uniqueId + "not found <a href='/logout'>KILL SESSION</a>");
    }
});

app.get("/logout", function (req, res) {
    req.session.destroy();
    res.redirect("/login");
});

app.listen(8888, function () {
    console.log("The server is running.")
});