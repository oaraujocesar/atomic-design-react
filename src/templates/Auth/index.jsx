import Login from "organisms/Login";

import './style.scss'

const Auth = () => {
  return (
    <div className="auth-template">
      <h1 className="title">Welcome</h1>
      <Login />
    </div>
  );
};

export default Auth;
