const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
app.use("/api/contacts", contactRoutes)
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

