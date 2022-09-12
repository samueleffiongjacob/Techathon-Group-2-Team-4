import React from "react";
import HelpAndGetStarted from "../HelpAndGetStarted";
import ForgottenPassword from "./ForgottenPassword";
import Onbording2Dashbord from "./Onbording2Dashbord";
import ResetPassword from "./ResetPassword";
import Support from "./Support";
import Upgrade from "./Upgrade";
import Validation from "./Validation";

// import "./Form.css"

const Form = () => {
  return (
    <>
      <div className="menu">
        <Validation/>
        <Onbording2Dashbord/>
        <ForgottenPassword/>
        <ResetPassword />
        <Support/>
        <Upgrade/>
        <HelpAndGetStarted/>
      </div>
    </>
  );
};

export default Form;
