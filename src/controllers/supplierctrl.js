let smodel=require("../models/suppliermodel.js");

exports.addSupplier=(req,res)=>{
    
    let {name,email,phone,companyname,address,gstnumber}=req.body;
    let promise=smodel.addSupplier(name,email,phone,companyname,address,gstnumber);

    promise.then((result)=>
    {
        //console.log("Supplier saved successfully");
        res.send("Supplier saved successfully...");
        
    }).catch((err)=>
    {
       //console.error("Supplier not saved");
        res.send("Supplier not saved...");
    });
}

exports.viewSuppliers=(req,res)=>
{
    let promise=smodel.viewSuppliers();

    promise.then((result)=>
    {
        res.send(result);
       // console.log(result);

    }).catch((err)=>
    {
        res.send("Data not found");
        //console.log("Data not found");
    });
}

exports.getSupplierById=(req,res)=>
{
    let id=req.params.id;
    console.log(id);
    let promise=smodel.getSupplierById(id);
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

exports.updateSupplierById=(req,res)=>
{   
    let id=req.params.id;
    let {name,email,phone,companyname,address,gstnumber}=req.body;
    let promise=smodel.updateSupplierById(id,name,email,phone,companyname,address,gstnumber);
    promise.then((result)=>
    {
       if(result.affectedRows === 0)
        {
            //console.log("Supplier not updated");
            res.send("Supplier not updated");
        }
        else
        {
            //console.log("Supplier updated");
            res.send("Supplier updated ");
        }
    }).catch((err)=>
    {
        res.send("Supplier not updated");
    });
}

exports.deleteSupplierById=(req,res)=>
{
    let id=req.params.id;
    let promise=smodel.deleteSupplierById(id);
    promise.then((result)=>
    {
        if(result.affectedRows === 0)
        {
            //console.log("Supplier not deleted");
            res.send("Supplier not deleted");
        }
        else
        {
            //console.log("Supplier deleted successfully");
            res.send("Supplier deleted successfully");
        }
    }).catch((err)=>
    {
        //console.log("Supplier not deleted");
        res.send("Supplier not deleted");
    });
}