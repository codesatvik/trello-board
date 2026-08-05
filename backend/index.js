const express = require("express");
const app = express();
app.use(express.json());
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");
require("dotenv").config();
const { userModel, organizationModel } = require("./models");

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userExist = await userModel.findOne({
    username,
  });
  if (userExist) {
    res.status(411).json({
      message: "user already exists",
    });
    return;
  }
  const newUser = await userModel.create({
    username,
    password,
  });
  res.json({
    message: "signup successful",
    id: newUser._id,
  });
});
app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const userExist = await userModel.findOne({
    username: username,
    password: password,
  });
  if (!userExist) {
    res.status(403).json({
      message: "incorrect credentials",
    });
  }
  const token = jwt.sign(
    {
      userId: userExist._id,
    },
    process.env.jwtSecret,
  );
  res.json({
    token,
  });
});
app.post("/organization", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const newOrganization = await organizationModel.create({
    title: req.body.title,
    description: req.body.description,
    admin: userId,
  });
  res.json({
    message: "organization created",
    id: newOrganization._id,
  });
});
app.get("/organization", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const organizationId = req.query.organizationId; //1

  const organization = await organizationModel.findOne({
    _id: organizationId,
  });
  if (!organization || organization.admin.toString() !== userId) {
    res.status(411).json({
      message:
        "Either this org doesnt exist or you are not an admin of this organization",
    });
    return;
  }
  const members = await userModel.find({
    _id: organization.members,
  });
  res.json({
    organization: {
      title: organization.title,
      description: organization.description,
      members: members.map((m) => ({
        username: m.username,
        id: m._id,
      })),
    },
  });
});
app.post("/add-member-to-organization", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const organizationId = req.body.organizationId;
  const memberUserUsername = req.body.memberUserUsername;

  const organization = await organizationModel.findOne({
    _id: organizationId,
  });

  if (!organization || organization.admin.toString() !== userId) {
    res.status(401).json({
      message: "either org does'nt exist or your not an admin",
    });
    return;
  }
  const memberUser = await userModel.findOne({
    username: memberUserUsername,
  });
  if (!memberUser) {
    res.json({
      message: "username does'nt exist",
    });
    return;
  }
  organization.members.push(memberUser._id);
  await organization.save();

  res.json({
    message: "new member added",
  });
});
app.post("/boards", (req, res) => {});
app.post("/issue", (req, res) => {});
app.get("/boards", (req, res) => {});
app.get("/issue", (req, res) => {});
app.get("/members", (req, res) => {});
app.put("/issue", (req, res) => {});

app.delete("/members", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const organizationId = req.body.organizationId;
  const memberUserUsername = req.body.memberUserUsername;

  const organization = await organizationModel.findOne({
    _id: organizationId,
  });
  if (!organization || organization.admin.toString() !== userId) {
    res.status(411).json({
      message:
        "Either this org doesnt exist or you are not an admin of this org",
    });
    return;
  }

  const memberUser = await userModel.findOne({
    username: memberUserUsername,
  });
  if (!memberUser) {
    res.status(411).json({
      message: "No user with this username exists in our db",
    });
    return;
  }

  organization.members = organization.members.filter(
    x => x.toString() !== memberUser._id.toString(),
  );
  await organization.save()
  res.json({
    message: "member deleted!",
  });
});
app.listen(3000, () => {
  console.log("listening to port 3000");
});
