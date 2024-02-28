require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());

const connection = mysql.createConnection(process.env.DATABASE_URL);

app.get("/", (req, res) => {
  console.log("Hello express");
  res.send("Hello My FR1END");
});

app.get("/foodmenu", (req, res) => {
  connection.query(
    "SELECT foodID, foodName, foodDescription, foodPrice, tbl_menu.menuName FROM tbl_food, tbl_menu WHERE tbl_food.MenuID = tbl_menu.menuID",
    function (err, results, fields) {
      res.send(results);
    }
  );
});

app.listen(process.env.PORT || 3000);
