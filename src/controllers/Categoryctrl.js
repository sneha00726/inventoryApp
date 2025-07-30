let model_cat=require("../models/Categorymodel.js");

exports.createCategory=(req,res)=>
{
    let {name}=req.body;
   // console.log("im in controller");
    let promise=model_cat.CreateCategoryAdd(name);
    promise.then((result)=>
    {
        console.log("data save");
        res.send("data save"); //it save
    }).catch((err)=>
    {
        res.send("data is not save duplicate entry not allowed");   //if input name is duplicate 
    });

}

exports.getAllCategory=(req,res)=>
{
    let promise=model_cat.getViewCategory();
    promise.then((result)=>
    {
        res.json(result);
    }).catch((err)=>
    {
        res.send("data not found "+err);
    });

}
exports.getCategoryById=(req,res)=>
{
     let id  = req.params.id; 
    console.log("id");
    let promise=model_cat.getIdCategory(id);
    promise.then((result)=>
    {
        res.json(result);
    }).catch((err)=>
    {
        res.send("Invalid ID"+err);
    });
}