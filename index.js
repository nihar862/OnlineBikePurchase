var express = require('./node_modules/express');
var mongoose = require('mongoose');
var bodyparser = require('./node_modules/body-parser');
var User = require('./modules/User');
var app = express();
var Item = require ('./modules/items');
var jwt = require('jsonwebtoken');
var cors = require("cors");

var db = mongoose.connect('mongodb://localhost:27017/mean', function(err,response){
    if(err) console.log("There is error with mongodb")
    console.log("Connection has been added");
})

app.use(cors());

app.set('port', process.env.port || 3000);
app.use(bodyparser.json());

app.post('/item',(req,res) => {
    console.log(req.body._id);
    Item.findOne({_id : req.body._id}).exec(function(err,item)
    {
        if(err)
        {
            console.log("Error");
        }
        else if (!item)
        console.log("Item does not exist!");
        else{
            res.send({item});
        }
    });
})

app.post('/items',(req,res) => {
    var items = new Item(req.body);

    console.log("hiii")
    items.save((err,result) => {
        if(err){
            console.log(err);
            res.send({success: "Failed to add user", status: 500});
        }
        else
        res.send({ result , status: 200});
    })
})

app.post('/signup',(req,res) => {
    var user = new User(req.body);


    console.log(user);
    user.save((err,result) => {
        if(err){
            console.log(err);
            res.send({success: "Failed to add user", status: 500});
        }
        res.send({success: "Successfully added user", status: 200});
    })

})

app.post('/login',(req,res) => {
        var email = req.body.email;
        var password = req.body.password;
        User.findOne({ email:email }).exec(function(err,user)
        {
            if(err)
            {
                console.log("Error");
            }
            else if(!user)
            {
                console.log("User Does Not Exist");
                console.log(err);
                res.json({
                    user
                });
            }
            else
            {
                console.log(password +' '+user.password);

                if(user.password == password)
                {
                    jwt.sign({user},'secretkey',{expiresIn:'1h'},(err,token)=>{
                        res.json({
                            token,user
                        });

                        console.log(token);
                    });
                    
                }
                else
                {
                    console.log("Password does not match");
                    res.json({
                        password
                    });
                }
            }

        });
});

app.listen(app.get('port'),function(err,response){
    console.log("Server is running on port", app.get('port'));
});

