import express from "express";
import * as dotenv from "dotenv";
import stripe from "stripe";

dotenv.config();
const router = express.Router();
const stripeClient = stripe(process.env.STRIPE_SECRET);
const successUrl = process.env.SUCCESS_URL || "http://localhost:3000/success";
const cancelUrl = process.env.CANCEL_URL || "http://localhost:3000/cancel";

router.route("/").post(async (req, res) => {
    try {
        const { product } = req.body;

        if (!product || !Array.isArray(product)) {
            return res.status(400).json({ error: "Invalid product data" });
        }

       

      

        res.json({ id: session.id });
    } catch (error) {
        console.error(error);
        res
            .status(500)
            .json({ success: false, message: "Server error", error: error.message });
    }
});

export default router;
