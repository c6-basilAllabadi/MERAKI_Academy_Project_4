const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./models/db");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Import Routers
const userRouter = require("./routes/user")
const roleRouter=require("./routes/role");
const loginRouter = require("./routes/login");
const productRouter = require("./routes/product");

// Routes Middleware
app.use('/user',userRouter)
app.use('/role',roleRouter)
app.use('/login',loginRouter)
app.use('/product',productRouter)


// Handles any other endpoints [unassigned - endpoints]
app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
