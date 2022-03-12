//use gitBASH run app open other bash to varify data in mongoShell
//mongose configuration
const mongoose = require('mongoose');
//db declaration
mongoose.connect('mongodb://localhost:27017/fruitsdb', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema=new mongoose.Schema({name:String,rating:Number,review:String})
//collection creation
const Fruit = mongoose.model("Fruit",fruitSchema);

//inserting value into colllection
const apple = new Fruit({ name: "Apple", rating: 5, review: "most testy" });
const banana = new Fruit({ name: "banana", rating: 6, review: "most sticky" });
const cherry = new Fruit({ name: "cherry", rating: 7, review: "most sweet" });
const pineapple= new Fruit({  name:"pineapple",rating:7,review:"goodgood"});

//insert many into colllection
//Fruit.insertMany([apple,banana,cherry],
//function(err)  {  if(err){    console.log(err);  }else{console.log("succesfully saved all fruits");  }});

const personSchema=new mongoose.Schema({ name: String,age:Number,favfruit:fruitSchema})
const Person = mongoose.model("Person",personSchema);
const jon=new Person({name:"jon",age:37,favfruit:apple});
const ria=new Person({name:"ria", age:25,favfruit:pineapple});
//in above line the validarion is included for name and rating



// Fruit.find(function(err,fruits){
//   if(err){
//     console.log(err);
//   }else{
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//       //close mongo server
//     });
//   }
// });

Person.updateOne({name:"jon"},{favfruit:banana},function(err){
  if(err){console.log(err);}
  else{console.log("apple changed to banana");} })

Person.find(function(err,persons){
  if(err){
    console.log(err);
  }else{
    persons.forEach(function(person) {
      console.log(person.name);
      //close mongo server
    });
  }
  mongoose.connection.close();
});

//Update in mongoose
//Fruit.updateOne({_id:"defaultidbymongo"},{name:'newName'},function(err){
//  if(err){console.log(err);}
//  else{console.log("Update updateOne!!");} })

//delete dropDatabase using mongose
//Fruit.deleteOne({name:'banana'},function(err){
//    if(err){console.log(err);}    else{console.log("deleted one record fruit!!");} })
//Fruit.deleteMany({name:"frtname"}),function(err){
//  if(err){console.log(err);}
//  else{console.log("deleted more record of same name!!");} })


//on nodejs run command this will be output
//cherry.save().then(() => console.log('All fruits in collection are saved'));
//to drop dropDatabase
//db.dropDatabase()
