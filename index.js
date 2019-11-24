const express = require('express');
const app = express();
const car = require('./stores');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('<h2>Rest API</h2>');
});
app.listen(3000,()=>{
    console.log('Listning.........');
});
app.get('/cars',(req,res)=>{
    res.json( car);
});

app.get('/cars/:code',(req,res)=>{
    let code = req.params.code;
    res.json( car.filter(c => c.code == code));
});
app.post('/car',(req,res)=>{
    let ca = req.body;
    car.push(ca);
    res.status(200).json(ca);
});
app.delete('/cars/:code',(req,res)=>{
    let code = req.params.code;
   // res.json(car.splice(code,1));
    car.forEach((c,index)=>{
        if(c.code == code){
            car.splice(index, 1);
            res.status(200).json(c);
        }
    })
})
app.put('/cars/:code',(req,res)=>{
    let code = req.params.code;
   // res.json(car.splice(code,1));
    car.forEach((c,index)=>{
        if(c.code == code){
            car.splice(index, 1);
            let newcar = req.body;
            newcar.code = code;
            car.push(newcar);
            res.status(200).json(newcar);
        }
    })
})