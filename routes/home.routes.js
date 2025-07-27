const express = require("express");
const router = express.Router();
const categoriesData = require("../data/mydata");

router.get("/getCategories", function (req, res) {
  res.render("home", {
    categoriesData,
    selectedCategoryId: null,
    session: req.session
  });
});

router.get("/getProducts/:id", function (req, res) {
  const categoryId = req.params.id;

  if (!categoriesData[categoryId]) {
    return res.status(404).send("Kategorija ne postoji");
  }

  res.render("home", {
    categoriesData,
    selectedCategoryId: categoryId,
    session: req.session
  });
});

module.exports = router;
