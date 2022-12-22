const Cart =require("../models/cart.models")

const express = require("express");

const router = express.Router();

// Post Todo

router.post("/post", async (req, res) => {
  try {
    const data = await Cart.create(req.body);
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

// GET All the Todo

router.get("/", async (req, res) => {
  try {
    const data = await Cart.find({}).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

// Update One By Id

router.patch("/:id", async (req, res) => {
  try {
    const data = await Cart.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(200).send(data);
  } catch (er) {
    return res.status(500).send({ error: er.message });
  }
});

//  delete by id

router.delete("/:id", async (req, res) => {
  try {
    const data = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(data);
  } catch (er) {
    res.status(500).send({ error: er.message });
  }
});


module.exports = router;
