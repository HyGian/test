import express from "express";
import paymentRoutes from "./payment.js";

const app = express();
app.use(express.json());

app.use("/api", paymentRoutes);

app.listen(4242, () => {
  console.log("✅ Server is running at http://localhost:4242");
});
