import express from "express";
import { findUser, insertUser } from "../model/registerUserModel.js";
import { userValidtaion } from "../joi-validation/joiVaidation.js";
const router = express.Router();

router.post("/", userValidtaion, async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await findUser(email);

    if (existingUser) {
      return res.json({
        status: "error",
        message: "User with this email already exists",
      });
    }
    const user = await insertUser(req.body);
    user?._id
      ? res.json({
          status: "success",
          message: "successfully registered the user",
        })
      : res.json({
          status: "error",
          message: "failed registering the user",
        });
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
