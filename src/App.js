import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMsgPassword, setErrMsgPassword] = useState("");
  const [errMsgConfirmPassword, setErrMsgConfirmPassword] = useState("");
  const [errStatusPassword, setErrStatusPassword] = useState(false);
  const [errStatusConfirmPassword, seterrStatusConfirmPassword] =
    useState(false);

  const onChangePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setErrMsgPassword("*Required");
      setErrStatusPassword(true);
    } else {
      setErrMsgPassword("");
      setErrStatusPassword(false);
    }
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value === "") {
      setErrMsgConfirmPassword("*Required");
      seterrStatusConfirmPassword(true);
    } else {
      setErrMsgConfirmPassword("");
      seterrStatusConfirmPassword(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === "") {
      setErrMsgPassword("*Required");
      setErrStatusPassword(true);
    } else {
      setErrMsgPassword("");
      setErrStatusPassword(false);
    }
    if (confirmPassword === "") {
      setErrMsgConfirmPassword("*Required");
      seterrStatusConfirmPassword(true);
    } else {
      setErrMsgConfirmPassword("");
      seterrStatusConfirmPassword(false);
    }

    if (confirmPassword !== password) {
      setErrMsgConfirmPassword("*Passwords both must match");
      seterrStatusConfirmPassword(true);
    } else {
      setErrMsgConfirmPassword("");
      seterrStatusConfirmPassword(false);
    }
  };

  return (
    <div class="bg-container p-4">
      <h1 class="form-heading text-center">Update Password</h1>
      <form id="updatePasswordForm" class="p-4" onSubmit={onSubmit}>
        <div class="mb-3">
          <label for="newPassword" class="input-label">
            NEW PASSWORD
          </label>
          <br />
          <input
            type="password"
            class="input"
            id="newPassword"
            placeholder="Create new password"
            onChange={onChangePassword}
            value={password}
          />
          <p id="newPasswordErrMsg" class="error-message mt-1">
            {errStatusPassword && errMsgPassword}
          </p>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="input-label">
            CONFIRM PASSWORD
          </label>
          <br />
          <input
            type="password"
            class="input"
            id="confirmPassword"
            placeholder="Confirm password"
            onChange={onChangeConfirmPassword}
            value={confirmPassword}
          />
          <p id="confirmPasswordErrMsg" class="error-message mt-1">
            {errStatusConfirmPassword && errMsgConfirmPassword}
          </p>
        </div>
        <div class="text-center mt-2">
          <button id="updateBtn" type="submit" class="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;