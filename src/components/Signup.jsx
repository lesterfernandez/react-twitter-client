import { useState } from "react";
import StyledSignup, { SignInBtn } from "./styled/Signup.styled";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    console.log(e.target);
    // login here
    // loading false
    // load main content
  };
  return (
    <StyledSignup>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Twitter clone</h1>
          <sub>created by: Lester Fernandez</sub>
        </div>
        <SignInBtn loading={loading}>
          <p>Sign in with Google</p>
          <span>
            <i class="fa-brands fa-google"></i>
          </span>
        </SignInBtn>
      </form>
    </StyledSignup>
  );
};

export default Signup;
