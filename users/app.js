//Wtrite entire app code in this Finally

const express= require('express');
const app= express();
const router= express.Router();
router.get("/", (req, res)=>{
    res.send("Welcome TO Users");
})

router.get('/users',(req, res)=>{
    res.send("All ur User Details are Available");
})

router.post('/', (req, res)=>{
    res.send("Bye");
})
app.use(router);


module.exports= app;
