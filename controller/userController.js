// userController.js

import { userList } from "../model/userModel.js";

export function handleUser(req, resp) {
  const userData = userList();
  console.log(userData);
  resp.render("user", { userss: userData });
}
