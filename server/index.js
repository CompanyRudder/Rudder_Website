const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const db = require("./db/connection.js");

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 443;

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

//--PORTFOLIO LIST
app.get("/api/portfolio", (req, res) => {
  const sql = "SELECT * FROM portfolio order by e_date desc";
  db.query(sql, (err, result) => {
    res.send(result);
    console.log(result);
    if (err) console.log(err);
  });
});
//--PORTFOLIO LIST(--ENGLISH VER)
app.get("/api/portfolio_en", (req, res) => {
  const sql = "SELECT * FROM portfolio_en order by e_date desc";
  db.query(sql, (err, result) => {
    res.send(result);
    console.log(result);
    if (err) console.log(err);
  });
});
//--PORTFOLIO DETAIL
app.post("/api/portfolioDetail", (req, res) => {
  var id = req.body.id;
  const sql = "SELECT * FROM portfolio where idx=?";
  db.query(sql, [id], (err, result) => {
    console.log("DETAIL--REQUEST");
    res.send(result);
    if (err) console.log(err);
  });
});
//--PORTFOLIO DETAIL(--ENGLISH VER)
app.post("/api/portfolioDetailEN", (req, res) => {
  var id = req.body.id;
  const sql = "SELECT * FROM portfolio_en where idx=?";
  db.query(sql, [id], (err, result) => {
    console.log("DETAIL--REQUEST");
    res.send(result);
    if (err) console.log(err);
  });
});

//--ADMIN LOGIN
app.post("/api/login", (req, res) => {
  const sql = "SELECT * FROM login";
  db.query(sql, (err, result) => {
    res.send(result);
    console.log(result);
    if (err) console.log(err);
  });
});

//--PORTFOLIO INSERT(WRITE)
app.post("/api/insertPortfolio", (req, res) => {
  var title = req.body.data.title;
  var date = req.body.data.date;
  var sub_title1 = req.body.data.sub_title1;
  var sub_contents1 = req.body.data.sub_contents1;
  var sub_title2 = req.body.data.sub_title2;
  var sub_contents2 = req.body.data.sub_contents2;
  var sub_title3 = req.body.data.sub_title3;
  var sub_contents3 = req.body.data.sub_contents3;
  var sub_title4 = req.body.data.sub_title4;
  var sub_contents4 = req.body.data.sub_contents4;
  var sub_title5 = req.body.data.sub_title5;
  var sub_contents5 = req.body.data.sub_contents5;
  var sub_link_title = req.body.data.sub_link_title;
  var sub_link_adrs = req.body.data.sub_link_adrs;

  var pic1 = req.body.data.pic1.split("fakepath\\")[1];
  var pic2 = req.body.data.pic2.split("fakepath\\")[1];
  var pic3 = req.body.data.pic3.split("fakepath\\")[1];
  var pic4 = req.body.data.pic4.split("fakepath\\")[1];
  var pic5 = req.body.data.pic5.split("fakepath\\")[1];

  var contents = req.body.data.contents;

  const sql =
    "INSERT INTO portfolio" +
    "(e_title, e_date, sub_title1, sub_contents1, sub_title2, sub_contents2," +
    "sub_title3, sub_contents3, sub_title4, sub_contents4," +
    "sub_title5, sub_contents5, sub_link_title, sub_link_adrs, pic1, pic2, pic3, pic4, pic5, e_contents, lang)" +
    " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'ko')";

  db.query(
    sql,
    [
      title,
      date,
      sub_title1,
      sub_contents1,
      sub_title2,
      sub_contents2,
      sub_title3,
      sub_contents3,
      sub_title4,
      sub_contents4,
      sub_title5,
      sub_contents5,
      sub_link_title,
      sub_link_adrs,
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      contents,
    ],
    (err, result) => {
      console.log("UPLOAD--REQUEST");
      res.send(result);
      if (err) console.log(err);
    }
  );
});
//--PORTFOLIO INSERT(--ENGLISH VER)
app.post("/api/insertPortfolio_en", (req, res) => {
  var title = req.body.data.title;
  var date = req.body.data.date;
  var sub_title1 = req.body.data.sub_title1;
  var sub_contents1 = req.body.data.sub_contents1;
  var sub_title2 = req.body.data.sub_title2;
  var sub_contents2 = req.body.data.sub_contents2;
  var sub_title3 = req.body.data.sub_title3;
  var sub_contents3 = req.body.data.sub_contents3;
  var sub_title4 = req.body.data.sub_title4;
  var sub_contents4 = req.body.data.sub_contents4;
  var sub_title5 = req.body.data.sub_title5;
  var sub_contents5 = req.body.data.sub_contents5;
  var sub_link_title = req.body.data.sub_link_title;
  var sub_link_adrs = req.body.data.sub_link_adrs;

  var pic1 = req.body.data.pic1.split("fakepath\\")[1];
  var pic2 = req.body.data.pic2.split("fakepath\\")[1];
  var pic3 = req.body.data.pic3.split("fakepath\\")[1];
  var pic4 = req.body.data.pic4.split("fakepath\\")[1];
  var pic5 = req.body.data.pic5.split("fakepath\\")[1];

  var contents = req.body.data.contents;

  const sql =
    "INSERT INTO portfolio_en" +
    "(e_title, e_date, sub_title1, sub_contents1, sub_title2, sub_contents2," +
    "sub_title3, sub_contents3, sub_title4, sub_contents4," +
    "sub_title5, sub_contents5, sub_link_title, sub_link_adrs, pic1, pic2, pic3, pic4, pic5, e_contents, lang)" +
    " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'en')";

  db.query(
    sql,
    [
      title,
      date,
      sub_title1,
      sub_contents1,
      sub_title2,
      sub_contents2,
      sub_title3,
      sub_contents3,
      sub_title4,
      sub_contents4,
      sub_title5,
      sub_contents5,
      sub_link_title,
      sub_link_adrs,
      pic1,
      pic2,
      pic3,
      pic4,
      pic5,
      contents,
    ],
    (err, result) => {
      console.log("UPLOAD--REQUEST");
      res.send(result);
      if (err) console.log(err);
    }
  );
});

