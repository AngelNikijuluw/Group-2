import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";

export default function Login() {
  return (
    <div class="login-form">
      <form>
        <h1>Login</h1>
        <div class="content">
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
          <a href="." class="link">
            Forgot Your Password?
          </a>
        </div>
        <div class="action">
          <button>Sign in</button>
        </div>
        <div class="google">
          <button>
            <a>
              <AiFillGoogleCircle />
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
  );
}
