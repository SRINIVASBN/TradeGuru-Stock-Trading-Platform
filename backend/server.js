const express = require('express');   //we required express package
const mongoose = require('mongoose');  //required mongoose package
const dotenv = require('dotenv');   //we required dotenv package
const cors = require('cors');   //required cors package

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// Middleware
app.use(cors());  // Enable CORS for all routes
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded bodies

// connect MongoDB with express/backend using MONGO_URI from .env
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ MongoDB connected successfully');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});


// Routes for insertion 
const holdingsRoute = require("./Add_to_Db _&_Display_to_dash_routes/holdingsRoute");
const positionsRoute = require("./Add_to_Db _&_Display_to_dash_routes/positionsRoute");
const ordersRoute = require("./Add_to_Db _&_Display_to_dash_routes/ordersRoute");

// Middleware without any prefix
app.use("/", holdingsRoute);
app.use("/", positionsRoute);
app.use("/", ordersRoute);

// test route
app.get('/', (req, res) => {
  res.send('MongoDB Connected and Server Running!');
});





// start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});