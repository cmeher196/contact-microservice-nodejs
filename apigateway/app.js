// Proxy For My Microservices:

const express = require('express');

const httpProxy= require('http-proxy-middleware');
const config = require('./config');

let proxyContact; // to handle contact API
let proxyUser;  // to handle user API

const app= express();

// const router= express.Router();


proxyContact= httpProxy.createProxyMiddleware({
    target: config.contact_URL,
    pathRewrite:{'^/contactdata/':'/'}
});

proxyUser= httpProxy.createProxyMiddleware({
    target: config.users_URL,
    pathRewrite:{'^/userdata/':'/'}
});


app.use('/contactdata/', proxyContact);

app.use('/userdata/', proxyUser);

app.use('/',(req,res)=>{
    res.send("Welcome to GateWay");
})


module.exports = app