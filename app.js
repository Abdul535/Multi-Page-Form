const express = require('express');
const mysql   = require('mysql');
const fileUpload = require('express-fileupload');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(fileUpload());

app.set('view engine','ejs');

let PORT = process.env.PORT || 3000;
const person= {
	fname: null,
	lname: null,
	phno : null,
	email : null,
	type : null,
	city : null,
	loc : null,
	addofware: null,

	typ : null,
	 typeofroof: null,
	 AreaofPlot: null,
	 buildArea: null,
	 freeSpace: null,
	 height: null,
	 typeofFloor: null,
	 yearofWarehouse: null,

	 notallowed : null,
	 ga:null,
	 fa:null,
	 wf:null,
	pb:null,
	 la:null,
	 gsp:null,
	 up:null,

	 comments : null,
	 file1:null,
	 file2:null
};

app.get("/", (req,res)=>{
	res.render("fStep");
})

app.post("/sStep",(req,res)=>{
	person.fname = req.body.fName;
	person.lname = req.body.lName;
	person.phno = req.body.PhNo;
	person.email = req.body.email;
	person.type = req.body.type;
	person.city = req.body.city;
	person.loc = req.body.loc;
	person.addofware = req.body.add;

	res.render("sStep");
})

app.post("/tStep",(req,res)=>{

	person.typ = req.body.typ;
	person.typeofroof= req.body.tofroof;
	 person.AreaofPlot= req.body.arofplot;
	 person.buildArea= req.body.buildarea;
	 person.freeSpace= req.body.fspace;
	 person.height= req.body.height;
	 person.typeofFloor= req.body.typeoffloor;
	 person.yearofWarehouse= req.body.yearofw;

	 

	res.render("tStep");

})

app.post("/lStep",(req,res)=>{

	 person.notallowed = req.body.notallowed;
	 person.ga = req.body.GA;
	 person.fa = req.body.FA;
	 person.wf = req.body.WF;
	person.pb = req.body.PB;
	 person.la = req.body.LA;
	 person.gsp = req.body.GSP;
	 person.up = req.body.UP;


	res.render("lStep");
})


app.post("/submit",(req,res)=>{

  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }


	person.comments = req.body.comments;
	person.file1 = req.files.insidepic.name;
	person.file2 = req.files.outsidepic.name;


	let insidepic = req.files.insidepic;
	let  uploadPath = __dirname + '/db/images/' + insidepic.name;
	 insidepic.mv(uploadPath, function(err) {
	if (err)
		return res.status(500).send(err);
		console.log("File1 Uploaded");
	})

	let outsidepic = req.files.outsidepic;
	let  uploadPath2 = __dirname + '/db/images/' + outsidepic.name;
	 outsidepic.mv(uploadPath2, function(err) {
	if (err)
		return res.status(500).send(err);
		console.log("File2 Uploaded");
	})

	console.log(person);
	res.render("submit");
});

app.listen(PORT,()=>{
	console.log("Server started at port");
})