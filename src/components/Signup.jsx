import { useState } from "react";
import StyledSignup, { SignInBtn } from "./styled/Signup.styled";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (loading) return;
    const str = `${process.env.REACT_APP_SERVER_URL}/auth/google`;
    window.open(str, "_self");
  };

  return (
    <StyledSignup>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Twitter clone</h1>
          <sub>created by: Lester Fernandez</sub>
        </div>
        <SignInBtn loading={loading.toString()}>
          <p>Sign in with Google</p>
          <span>
            <i className="fa-brands fa-google"></i>
          </span>
        </SignInBtn>
      </form>
    </StyledSignup>
  );
};

export default Signup;
