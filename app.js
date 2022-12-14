var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

const { userDateRules } = require("./validate/userValidator");
const JWT = require('./util/JWT');
const { tokenErr } = require('./config/err.config');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(async(req, res, next) => {
    const value = userDateRules.validate(req.body, {
        abortEarly: false,
        allowUnknown: true
    })
    if (value.error) {
        res.send({
            code: 201,
            msg: value.error.message,
            result: ""
        })
    } else {
        next()
    }

})

app.use((req, res, next) => {
    if (req.url.includes("login") || req.url.includes("users")) {
        next()
        return
    }
    const token = req.headers["authorization"] && req.headers["authorization"].split(" ")[1]
    const result = JWT.verify(token)
    if (token) {
        if (result) {
            console.log(result);
            res.user = result
            console.log(result);
            next()
            return
        } else {
            res.send(tokenErr)
        }
    } else {
        res.send(tokenErr)
    }

})
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/login", loginRouter)
app.use((req, res, next) => {

    })
    // catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err)
    res.send({
        code: 10000,
        msg: "???????????????",
        result: err
    });
});

module.exports = app;