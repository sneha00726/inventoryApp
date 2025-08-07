let pmodel=require("../models/productmodel.js");

exports.addProduct=(req,res)=>{
    
    let {pname,price,supplier_id,cid,stock} = req.body;
    let promise=pmodel.saveProduct(pname, price, supplier_id, cid, stock);

    promise.then((result)=>
    {
        res.send("Product saved successfully...");
        //console.log("Product saved successfully");
        
    }).catch((err)=>
    {
        res.send("Product not saved..."+err);
        //console.log("Product not saved");
    });
}

exports.viewProducts=(req,res)=>
{
    let promise=pmodel.viewProducts();

    promise.then((result)=>
    {
        res.send(result);
        //console.log(result);

    }).catch((err)=>
    {
        res.send("Data not found");
        //console.log("Data not found");
    });
}

exports.getProdById=(req,res)=>
{
    let id=req.params.id;
    console.log(id);
    let promise=pmodel.getProdById(id);
    promise.then((result)=>
    {
        res.send(result);
        //console.log(result);

    }).catch((err)=>
    {
        res.send("Data not found");
        //console.log("Data not found");
    });
}

exports.updateProdById=(req,res)=>
{   
    let id=req.params.id;
    let {pname,price,supplier_id,cid,stock}=req.body;
    let promise=pmodel.updateProdById(id,pname,price,supplier_id,cid,stock);
    promise.then((result)=>
    {
       if(result.affectedRows === 0)
        {
            console.log("Product not updated");
           // res.send("Product not updated");
        }
        else
        {
            res.send("Product updated ");
            // console.log("Product updated");
        }
    }).catch((err)=>
    {
        res.send("Product not updated");
    });
}

exports.deleteProdById=(req,res)=>
{
    let id=req.params.id;
    let promise=pmodel.deleteProdById(id);
    promise.then((result)=>
    {
        if(result.affectedRows === 0)
        {
            res.send("Product not deleted");
            //console.log("Product not deleted");
        }
        else
        {
            res.send("Product deleted successfully");
            //console.log("Product deleted successfully");
        }
    }).catch((err)=>
    {
        res.send("Product not deleted"+err);
        //console.log("Product not deleted");
    });
}

exports.searchProdByName=(req,res)=>
{
    let name=req.query.pname;
    let promise=pmodel.searchProdByName(name);

    promise.then((result)=>
    {
        res.send(result);
        console.log("Searching for pname:", name); 
        console.log("Product found");

    }).catch((err)=>
    {
        res.send("Data not found"+err);
        //console.log("Data not found");
    });
}
