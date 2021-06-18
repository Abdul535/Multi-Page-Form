const express = require('express');
const mysql   = require('mysql');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine','ejs');

const Details = [];

app.get("/", (req,res)=>{
	res.render("fStep");
})

app.post("/sStep",(req,res)=>{


	res.render("sStep");
})

app.post("/tStep",(req,res)=>{
	res.render("tStep");
})

app.post("/lStep",(req,res)=>{
	res.render("lStep");
})
app.listen('3000',()=>{
	console.log("Server started at port 3000");
})