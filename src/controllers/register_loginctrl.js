let model_in=require("../models/register_loginmodel.js");
//let bcrypt=require("bcryptjs");
exports.HomeLoginPage=(req,res)=>
{
    res.send("welllcome home page");
}

exports.RegisterApi=(req,res)=>
{
    let {name,email,password,role}=req.body;
    
    let promsie=model_in.FindByEmail(email);
    promsie.then((result)=>
    {
        if(result.length>0)
        {
            console.log("email exits");
            res.send("email already exists");
        }
        else{
            model_in.InsertUser(name,email,password,role).then(()=>{
                res.send("user registered");
            }).catch((err)=>
            {
                res.send("error"+err);
            });


        }
    }).catch((err)=>
    {
        res.send("database err"+err);
    });

}

exports.LoginPage=(req,res)=>
{
    let {email,password}=req.body;
    let promise=model_in.ValidateLogin(email);
    promise.then((result)=>
    {
        if(result.length>0)
        {
            let userdata=result[0];
            let dbpass=userdata.password;
            if(password==dbpass)
            {
                console.log("login");
                res.send("login successfull");
            }
            else{
                 console.log("login failed");
                 res.send("login failed");
            }
        }
        else{
             console.log("email  failed" );
            res.send("email not fouund");
        }

    }).catch((err)=>
    {
        res.send(err);
    });
}