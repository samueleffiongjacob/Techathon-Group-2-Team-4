import React from "react";
import ForgottenPassword from "./ForgottenPassword";
import Onbording2Dashbord from "./Onbording2Dashbord";
import ResetPassword from "./ResetPassword";
import Upgrade from "./Upgrade";
import Validation from "./Validation";

// import "./Form.css"

const Form = () => {
  return (
    <>
      <div className="menu">
        {/* <Validation/> */}
        {/* <Onbording2Dashbord/> */}
        {/* <ForgottenPassword/> */}
        {/* <ResetPassword /> */}

        <Upgrade/>
      </div>
    </>
  );
};

export default Form;
