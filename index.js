const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const port = 3000
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }));
app.get('/api', (req, res) => {
  if (req.query.o == "w") {
    if (req.query.w) {
        fs.appendFile("hwidlist.txt", req.query.w+"\n", function (err) {
        res.send("saved")
        if (err) console.log(err);
        console.log('Saved!');
      });
      var f = fs.openSync("hwidlist.txt")
      fs.close(f)
    }
    else {
        res.send("<h1>Please set <bold>w</bold> parameter</h1>")
    }
  }
  if (req.query.o == "r") {
    fs.readFile("hwidlist.txt", function(err, data) {
        if (err) console.log(err);
        res.send(data.toString('utf-8'));
    });
  }
  var rf = fs.openSync("hwidlist.txt");
  fs.close(rf)
})

app.get('/clear', (req,res) => {
    console.log("succes")
    res.send("Succes")
    if (fs.existsSync("hwidlist.txt")) {
      const path = "hwidlist.txt"
      fs.rmSync(path)
      
      fs.appendFile("hwidlist.txt", '\n', (err) => {
        console.log(err)
        })
      var f = fs.openSync("hwidlist.txt")
      fs.close(f)
    }
    else {
      
      fs.appendFile("hwidlist.txt", '\n', (err) => {
        console.log(err)
      })
      var f = fs.openSync("hwidlist.txt")
      fs.close(f)
    }



})

app.post('/register', (req,res) => {
  console.log(req.body)
  res.send(req.body)
})
app.get('/register', (req,res) => {
  res.send("post req")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/docs', (req,res) => {
  res.sendFile('docs.html', { root: path.join(__dirname, '/public') });
})