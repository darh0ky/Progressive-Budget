const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/progressivebudget", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

// routes
app.use(require("./routes/app.js"));

app.listen(port, () => {
    console.log(`App running on port ${port}!`);
});
