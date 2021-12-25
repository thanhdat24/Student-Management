const express = require("express");
const router = require("./routers/root.router");
const app = express();
const port = 3000;
// Chú ý: chuyển req, res về json để tiện thao tác
app.use(express.json());

app.use(router);


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
