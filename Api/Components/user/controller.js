// Login            - Email, Passeword                  - POST
// SignUp           - Name, Lastname, Email, Password   - POST
// ShowUser         - Show                              - GET
// Reset_Password   - Email                             - POST
// Update_User      - Id, UserData                      - PUT
// Delete_User      - Id                                - DELETE

import { response } from "../../../network/index";

export const login = (req, res) => {
  const { email, password } = req.body;

  return response({
    res,
    data: { email, password },
  });
};

export const signup = (req, res) => {
  const { name, lastname, email, password } = req.body;

  return response({
    res,
    data: { name, lastname, email, password },
  });
};

export const showuser = (req, res) => {
  const { show } = req.body;

  return response({
    res,
    data: { show },
  });
};

export const reset_password = (req, res) => {
  const { email } = req.body;

  return response({
    res,
    data: { email },
  });
};

export const update_user = (req, res) => {
  const { id, update_user } = req.body;

  return response({
    res,
    data: { id, update_user },
  });
};

export const delete_user = (req, res) => {
  const { id } = req.body;

  return response({
    res,
    data: { id },
  });
};
