import express from "express";
import {
  login,
  signup,
  showuser,
  reset_password,
  update_user,
  delete_user,
} from "./controller";

const RutaUser = express.Router();

RutaUser.route("/login").post(login);
RutaUser.route("/signup").post(signup);
RutaUser.route("/show").get(showuser);
RutaUser.route("/reset_password").post(reset_password);
RutaUser.route("/update_user").put(update_user);
RutaUser.route("/delete_user").delete(delete_user);

export default RutaUser;
