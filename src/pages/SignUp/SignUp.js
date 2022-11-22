import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import gambar from "../../Assets/gambar.png";

export default function Signup() {
  return (
    <Container fluid className="home-signup" id="signup">
      <div
        style={{ float: "left", marginTop: "200px", marginLeft: "350px" }}
        className="img-login"
      >
        <img src={logo}></img>
      </div>
      <div style={{ float: "left", marginTop: "300px", marginLeft: "-550px" }}>
        <img src={gambar}></img>
      </div>
      <div class="login-form">
        <form>
          <h1>Sign Up</h1>
          <div class="content">
            <div class="input-field">
              <input
                type="nama"
                placeholder="Nama"
                autocomplete="nope"
                required
              ></input>
            </div>
            <div class="input-field">
              <input
                type="email"
                placeholder="Email"
                autocomplete="nope"
                required
              ></input>
            </div>
            <div class="input-field">
              <input
                type="password"
                placeholder="Password"
                autocomplete="new-password"
                required
              ></input>
            </div>
            <a href="#" class="link">
              Forgot Your Password?
            </a>
          </div>
          <div class="action">
            <button>Sign in</button>
          </div>
          <div class="google">
            <button>Sign in Google</button>
          </div>
        </form>
      </div>
    </Container>
  );
}
