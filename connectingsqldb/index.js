const express = require("express");
const app= express();
const {createConnection} = require("mysql2/promise")

const db = createConnection({
    host:"localhost",
    user:"root",
    password:"mysql123$",
    database:"mhmd_db",
    rowsAsArray: false,

});



const getData = async ()=>{
    try{
        const [rows,fields] = await (await db).execute("SELECT * from user");
        console.log(rows);
        return rows;
    }catch(err){
        console.log(err);
    }
}

getData();


// app.use("/",async (req,res)=>{
//   const data =  await getData();
//   const {username} = data[0];
  
//    res.send(`${username}`); 
// })

app.listen(5000,()=>{
    console.log("listening port 5000");
})