import React from "react";

export default function Signup() {
  return (
    <div class="login-form">
      <form>
        <h1>Sign Up</h1>
        <div class="content">
          <div class="input-field">
            <input type="nama" placeholder="Nama" autocomplete="nope"></input>
          </div>
          <div class="input-field">
            <input type="email" placeholder="Email" autocomplete="nope"></input>
          </div>
          <div class="input-field">
            <input
              type="password"
              placeholder="Password"
              autocomplete="new-password"
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
  );
}
