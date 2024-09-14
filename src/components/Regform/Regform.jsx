import './Regform.css';

export const Regform = () => {
  return (
    <div className="form-wrapper">
      <h1>Register Here</h1>
      <div className="form-container">
        <form>
          <div className="form-row">
            <div className="form-group">
              <input type="text" id="firstName" name="firstName" placeholder="First Name" required />
            </div>
            <div className="form-group">
              <input type="text" id="lastName" name="lastName" placeholder="Last Name" required />
            </div>
          </div>
          <div className="form-group">
            <input type="text" id="address" name="address" placeholder="Address" required />
          </div>
          <div className="form-group">
            <input type="text" id="postCode" name="postCode" placeholder="Post Code" required />
          </div>
          <div className="form-group">
            <input type="text" id="state" name="state" placeholder="State" required />
          </div>
          <div className="form-group">
            <input type="text" id="countryCode" name="countryCode" placeholder="Country Code" required />
          </div>
          <div className="form-group">
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <input type="email" id="emailId" name="emailId" placeholder="Email ID" required />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="login-link">
          <p>Already have an account ? <a href="/login">Log in</a></p>
        </div>
      </div>
    </div>
  );
};
