const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient;

let _db;

const mongoConnect= callback=>{
    //MongoClient.connect('mongodb+srv://rishabbahal:redcliff9!@rishab999-nhaqy.mongodb.net/test?retryWrites=true')
    MongoClient.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true })
    .then(client=>{
        console.log('db connected!')
        _db=client.db('wallmart')
        callback()
    })
    .catch(err=>{
        console.log(err)
        throw err;
    })    
}

const getDb=()=>{
    if(_db)
        return _db
    throw 'No db found!'
}

exports.mongoConnect=mongoConnect
exports.getDb=getDb