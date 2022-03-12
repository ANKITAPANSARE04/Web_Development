//jshint esversion:6
//$npm i , npm i mongoose
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _=require("lodash");
//const date = require(__dirname + "/date.js");Not using date here

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//const items = ["Buy Food", "Cook Food", "Eat Food"]; const workItems = [];
mongoose.connect("mongodb://localhost:27017/tododb",{useNewUrlParser: true});
const itemSchema={ name: String } ;
const Item=mongoose.model("Item",itemSchema);

//Manual document/collection creation
const item1=new Item({name:"This is demoline from item1"});
const item2=new Item({name:"This is demoline from item2"});
const item3=new Item({name:"This is demoline from item3"});
const defaultItems=[item1,item2,item3];

const listSchema={  name:String,  items:[itemSchema] };
const List=mongoose.model("List",listSchema);
//Item.insertMany(defaultItems,function(err){if(err){console.log(err);}else{console.log("db/collection created");}});

app.get("/", function(req, res) {

//const day = date.getDate(); Useless
  Item.find({},function(err,foundItems){
    if (foundItems.length===0){
      Item.insertMany(defaultItems,function(err){if(err){console.log(err);}else{console.log("db/collection created");}});
      res.redirect("/")
    }
    else{
        res.render("list", {listTitle: "Today", newListItems: foundItems});
          }
  })

});

app.post("/", function(req, res){
  const itemName=req.body.newItem;
  const listName=req.body.list;

  const item=new Item({    name:itemName  });

  if(listName==="Today"){    item.save();    res.redirect("/");  }
  else{
      List.findOne({name: listName},function(err,foundList){
      foundList.items.push(item);
      foundList.save();
      res.redirect("/"+listName);
    });
    }
  });

app.post("/delete",function( req,res){
    const checkedItemId=req.body.checkbox;
    const listName=req.body.listName;

    if (listName==="Today"){
      Item.findByIdAndRemove(checkedItemId,function(err){
        if(!err){
          console.log("Delete done!!");
          res.redirect("/");
        }
      });
    }else {
      List.findOneAndUpdate({name:listName},{$pull:{items:{_id:checkedItemId}}},function(err,foundList){
        if(!err){
          res.redirect("/"+listName);
        }
      });
    }
    });

//  if (req.body.list === "Work") {    workItems.push(item);    res.redirect("/work");
//  } else {    items.push(item);    res.redirect("/");  }});


app.get("/:customListName",function(req,res){
    const customListName=_.capitalize(req.params.customListName);

    List.findOne({name:customListName},function(err,foundList){
      if(!err){
        if(!foundList){
          const list=new List({
            name:customListName,
            items:defaultItems
          });
          list.save();
        }else{
          res.render("list" ,{ listTitle:foundList.name, newListItems:foundList.items});
        }
      }
    })
});

//app.get("/work", function(req,res){  res.render("list", {listTitle: "Work List", newListItems: workItems}); });

//app.get("/about", function(req, res){  res.render("about"); });

app.listen(3000, function() {  console.log("Server started on port 3000");  });
