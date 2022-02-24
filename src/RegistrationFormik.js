import { useFormik, Field, Form } from "formik";
import { useState } from "react";
const RegistrationFormik = () => {
    let [details, setDetails] = useState([])
    const formik = useFormik({
        initialValues: {
            fullname: "",
            age: "",
            email: "",
            password: ""
        },
        onSubmit(values) {
            let object = {
                name: formik.values.fullname,
                age: formik.values.age,
                email: formik.values.email,
                password: formik.values.password
            }
            let newDetails = [...details, object]
            setDetails(newDetails)
        },
        validate() {
            const errors = {};
            if (formik.values.fullname.length < 5 || formik.values.fullname.length > 20) {
                errors.fullname = "Name must be greater than 5 characters and less than 20 characters"
            }
            if (formik.values.age < 18 || formik.values.age > 120) {
                errors.age = "Age must be greater than 18 years and less than 120 years"
            }
            if (formik.values.password.length < 4 || formik.values.password.length > 20) {
                errors.password = "Password must be greater than 4 characters and less than 20 characters";
            }
            if (formik.values.email.length <= 5 || formik.values.email.length >= 30) {
                errors.email = "Email must be more than 5 characters and less than 30 characters"
            }
            return errors;
        }
    });
    localStorage.setItem("Formik Values", JSON.stringify(details));
    return (
        <div className="App-div">
            <h1>User Details</h1>
            <div className="Sub-div">
                <form onSubmit={formik.handleSubmit} noValidate>
                    <b>Full Name : </b><input type="text" name="fullname" value={formik.values.fullname} onChange={formik.handleChange} /><br />
                    <div className="text-danger">
                        {formik.errors.fullname ? formik.errors.fullname : null}
                    </div>
                    <b>Age : </b><input type="number" name="age" value={formik.values.age} onChange={formik.handleChange} /><br />
                    <div className="text-danger">
                        {formik.errors.age ? formik.errors.age : null}
                    </div>
                    <b>Email : </b><input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} /><br />
                    <div className="text-danger">
                        {formik.errors.email ? formik.errors.email : null}
                    </div>
                    <b>Password : </b><input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} /><br />
                    <div className="text-danger">
                        {formik.errors.password ? formik.errors.password : null}
                    </div>
                    <button><b>Submit</b></button>
                </form>
            </div>
        </div>
    );
}
export default RegistrationFormik;