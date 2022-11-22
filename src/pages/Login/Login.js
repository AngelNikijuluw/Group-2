import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Container } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import gambar from "../../Assets/gambar.png";

export default function Login() {
  return (
    <Container fluid className="home-login" id="Login">
      <div
        style={{ float: "left", marginTop: "200px", marginLeft: "350px" }}
        className="img-login"
      >
        <img src={logo}></img>
      </div>
      <div
        style={{
          float: "left",
          marginTop: "300px",
          marginLeft: "-550px",
        }}
      >
        <img src={gambar}></img>
      </div>

      <div class="login-form">
        <form>
          <h1>Sign In</h1>
          <div class="content">
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
            <a href="." class="link">
              Forgot Your Password?
            </a>
          </div>
          <div class="action">
            <a href="/Profile" class="btn btn-secondary">
              Sign In
            </a>
          </div>
          <div class="google">
            <button>
              <a>
                <AiFillGoogleCircle size={25} />
              </a>
              Log in with Google
            </button>
          </div>
          <div>
            <p>
              Don’t have an account yet? <a href="/SignUp">Sign up</a>.
            </p>
          </div>
        </form>
      </div>
    </Container>
  );
}
