// const mongoose = require("mongoose");

// const connectDB = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.CONNECTION_STRING );
//         console.log("Database Connected :",
//             connect.connection.host,
//             connect.connection.name
//         )
//     } catch (err) {
//         console.log(err);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;


// const mongoose = require("mongoose");
// require("dotenv").config();

// const mongoURL = process.env.CONNECTION_STRING ;

// mongoose.connect(mongoURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// })

// const connectDB = mongoose.connection;

// connectDB.on("connected",()=>{
//     console.log('connected to Mongodb server')
// });
// connectDB.on('error',(err)=>{
//     console.error('Mongodb connection error :',err);
// })
// connectDB.on('disconnected',()=>{
//     console.log('MongoDB disconnected');
// })

// module.exports = connectDB; 
const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.CONNECTION_STRING;

mongoose.connect(mongoURL);

const connectDB = mongoose.connection;

connectDB.on("connected", () => {
    console.log('Connected to MongoDB server');
});

connectDB.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

connectDB.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

module.exports = connectDB;