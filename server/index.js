require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const users = require("./routes/users");
const posts = require("./routes/posts");
const tags = require("./routes/tags");
const replies = require("./routes/replies");
const UserModel = require("./models/user");
const User = UserModel.User;
const products = require('./routes/products');
const bikers = require("./routes/bikers");
const Biker = require("./models/Biker");
const Room = require("./models/Room");
const Event = require("./models/Events");
const auth = require('./middleware/auth');
const multer = require("multer");
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });
let mongoDBURL = process.env.mongoDBURL;

mongoose
  .connect(mongoDBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("could not connect to mongoDB"));

app.use(express.static('public'));
app.use(express.static(path.resolve() + "/public"))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => {
  res.send("request successfully sent!");
});

app.use("/users", users);
app.use("/posts", posts);
app.use("/tags", tags);
app.use("/reply", replies);
app.use('/', products);
app.use('/apix', createProxyMiddleware({ 
  target: 'https://api.botpress.cloud/v1/chat', // Corrected target URL
  changeOrigin: true,
  secure: false,
}));

app.post("/biker", upload.single("image"), async (req, res) => {
  console.log("Request File:", req.file);
  console.log("Request Body:", req.body);
  const { bikeno, phoneno, licensecheck, helmetcheck, location, department, year } = req.body;
  const image = req.file.filename;
  try {
    const biker = new Biker({
      bikeno, phoneno, licensecheck, helmetcheck, location, department, year, image,
    })
    await biker.save();
    console.log("Biker created:", biker);
    res.status(201).json(biker);
  } catch (err) {
    console.error("Error creating biker:", err);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

app.post("/room", upload.single("image"), async (req, res) => {
  console.log("Request File:", req.file);  // Log the file details
  const { hostel_name, address, phoneno, department, year, room_type } = req.body;
  const image = req.file.filename;
  try {
    const room = new Room({
      hostel_name,
      address,
      phoneno,
      department,
      year,
      room_type,
      image,
    })
    await room.save();
    console.log("Room created:", room);
    res.status(201).json(room);
  } catch (err) {
    console.error("Error creating room:", err);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

app.get('/getroom', (req, res) => {
  Room.find()
    .then(room => res.json(room))
    .catch(err => res.json(err))
});

app.post("/event", async (req, res) => {
  console.log("Request Body:", req.body);
  try {
    const event = await Event.create(req.body);
    console.log("Event created:", event);
    res.status(201).json(event);
  } catch (err) {
    console.error("Error creating event:", err);
    res
      .status(500)
      .json({ error: "Internal Server Error", details: err.message });
  }
});

app.get('/about', auth, async (req, res) => {
  try {
    userId = req.userId;
    console.log(userId);
    const user = await User.find({ _id: userId }).select("-password")
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/bike_partner", async (req, res) => {
  try {
    const { location } = req.body;
    const bikers = await Biker.find({ location });
    res.send(bikers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/getevents", async (req, res) => {
  try {
    const { subject } = req.body;
    const events = await Event.find({ subject });
    res.send(events);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get('/getallbikers', async (req, res) => {
  try {
    const bikers = await Biker.find();
    res.json(bikers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/getallrooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    console.log(rooms);
    res.send(rooms);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/event_join", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const { phoneno } = req.query;
    const user = await User.findOne({ phoneno });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({
      _id: user._id,
      name: user.name,
      gender: user.gender,
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
