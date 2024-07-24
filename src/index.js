const express=require('express');
const {serverConfig}=require('./config');

const app=express();

app.listen(serverConfig.PORT,()=>{
    console.log(`server started at port ${serverConfig.PORT}`);
});