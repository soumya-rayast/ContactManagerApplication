const express = require("express");
const router = express.Router();

const { getContacts, createContact, getContact, updateContact, deleteContact } = require("../controllers/contactController");

//Route for getting all contacts
router.route("/").get(getContacts).post(createContact);

//Route for Creating Contact's
// router.route("/").post(createContact);

//Route for showing individual contact
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

// Route for update contact
// router.route("/:id").put(updateContact);

// Route for deleting Account 
// router.route("/:id").delete(deleteContact);

module.exports = router;