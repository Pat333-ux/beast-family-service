const express = require("express");
const cors = require("cors");
require("dotenv").config();

const familyRoutes = require("./routes/familyRoutes");

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Mount Family Service Routes
app.use("/api/family", familyRoutes);

app.get("/health", (req, res) => {
    status: "healthy",
    timestamp: new Date().toISOString()
});

app.listen(port, () => {
    console.log(`BEAST Family Service backend listening on port ${port}`);
});
