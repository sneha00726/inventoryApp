// Import the database connection
let db=require("../../db.js");

// add customer data
exports.saveCustomer=(name,email,phone_no,company_name,address,gstNumber)=>
{
    return  new Promise((resolve,reject)=>
    {
        db.query("insert into customer values('0',?,?,?,?,?,?)",[name,email,phone_no,company_name,address,gstNumber],(err,result)=>
        {
            if(err)
            {
                reject(err);// Return error if query fails
            }
            else
            {
                resolve(result);// Return result on success
            }
        });
    });
}
// view all customer data
exports.Viewcustomer=()=>
{
    return new Promise((resolve,reject)=>
    {
        db.query("select *from customer",(err,result)=>
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
// get customer data by ID
exports.getCustomerById=(id)=>
{
    return new Promise((resolve,reject)=>
    {
        db.query("select *from customer where id=?",[id],(err,result)=>
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
// Update customer data by ID
exports.UpdateByid=(id,name,email,phone_no,company_name,address,gstNumber)=>
{
    return new Promise((resolve,reject)=>
    {
        db.query("update customer set name=? ,email=?,phone_no=?,company_name=?,address=?,gstNumber=? where id=?",[name,email,phone_no,company_name,address,gstNumber,id],(err,result)=>
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
// delete customer data by ID
exports.DeleteByID=(id)=>
{
    return new Promise((resolve,reject)=> 
    {
        db.query("delete from customer where id=?",[id],(err,result)=>
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