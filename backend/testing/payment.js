import express from "express";
import Stripe from "stripe";

const router = express.Router();
const stripe = new Stripe("sk_test_51SRZvYPwqwVC1HjkQzSorLfSJJImbJfiU0N5bZDVFyj4sSvlu3huMiUKyTdrz4XYmV5nEfUOp06wPbguCkRFWcnM00r0bD2Chb");

router.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Test Product" },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
