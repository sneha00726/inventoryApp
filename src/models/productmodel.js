let db = require("../../db.js");

exports.saveProduct=(pname, price, supplier, cid, stock) =>{

    return new Promise((resolve,reject)=>{
        db.query("insert into product(pname, price, supplier, cid, stock) values (?, ?, ?, ?, ?)",[pname, price, supplier, cid, stock],
            (err,result)=>{
                if(err){
                    reject("Product not saved");
                }else{
                    resolve("Product saved successfully...");
                }
            }
        );
    });
};

exports.viewProducts=()=>
{
    return new Promise((resolve,reject)=>
    {
        db.query("select *from product",
        (err,result)=>
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        });
    });
}

exports.getProdById=(id)=>
{
    return new Promise((resolve, reject)=>
    {
        db.query("select *from product where pid=?",[id],
        (err,result)=>
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        });
    });
}

exports.updateProdById=(id,pname,price,supplier,cid,stock)=>{
    return new Promise((resolve,reject)=>{
        db.query("update product set pname=?, price=?, supplier=?, stock=? where pid=?",[pname,price,supplier,stock,id],(err,result)=>
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        });
    });
}

exports.deleteProdById=(id)=>{
    return new Promise((resolve,reject)=>
    {
        db.query("delete from product where pid=?",[id],
        (err,result)=>
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve(result);
            }
        });
    });
}