const express= require("express")
const mongoose= require("mongoose")
require("dotenv").config()

const router= require("./routes/ToDoRoutes")

const cors = require("cors")

const app = express()
const PORT= process.env.PORT|| 5000

app.use(cors())
app.use(express.json())
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

mongoose
.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected..."))
.catch((err)=>console.log(err));

app.use("/api",router)

app.listen(PORT,()=>console.log(`listening at ${PORT}...`));