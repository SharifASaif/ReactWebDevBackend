var models = require('./server').models;
/*
var toSave=[
    {name:'Sharif', email:'Sharif@Sharif.com'},
    {name:'Sharif2', email:'Sharif2@Sharif.com'},
    {name:'Sharif3', email:'Sharif3@Sharif.com'},
    {name:'Sharif4', email:'Sharif4@Sharif.com'},
    {name:'Sharif5', email:'Sharif5@Sharif.com'},
    {name:'Sharif6', email:'Sharif6@Sharif.com'},
    {name:'Sharif7', email:'Sharif7@Sharif.com'},
    {name:'Sharif8', email:'Sharif8@Sharif.com'},
    {name:'Sharif9', email:'Sharif9@Sharif.com'},
    {name:'Sharif0', email:'Sharif0@Sharif.com'},
    {name:'Sharif11', email:'Sharif11@Sharif.com'}
]

toSave.map(obj =>{
    models.Profile.create(obj,(err, created)=>{
        console.log("Created", created)
    })
})
*/

var filter ={
    where: {
        name: {like: 'Nick'}
    }, // Kind of like MySQL Where Clause
    order: 'id ASC', // Order by: 'field direction'
    limit: 100
}

models.Profile.destroyById("5ec681d4138be9370cabd2c3", (err, found)=>{
    console.log('Found?', err, found)
})