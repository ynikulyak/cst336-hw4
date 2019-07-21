const express = require("express");
const app = express();

const faker = require('faker');
app.engine('ejs', require('ejs').renderFile);
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("index.ejs", {"page": 'index'});
});

app.get("/boot", function(req, res){
	res.render("boot.ejs", {"page": 'boot'});
});

app.get("/direct-viruses", function(req, res){
	res.render("direct-viruses.ejs", {"page": 'direct-viruses'});
});

app.get("/directory-viruses", function(req, res){
	res.render("directory-viruses.ejs", {"page": 'directory-viruses'});
});

app.get("/email-viruses", function(req, res){
	res.render("email-viruses.ejs", {"page": 'email-viruses'});
});

app.get("/history", function(req, res){
	res.render("history.ejs", {"page": 'history'});
});

app.get("/macro-virus", function(req, res){
	res.render("macro-virus.ejs", {"page": 'macro-virus'});
});

app.get("/memory-viruses", function(req, res){
	res.render("memory-viruses.ejs", {"page": 'memory-viruses'});
});

app.get("/multi-viruses", function(req, res){
	res.render("multi-viruses.ejs", {"page": 'multi-viruses'});
});

app.get("/overwrite-viruses", function(req, res){
	res.render("overwrite-viruses.ejs", {"page": 'overwrite-viruses'});
});

app.get("/poly-viruses", function(req, res){
	res.render("poly-viruses.ejs", {"page": 'poly-viruses'});
});

app.get("/recovery", function(req, res){
	res.render("recovery.ejs", {"page": 'recovery'});
});

app.get("/trojans", function(req, res){
	res.render("trojans.ejs", {"page": 'trojans'});
});

app.get("/types", function(req, res){
	res.render("types.ejs", {"page": 'types'});
});

app.get("/web-viruses", function(req, res){
	res.render("web-viruses.ejs", {"page": 'web-viruses'});
});

app.get("/worm", function(req, res){
	res.render("worm.ejs", {"page": 'worm'});
});

app.get("/facts", function(req, res){
	res.render("facts.ejs", {"page": 'facts', "fileName": faker.system.fileName(), "mimeType": faker.system.mimeType(), "fileType": faker.system.fileType(), "fileExt": faker.system.fileExt(), "commonFileExt": faker.system.commonFileExt(), "semver": faker.system.semver(), "source": faker.internet.domainName()});
});

//server listener
app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Express Server is Running...");
});

