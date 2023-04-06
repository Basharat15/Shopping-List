import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex", marginTop: 40, flexDirection: "row" }}>
        <div
          style={{
            width: "50%",
            paddingLeft: "10%",
            paddingRight: "15%",
            paddingTop: 20,
          }}
        >
          <text
            style={{
              fontWeight: "bold",
              fontSize: 50,
              marginRight: "10%",
              color: "#000080",
            }}
          >
            Shopping List
          </text>
          <br />
          {/* <text style={{ fontSize: 20 }}>
            Lorem ipsum dolor sit emmet, consectetur adipiscing elit.Sed eget
            libero feugiat, faucibus libero id, scelerisque quam
          </text> */}
          <br />
          <button
            style={{
              backgroundColor: "orange",
              borderWidth: 0,
              borderRadius: 40,
              color: "white",
              marginTop: 20,
              paddingLeft: 35,
              paddingRight: 35,
              paddingTop: 10,
              paddingBottom: 10,
              fontWeight: "bold",
            }}
            className="btn btn-outline-success"
            type="submit"
          >
            Learn More
          </button>
        </div>
        <div>
          <img src={require("../assets/images/home.png")} alt="" />
        </div>
      </div>
    </>
  );
}
