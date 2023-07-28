import jwt from "jsonwebtoken";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello worlds");
});
app.ge3;
app.post("/login", (req, res) => {
  const token = jwt.sign(
    {
      email: req.body.email,
      fullName: "User Name",
    },
    "key123"
  );
  console.log("user with data login in: ", req.body);
  res.json({ success: "true", token });
});

app.listen(5000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server started");
});
