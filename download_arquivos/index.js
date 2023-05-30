

var express = require("express");
var app = express();
var cors = require('cors');
app.use(cors());

app.get("/", (req, res) => {
    res.json({
        message: "requisição realizada com sucesso"
    })
});

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});

app.get("/file", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./file.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("sucesso");
        }
    });
});

app.get("/jeanswear-spain", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./pdf/jeanswear-spain.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("sucesso");
        }
    });
});

app.get("/jeanswear", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./pdf/jeanswear.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("sucesso");
        }
    });
});

app.get("/qualidade-spain", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./pdf/qualidade-spain.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("sucesso");
        }
    });
});

app.get("/qualidade-workwear", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./pdf/qualidade-workwear.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("sucesso");
        }
    });
});

app.get("/qualidade", (req, res) => {
    var path = require("path");
    var file = path.join(__dirname, "./pdf/qualidade.pdf");

    res.download(file, function (err) {
        if (err) {
            console.log("Error");
            console.log(err);
        } else {
            console.log("sucesso");
        }
    });
});