const asyncHandler = require("express-async-handler");


// get all contacts
// route GET /api/contacts
// access public

const getContacts = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Get all contacts` });
});

// for create contacts 
// route POSt /api/contacts
// access public

const createContact =asyncHandler ( async (req, res) => {

    console.log("The request body is :",req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    res.status(201).json({ message: `Create Contact` });
});

// for Get individual contacts 
// route POSt /api/contacts/:id
// access public

const getContact =asyncHandler ( async (req,res)=>{
    res.status(200).json({message:`Get contact for ${req.params.id}`})
});

// for update contact 
// route POSt /api/contacts/:id
// access public

const  updateContact = asyncHandler ( async (req,res)=>{
    res.status(200).json({message:`Update contact for ${req.params.id}`});
});

// for delete contact 
// route POSt /api/contacts/:id
// access public

const deleteContact = asyncHandler (async (req,res)=>{
    res.status(200).json({message :`Delete contact for ${req.params.id}`})
});

module.exports = { getContacts ,createContact ,getContact,updateContact,deleteContact };
