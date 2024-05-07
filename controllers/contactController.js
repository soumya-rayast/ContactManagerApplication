const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

// get all contacts
// route GET /api/contacts
// access private

const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({user_id:req.user.id});
    res.status(200).json(contacts);
});

// for create contacts 
// route POSt /api/contacts
// access private

const createContact = asyncHandler(async (req, res) => {
    console.log("The request body is :", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Fields are mandatory");
    }
    const contact = await Contact.create({
        name, email, phone,user_id:req.user.id,
    });
    res.status(201).json({ message: `Create Contact` });
});

// for Get individual contacts 
// route POSt /api/contacts/:id
// access private

const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not  found")
    }
    res.status(200).json(contact)
});

// for update contact 
// route POSt /api/contacts/:id
// access private

const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id)
    if (!contact) {
        res.status(404);
        throw new Error("Contact not  found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user don't have permission to update other user contact's")
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updateContact);
});

// for delete contact 
// route POSt /api/contacts/:id
// access private

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Connect not found")
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user don't have permission to delete other user contact's")
    }
    // await Contact.remove(); //its delete all contact present in db
    await Contact.deleteOne({_id:req.params.id});

    res.status(200).json(contact);
});

module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };
