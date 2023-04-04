import React, { useRef, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import firebase from "../utils/firebase";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [registered, setRegistered] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const countRef = useRef(registered);
  const OpenRef = useRef(open);
  const callBackFunction = () => {
    OpenRef.current = true;
    countRef.current = false;
    setRegistered(countRef.current);
    setOpen(open);
  };
  const onOpenModal = () => setOpen(!open);
  const onCloseModal = () => setOpen(!open);

  const registerHandler = async (event) => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        firebase
          .firestore()
          .collection("Users")
          .doc(user.uid)
          .set({
            userId: user.uid,
            firstName: firstName,
            lastName: lastName,
            email: email,
          })
          .then(() => {
            alert("You have been successfully registered.");
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            console.log("Error", error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const LoginHandler = (event) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert("You have Successfully signed in.");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <nav
      style={{ backgroundColor: "white", marginTop: 15, padding: 0 }}
      className="navbar navbar-expand-lg bg-body-tertiary"
    >
      <div style={{ backgroundColor: "white" }} className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a
            style={{
              color: "#000080",
              fontStyle: "italic",
              fontWeight: "bold",
            }}
            className="navbar-brand"
            href="/"
          >
            Your Website
          </a>
          <ul
            className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{
              marginLeft: "55%",
              width: "25%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <li className="nav-item 5" style={{ marginleft: "2%" }}>
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item" style={{ marginleft: "2%" }}>
              <a className="nav-link active" aria-current="page" href="/">
                About Us
              </a>
            </li>
            <li className="nav-item" style={{ marginleft: "2%" }}>
              <a className="nav-link active" aria-current="page" href="/">
                Work
              </a>
            </li>
            <li className="nav-item " style={{ marginleft: "9%" }}>
              <a className="nav-link active" aria-current="page" href="/">
                Info
              </a>
            </li>
          </ul>

          <button
            style={{
              backgroundColor: "orange",
              borderWidth: 0,
              borderRadius: 40,
              color: "white",
              fontWeight: "bold",
            }}
            className="btn btn-outline-success"
            type="submit"
            onClick={onOpenModal}
          >
            Get Started
          </button>
        </div>
      </div>
      <div>
        <Modal open={open} onClose={onCloseModal} center>
          {registered ? (
            <form>
              <div className="mb-3">
                <label for="exampleInputname1" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname1"
                  onChange={(text) => {
                    setFirstName(text.target.value);
                  }}
                  // aria-describedby="emailHelp"
                />
                <label for="exampleInputEmail1" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname2"
                  onChange={(text) => {
                    setLastName(text.target.value);
                  }}

                  // aria-describedby="emailHelp"
                />
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(text) => {
                    setEmail(text.target.value);
                  }}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
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
                    setPassword(text.target.value);
                  }}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={registerHandler}
              >
                Submit
              </button>
              <div id="emailHelp" className="form-text">
                <text>Already have account?</text>
                <button
                  style={{ borderWidth: 0, marginLeft: 10 }}
                  onClick={callBackFunction}
                >
                  Login
                </button>
              </div>
            </form>
          ) : (
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
                    setEmail(text.target.value);
                  }}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
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
                    setPassword(text.target.value);
                  }}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={LoginHandler}
              >
                Login
              </button>
              <div id="emailHelp" className="form-text">
                <text>Already have account?</text>
                <button
                  style={{ borderWidth: 0, marginLeft: 10 }}
                  onClick={callBackFunction}
                >
                  Register
                </button>
              </div>
            </form>
          )}
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;
