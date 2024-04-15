import { Link } from "react-router-dom";

const Third = () => {
  return (
    <div className="third">
      <div className="third-container">
        <h2>SignIn to your PopX Account</h2>
        <br />
        <p>Write correct email or password <br /> to SignIn to your Account.</p>
        <br />
        <input type="text" name="email" placeholder="Email" />
        <br />
        <input type="text" name="password" placeholder="Password" />
        <br />
        <Link to="/fourth" className="create-acc-btn" type="button">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Third;
