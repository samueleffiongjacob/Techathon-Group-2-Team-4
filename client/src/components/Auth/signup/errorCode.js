export default function errorCode(userData) {
    //regex
    const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //errors
    const errors = {};
    if (!userData.fullname) {
    errors.fullname = "Input fullname";
    }
    if (!userData.password) {
    errors.password = "Input Password";
    } else if (userData.password.length < 6) {
    errors.password = "Password Should Be More Than 6 Characters";
    }
    if (!userData.email) {
    errors.email = "Input Email";
    } else if (!regEmail.test(userData.email)) {
    errors.email = "Input Valid Email";
    }
    return errors;
}
console.log(errors);