const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT || 3001;
const cors = require("cors")
const mongoose = require("mongoose");


//connect db
mongoose.connect('mongodb+srv://nikhilmandlik126:l63XaX8O3fIPb7ME@cluster0.o0wfvlr.mongodb.net/REACT-NODE-APP')
  .then(() => console.log("db connected"))
  .then((err) => {
    err;
  });

const databaseSeeder = require("./databaseSeeder");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const orderRoute = require("./routes/Order");

app.use(express.json())

app.use(cors())

//database seeder routes
app.use("/api/seed", databaseSeeder);

//routes for users
app.use("/api/users", userRoute);

//routes for products
app.use("/api/products", productRoute);

//routes for orders
app.use("/api/orders", orderRoute);





// paypal payment api for client key;
app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});





app.listen(PORT || 9000 , () => {
  console.log(`server listening on port ${PORT}`);
});
















//api product test route
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// app.get("/api/products/:id", (req, res) => {
//     const product = products.find((product)=>product.id === req.params.id)
//     res.json(product);
//   });
