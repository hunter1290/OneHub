const express = require('express');
require('./db/config');
const User = require('./db/User');
const cors = require('cors');
const app = express();
const Product = require('./db/Product')
const Jwt = require('jsonwebtoken');

 const jwtKey = 'e-comm';

app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {

    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);

})

app.post("/login", async (req, res) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select("-password");
        if (user) {
            Jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (error, token) => {
                if (error) {
                    res.send({ result: "something went wrong,please try later " });

                }
                res.send({user,  auth: token });

            })


        }
    }
    else {
        res.send("NO user found");
    }
})

app.post("/add-product", async (req, res) => {
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get("/products", async (req, res) => {
    let products = await Product.find();

    if (products.length > 0) {
        res.send(products);
    }
    else {
        res.send({ result: "No products found" });
    }
})

app.delete("/product/:id", async (req, res) => {
    // res.send("working");
    const result = await Product.deleteOne({ id: req.params.id });
    res.send(result)

})

app.get("/product/:id", async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });

    if (result) {
        res.send(result);
    } else {
        res.send({ result: "NO record found" });
    }
})

app.put("/product/:id", async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.send(result);
})

app.get("/product/search/:key", async (req, res) => {
    let result = await Product.find({
        "$or": [

            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } },
            {
                price: { $regex: req.params.key }

            }
        ]
    });
    res.send(result);
})

function verifyToken(req,res,next){
    let token = req.headers['authorization'];
    if(token){
         token = token.split(' ')[1];

         Jwt.verify(token,jwtKey,(err,valid)=>{
             if(err){
            res.status(401).send({result:"please add valid token with header"})
                   
             }else{
                  next();
             }
         })

    }else{
            res.status(403).send({result:"please add token with header"})
    }
    console.log('middleware called',token);
    next();
}

app.listen(5000, (req, res) => {
    console.log("server is running");
})