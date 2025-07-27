const express = require("express");
const router = express.Router();
const categoriesData = require("../data/mydata");

function getCartItems(sessionCart) {
  const items = [];
  for (const id in sessionCart) {
    for (const catId in categoriesData) {
      const product = categoriesData[catId].products.find(p => p.id === id);
      if (product) {
        items.push({
          product,
          quantity: sessionCart[id]
        });
      }
    }
  }
  return items;
}

router.post("/add/:id", (req, res) => {
  const id = req.params.id;
  if (!req.session.cart) req.session.cart = {};
  req.session.cart[id] = (req.session.cart[id] || 0) + 1;
  res.sendStatus(200);
});

router.post("/remove/:id", (req, res) => {
  const id = req.params.id;
  if (req.session.cart && req.session.cart[id]) {
    req.session.cart[id]--;
    if (req.session.cart[id] <= 0) {
      delete req.session.cart[id];
    }
  }
  res.sendStatus(200);
});

router.post("/delete/:id", (req, res) => {
  const id = req.params.id;
  if (req.session.cart && req.session.cart[id]) {
    delete req.session.cart[id];
  }
  res.sendStatus(200);
});

router.get("/getAll", (req, res) => {
  const cart = req.session.cart || {};
  const items = getCartItems(cart);

  if (req.headers.accept && req.headers.accept.includes("application/json")) {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    return res.json({ items, totalCount });
  }

  res.render("cart", { items, session: req.session });
});

router.get("/", (req, res) => {
  const cart = req.session.cart || {};
  const items = getCartItems(cart);
  res.render("cart", { items, session: req.session });
});

router.get("/state", (req, res) => {
  const cart = req.session.cart || {};
  res.json(cart);
});

module.exports = router;
