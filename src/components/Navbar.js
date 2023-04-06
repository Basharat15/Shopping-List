import React, { useEffect, useRef, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import firebase from "../utils/firebase";

const Navbar = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [guideTitle, setGuideTitle] = useState("");
  const [guideCotent, setGuideContent] = useState("");
  const [emailError, setEmailError] = useState({ error: false, msg: "" });
  const [passwordError, setPasswordError] = useState({ error: false, msg: "" });

  const registerHandler = async (event) => {
    if (!email) {
      setEmailError({ error: true, msg: "" });
      return;
    }
    if (!password) {
      setPasswordError({ error: true, msg: "" });
      return;
    }
    event.preventDefault();
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("You have registered successfully");
        // firebase
        //   .firestore()
        //   .collection("Users")
        //   .doc(user.uid)
        //   .set({
        //     userId: user.uid,
        //     // firstName: firstName,
        //     // lastName: lastName,
        //     email: email,
        //   })
        //   .then(() => {
        //     setOpen2(false);
        //     alert("You have been successfully registered.");
        //     // setFirstName("");
        //     // setLastName("");
        //     setEmail("");
        //     setPassword("");
        //   })
        //   .catch((error) => {
        //     alert(error);
        //     setEmail("");
        //     setPassword("");
        //   });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setOpen2(false);
        alert(errorMessage);
        setEmail("");
        setPassword("");
      });
  };

  const LoginHandler = async (event) => {
    if (!email) {
      setEmailError({ error: true, msg: "" });
      return;
    }
    if (!password) {
      setPasswordError({ error: true, msg: "" });
      return;
    }
    event.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setOpen3(false);
        alert("You have Successfully signed in.");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setOpen3(false);
        alert(errorMessage);
        setEmail("");
        setPassword("");
      });
  };
  const createGuideHandler = () => {
    if (!guideTitle) {
      setEmailError({ error: true, msg: "" });
      return;
    }
    if (!guideCotent) {
      setPasswordError({ error: true, msg: "" });
      return;
    }
    setOpen4(false);
    alert("Everything is working good");
    setGuideTitle("");
    setGuideContent("");
  };
  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("You have signedout successfully");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      style={{ height: 70 }}
    >
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo01"
          style={{ marginLeft: "2%" }}
        >
          <a
            style={{
              color: "#000080",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
            className="navbar-brand"
            href="/"
          >
            Shopping List
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            style={{
              marginLeft: "30%",
              width: "60%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <li className="nav-item">
              <a
                onClick={() => {
                  setOpen1(true);
                }}
                className="nav-link"
                href="#"
              >
                Account
              </a>
            </li>
            <li className="nav-item">
              <a onClick={logoutHandler} className="nav-link" href="#">
                Logout
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  setOpen4(true);
                }}
                className="nav-link"
                href="#"
              >
                Create Guide
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  setOpen3(true);
                }}
                className="nav-link"
                href="#"
              >
                Login
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => {
                  setOpen2(true);
                }}
                className="nav-link"
                href="#"
              >
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Modal
        open={open1}
        onClose={() => {
          setOpen1(false);
        }}
        styles={{
          modal: { width: "70%", marginTop: 60 },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "1%",
            marginBottom: "6%",
          }}
        >
          <text style={{ textAlign: "center", fontSize: 30 }}>
            Account Details
          </text>
        </div>
      </Modal>
      <Modal
        open={open2}
        onClose={() => {
          setOpen2(false);
        }}
        styles={{
          modal: { width: "70%", marginTop: 60 },
        }}
      >
        <p class="fs-2" style={{ marginTop: "2%" }}>
          Sign up
        </p>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(text) => {
                setEmailError({ error: false, msg: "" });

                setEmail(text.target.value);
              }}
            />
            {emailError.error ? (
              <p class="fw-lighter">Please enter your email</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(text) => {
                setPasswordError({ error: false, msg: "" });

                setPassword(text.target.value);
              }}
            />
            {passwordError.error ? (
              <p class="fw-lighter">Please enter your password</p>
            ) : null}
          </div>

          <button
            type="button"
            class="btn btn-warning"
            style={{ marginTop: "1%" }}
            onClick={registerHandler}
          >
            SIGN UP
          </button>
        </form>
      </Modal>
      <Modal
        open={open3}
        onClose={() => {
          setOpen3(false);
        }}
        styles={{
          modal: { width: "70%", marginTop: 60 },
        }}
      >
        <p class="fs-2" style={{ marginTop: "2%" }}>
          Login
        </p>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(text) => {
                setEmailError({ error: false, msg: "" });
                setEmail(text.target.value);
              }}
            />
            {emailError.error ? (
              <p class="fw-lighter">Please enter your email</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={(text) => {
                setPassword({ error: false, msg: "" });

                setPassword(text.target.value);
              }}
            />
            {passwordError.error ? (
              <p class="fw-lighter">Please enter your password</p>
            ) : null}
          </div>

          <button
            type="button"
            class="btn btn-warning"
            style={{ marginTop: "1%" }}
            onClick={LoginHandler}
          >
            LOGIN
          </button>
        </form>
      </Modal>
      <Modal
        open={open4}
        onClose={() => {
          setOpen4(false);
        }}
        styles={{
          modal: { width: "70%", marginTop: 60 },
        }}
      >
        <p class="fs-2" style={{ marginTop: "2%" }}>
          Create Guide
        </p>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Guide Title
            </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputEmail1"
              // aria-describedby="emailHelp"
              onChange={(text) => {
                setEmailError({ error: false, msg: "" });

                setGuideTitle(text.target.value);
              }}
            />
            {emailError.error ? (
              <p class="fw-lighter">Please enter your guide title.</p>
            ) : null}
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Guide Content
            </label>
            <input
              type="text"
              className="form-control"
              // id="exampleInputPassword1"
              onChange={(text) => {
                setPasswordError({ error: false, msg: "" });

                setGuideContent(text.target.value);
              }}
            />
            {passwordError.error ? (
              <p class="fw-lighter">Please enter your guide content</p>
            ) : null}
          </div>

          <button
            type="button"
            class="btn btn-warning"
            style={{ marginTop: "1%" }}
            onClick={createGuideHandler}
          >
            CREATE
          </button>
        </form>
      </Modal>
    </nav>
  );
};

export default Navbar;
