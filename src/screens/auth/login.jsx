import React, { useState, useEffect } from "react";
import { EmailSvg, Logo } from "../../assets/svg";
import { Input, Select } from "../../components/form/input";
import Modals from "../../components/modal";
import "./auth.css";
import { NotificationManager } from "react-notifications";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [componentModal, setComponentModal] = useState(false);
  const [showCreateNewProject, setShowCreateNewProject] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    password: "",
  });

  const submit = (e) => {
    e.preventDefault();
    if (
      user.firstName == "" ||
      user.lastName == "" ||
      user.email == "" ||
      user.city == "" ||
      user.password == ""
    ) {
      return NotificationManager.error(
        "All field is required to continue.",
        "Validation error"
      );
    }

    setShowCreateNewProject(true);
    setComponentModal(!componentModal);
  };

  useEffect(() => {
    localStorage.setItem("valid", "false");
  }, []);
  return (
    <div className="auth-wrap">
      <div className="auth-wrap-col1">
        <div className="auth-wrap-col1-col1">
          <Logo />
        </div>
        <div className="auth-wrap-col1-col2">
          <h2>Let us build Africa’s next biggest products together</h2>
        </div>
        <div className="auth-wrap-col1-col3">
          <p>
            Our talents at KJK build solutions for the world's most respectable
            technology-driven companies. By joining our network, you are up for
            a challenging work that will occupy your mind and a community of
            top-fields techies that will offer you opportunities for continuous
            growth
          </p>
        </div>
        <div className="auth-wrap-col1-col4">
          <h2>Upon your form submission,</h2>
          <p>- A short English proficiency test (10 mins)</p>
          <p>- A coding challenge (1 hour)</p>
          <p>- A live technical interview with our experts (1 hour)</p>
        </div>

        <div className="auth-wrap-col1-col5">
          <p> Sign up and be a step closer to joining our tech base.</p>
        </div>
      </div>
      <div className="auth-wrap-col2">
        <form action="">
          <div className="form-header">
            <h2>KJK.Africa Tech Talents</h2>
            <p>Apply to join our Ecosystem</p>
          </div>

          <div className="input-full-width">
            <div className="input-half">
              <Input
                label="First Name"
                onChange={({ target }) => {
                  setUser({ ...user, firstName: target.value });
                }}
              />
            </div>

            <div className="input-half">
              <Input
                label="Last Name"
                onChange={({ target }) => {
                  setUser({ ...user, lastName: target.value });
                }}
              />
            </div>
          </div>

          <div className="input-full-width">
            <Input
              label="Email Address"
              type="email"
              onChange={({ target }) => {
                setUser({ ...user, email: target.value });
              }}
            />
          </div>

          <div className="input-full-width">
            <Select
              options={["Nigeria", "USA", "More"]}
              // placeholder="Select country"
              label="City / Country"
              onChange={({ target }) => {
                setUser({ ...user, city: target.value });
              }}
            />
          </div>

          <div className="input-full-width">
            <Input
              label="Password"
              type="password"
              onChange={({ target }) => {
                setUser({ ...user, password: target.value });
              }}
            />
          </div>

          <div className="form-extra">
            <div className="terms">
              <input type="checkbox" name="" id="" />
              <p>Agree to KJK Africa's Terms and conditions?</p>
            </div>

            <div className="submitbtn">
              <button onClick={submit}>Submit</button>
            </div>
          </div>
        </form>
      </div>
      {showCreateNewProject ? (
        <Modals
          title={`Email sent`}
          componentModal={componentModal}
          setComponentModal={setComponentModal}
        >
          <div className="emailVerification-wrap">
            <EmailSvg />
            <h2>Verification Link Sent!</h2>
            <p>
              An email has just been sent to your inbox, kindly check and click
              the link to proceed with your registration{" "}
            </p>
            <button
              onClick={() => {
                localStorage.setItem("valid", "true");
                history.push("/home");
                NotificationManager.success(
                  `Wecome back ${user.firstName}`,
                  "Success"
                );
              }}
            >
              Click to verify email
            </button>
          </div>
        </Modals>
      ) : (
        ""
      )}
    </div>
  );
}
