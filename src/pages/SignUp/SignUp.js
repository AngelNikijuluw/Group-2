import React from "react";
import { Container } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import gambar from "../../Assets/gambar.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import Layout from "../../components/Layout";

export default function Signup() {
  return (
    <Layout title="Tanam Uang | Sign Up">
      <Container fluid className="home-signup" id="signup">
        <div
          style={{ float: "left", marginTop: "200px", marginLeft: "350px" }}
          className="img-login"
        >
          <img src={logo} alt="img"></img>
        </div>
        <div
          style={{ float: "left", marginTop: "300px", marginLeft: "-550px" }}
        >
          <img src={gambar} alt="img"></img>
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
            </div>
            <div class="action">
              <a href="/Login" class="btn btn-secondary">
                Sign Up
              </a>
            </div>
            <div class="google">
              <button>
                <a href="/">
                  <AiFillGoogleCircle size={25} />
                </a>
                Sign Up With Google
              </button>
            </div>
          </form>
        </div>
      </Container>
    </Layout>
  );
}
