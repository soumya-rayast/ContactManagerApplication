const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})

