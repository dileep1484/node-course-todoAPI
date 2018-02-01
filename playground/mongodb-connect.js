// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

//Object destructuring in ES6
var user = {name:'Dileep', age:28, location:'Kuala Lumpur'};
var {name} = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('error connecting to DB');
    }else{
        console.log('Sucessfully connected to mongodb');
    }

    // db.collection('Todos').insertOne({
    //     text: 'Dileep adding his 1st todo item',
    //     completed: false
    // },(err,results)=>{
    //     if(err){
    //         return console.log('unable to inster into todos list.',err);
    //     }

    //     console.log(JSON.stringify(results.ops,undefined,2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Dileep',
    //     age:28,
    //     location: 'Kuala Lumpur'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('Unable to insert into users collection',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));

    //     //This tells us when the document was created.
    //     console.log(JSON.stringify(result.ops._id.getTimestamp));
        
    // });
    db.close();
});