const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

const homeRoutes = require("./routes/home.routes");
const cartRoutes = require("./routes/cart.routes");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "tajna_sesije",
    resave: false,
    saveUninitialized: true
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/home", homeRoutes);
app.use("/cart", cartRoutes);

const categoriesData = require("./data/mydata");
app.get("/", (req, res) => {
  res.render("home", { categoriesData, session: req.session });
});

app.get("/cart/state", (req, res) => {
  res.json(req.session.cart || {});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
