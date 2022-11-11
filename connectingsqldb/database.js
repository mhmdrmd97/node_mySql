const {createConnection} = require("mysql2/promise")

const db = createConnection({
    host:"localhost",
    user:"root",
    password:"mysql123$",
    database:"mhmd_db",
})

db.query(`SELECT * from user`,(error,result,fields)=>{
    console.log(error);
    console.log(result);
    console.log(fields);
})

pool.getConnection((err)=>{
    console.log(err);
},
(connect)=>{
    console.log(connect);
}
);

// pool.query(`SELECT * from user`,(error,result,fields)=>{

//     if(err) {return console.log("something wrong");}
//     return console.log(result);


// });