//--PORTFOLIO UPDATE
app.post("/api/updatePortfolio", (req, res) => {
  var idx = req.body.data.idx;
  var date = req.body.data.date;
  var sub_title1 = req.body.data.sub_title1;
  var sub_contents1 = req.body.data.sub_contents1;
  var sub_title2 = req.body.data.sub_title2;
  var sub_contents2 = req.body.data.sub_contents2;
  var sub_title3 = req.body.data.sub_title3;
  var sub_contents3 = req.body.data.sub_contents3;
  var sub_title4 = req.body.data.sub_title4;
  var sub_contents4 = req.body.data.sub_contents4;
  var sub_title5 = req.body.data.sub_title5;
  var sub_contents5 = req.body.data.sub_contents5;
  var sub_link_title = req.body.data.sub_link_title;
  var sub_link_adrs = req.body.data.sub_link_adrs;

  var contents = req.body.data.contents;

  const sql =
    "UPDATE portfolio SET " +
    "e_date=?, sub_title1=?, sub_contents1=?," +
    "sub_title2=?, sub_contents2=?, sub_title3=?, sub_contents3=?," +
    "sub_title4=?, sub_contents4=?, sub_title5=?, sub_contents5=?," +
    "sub_link_title=?, sub_link_adrs=?,e_contents=?" +
    " WHERE idx=?";

  db.query(
    sql,
    [
      date,
      sub_title1,
      sub_contents1,
      sub_title2,
      sub_contents2,
      sub_title3,
      sub_contents3,
      sub_title4,
      sub_contents4,
      sub_title5,
      sub_contents5,
      sub_link_title,
      sub_link_adrs,
      contents,
      idx,
    ],
    (err, result) => {
      console.log("UPDATE--REQUEST");
      res.send(result);
      if (err) console.log(err);
    }
  );
});
//--PORTFOLIO UPDATE(--ENGLISH VER)
app.post("/api/updatePortfolio_en", (req, res) => {
  var idx = req.body.data.idx;
  var date = req.body.data.date;
  var sub_title1 = req.body.data.sub_title1;
  var sub_contents1 = req.body.data.sub_contents1;
  var sub_title2 = req.body.data.sub_title2;
  var sub_contents2 = req.body.data.sub_contents2;
  var sub_title3 = req.body.data.sub_title3;
  var sub_contents3 = req.body.data.sub_contents3;
  var sub_title4 = req.body.data.sub_title4;
  var sub_contents4 = req.body.data.sub_contents4;
  var sub_title5 = req.body.data.sub_title5;
  var sub_contents5 = req.body.data.sub_contents5;
  var sub_link_title = req.body.data.sub_link_title;
  var sub_link_adrs = req.body.data.sub_link_adrs;

  var contents = req.body.data.contents;

  const sql =
    "UPDATE portfolio_en SET " +
    "e_date=?, sub_title1=?, sub_contents1=?," +
    "sub_title2=?, sub_contents2=?, sub_title3=?, sub_contents3=?," +
    "sub_title4=?, sub_contents4=?, sub_title5=?, sub_contents5=?," +
    "sub_link_title=?, sub_link_adrs=?,e_contents=?" +
    " WHERE idx=?";

  db.query(
    sql,
    [
      date,
      sub_title1,
      sub_contents1,
      sub_title2,
      sub_contents2,
      sub_title3,
      sub_contents3,
      sub_title4,
      sub_contents4,
      sub_title5,
      sub_contents5,
      sub_link_title,
      sub_link_adrs,
      contents,
      idx,
    ],
    (err, result) => {
      console.log("UPDATE--REQUEST");
      res.send(result);
      if (err) console.log(err);
    }
  );
});

//--PORTFOLIO DELETE
app.post("/api/deletePortfolio", (req, res) => {
  var idx = req.body.idx;
  const sql = "DELETE FROM portfolio WHERE idx=?";
  db.query(sql, [idx], (err, result) => {
    console.log("DELETE--REQUEST");
    res.send(result);
    if (err) console.log(err);
  });
});
//--PORTFOLIO DELETE(--ENGLISH VER)
app.post("/api/deletePortfolio_en", (req, res) => {
  var idx = req.body.idx;
  const sql = "DELETE FROM portfolio_en WHERE idx=?";
  db.query(sql, [idx], (err, result) => {
    console.log("DELETE--REQUEST");
    res.send(result);
    if (err) console.log(err);
  });
});

app.listen(PORT, (req, res) => {
  console.log(`running on port ${PORT}`);
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
