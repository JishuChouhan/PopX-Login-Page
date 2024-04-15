import { Link } from "react-router-dom";

const Second = () => {
    return(
        <div className="second">
            <div className="second-container">
            <h2>Create Your PopX Account</h2>
            <br />
            <form action="">
                <input type="text" name="name" placeholder="FullName"/>
                <br />
                <input type="text" name="phone" placeholder="PhoneNumber"/>
                <br />
                <input type="text" name="email" placeholder="Email"/>
                <br />
                <input type="text" name="password" placeholder="Password"/>
                <br />
                <input type="text" name="company" placeholder="Company Nage"/>
                <br />
                <Link to="/fourth" type="button" className="create-acc-btn">Create Account</Link>
            </form>
            </div>
        </div>
    )
}

export default Second;