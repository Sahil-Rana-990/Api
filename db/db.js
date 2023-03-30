const mongoose=require("mongoose");

mongoose.connect(`mongodb+srv://RanaSahil:mv3F95VnvF9NRgpz@cluster0.gpbjdww.mongodb.net/ImagesDB`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(res=>{
    console.log("connection is succesful");
})
.catch(err=>{
    console.log("connection is failed");
})