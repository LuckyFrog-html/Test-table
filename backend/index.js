const express = require("express");
const router = require("./routes/routes")
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())

app.use("/api", router)

app.listen(PORT, () => {
    console.log("Server is started at port" + PORT);
});