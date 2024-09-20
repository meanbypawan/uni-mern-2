import express from "express";
import IndexRouter from "./routes/index.route.js";
import AdminRouter from "./routes/admin.route.js";
import ProductRouter from "./routes/product.route.js";
import CategoryRouter from "./routes/category.route.js";
import bodyParser from "body-parser";
import session from "express-session";
import url, { fileURLToPath } from "url";
import path from "path";
const app = express();
let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

app.set("view engine","ejs");
app.use(bodyParser.json()); // json-format
app.use(bodyParser.urlencoded({extended: true})); // form-urlencoded
app.use(session({secret: "dslfreirjewcvcvcvbrroierioeur"}));
app.use(express.static(path.join(__dirname,"public")));
// http://localhost:3000
app.use("/",IndexRouter);

// http://localhost:3000/admin/
app.use("/admin",AdminRouter);

// http://localhost:3000/product/add
app.use("/product",ProductRouter);
app.use("/category",CategoryRouter);

app.listen(3000,()=>{
    console.log("Server Running at http://localhost:3000");
});