const express = require("express");
const cors = require("cors");
const dotanv = require("dotenv");
const connectDb = require('./config/db');
//dotenv config
dotanv.config();

//db config
connectDb();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//Port
const PORT = process.env.PORT || 8000;


// api endpoints
app.use("/api/user", require("./routes/userRoute"));
app.use("/api/customer", require("./routes/formRoute"));
app.use("/api/marketing", require('./routes/marketingRoute'))
app.use("/api/feedback", require("./routes/feedbackRoute"))


//check link
app.get("/", (req, res) => {
  res.send("API woking");
});


//listen
app.listen(process.env.PORT, () => {
  console.log(`Server Started on http://localhost:${process.env.PORT}`);
});