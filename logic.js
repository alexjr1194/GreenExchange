var http = require('http');
var serverPing = require('express-ping');
var express = require('express');

/*$('#dropbox').on(
    'dragover',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)
$('#dropbox').on(
    'dragenter',
    function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
)
$('#dropbox').on(
    'drop',
    function(e){
        if(e.originalEvent.dataTransfer){
            if(e.originalEvent.dataTransfer.files.length) {
                e.preventDefault();
                e.stopPropagation();
                upload(e.originalEvent.dataTransfer.files);
            }   
        }
    }
);*/



/*function readURL(e) {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        $(reader).load(function(e) { $('#dropbox').attr('src', e.target.result); });
        reader.readAsDataURL(this.files[0]);
    }
}

$("#imgInp").change(readURL);*/




/*var dropbox = $('#dropbox');

dropbox.addEventListener('dragenter', imgHandler, false);
dropbox.addEventListener('dragexit', imgHandler, false);
dropbox.addEventListener('dragover', imgHandler, false);
dropbox.addEventListener('drop', drop, false);

function imgHandler(event) {
    event.stopPropagation();
    event.preventDefault();
}
function drop(event) {
    event.stopPropagation();
    event.preventDefault(); 
    var imageUrl = event.dataTransfer.getData('URL');;
    alert(imageUrl);*/
}


/*function dragStart(event) {
    event.dataTransfer.setData("img", event.target.id);
    document.getElementById("demo");
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("demo").innerHTML = "The p element was dropped";
}*/

extracting the data from the dropdown
ping the server to pass the value to the server, use a get 
pass the value into a select statement, into sequalize, this is where the strain and location go in
render the page with the returned table info, response.render 

// extracting data from the submit form. This will turn the data into a JSON object
$("#newUser" ).submit(function( event ) {
  console.log( $( this ).serializeArray() );
  event.preventDefault();
});

app.use(serverPing.ping(/*I can put a path here. It will customise for us if we don't*/));
app.use(app.router);
 
app.listen(3000);





/*var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL,config);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;*/