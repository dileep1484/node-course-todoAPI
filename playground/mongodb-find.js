// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Object destructuring in ES6
// var user = {name:'Dileep', age:28, location:'Kuala Lumpur'};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        console.log('error connecting to DB');
    }else{
        console.log('Sucessfully connected to mongodb');
    }

    // db.collection('Todos').find({
    //     _id: new ObjectID('5a72aabf061f0e4811123a79')
    // }).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // },(err)=>{
    //     console.log('Unable to fetch Todos',err);
    // });

    db.collection('Todos').find().count().then((count)=>{
        console.log(`Todos total count:${count}`);
    },(err)=>{
        console.log('Unable to fetch Todos',err);
    });
    // db.close();
});