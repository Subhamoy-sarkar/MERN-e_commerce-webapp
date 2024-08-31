import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";   //after successful registration , we need to send/navigate user to /login page 
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer,setAnswer]=useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");  //after successful registration , we need to send/navigate user to /login page
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
//   console.log(process.env.REACT_APP_API);    -- env variable problem , need to fix later
  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container ">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="phone"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="address"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control"
              id="answer"
              placeholder="Enter Your First school name"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;


/*
Explanation of the handleSubmit Function
The handleSubmit function is an event handler that is typically used to process form submissions in a React application. In this case, it handles the submission of a registration form. The function is asynchronous (async) because it involves making a network request, which is done using the axios library.

Breakdown of the Code:
(e) and e.preventDefault():

e: This stands for "event." It's an event object that is automatically passed to event handler functions in JavaScript. In the context of a form submission, e represents the event triggered when the form is submitted.

e.preventDefault(): This method prevents the default behavior of the form submission, which is to reload the page. By calling e.preventDefault(), you can handle the form submission with JavaScript (in this case, React) instead of letting the browser handle it the traditional way.

try and catch:

try: This block contains code that might throw an error. If an error occurs during the execution of this code, the control is passed to the catch block.

catch: This block handles any errors that might occur during the execution of the code in the try block. In this example, if there’s an error during the API request, the error will be logged to the console, and a toast notification will display "Something went wrong."

axios.post("/api/v1/auth/register", {...}):

This is an HTTP POST request made using Axios to the endpoint /api/v1/auth/register. The data being sent with the request includes name, email, password, phone, and address, which are presumably state variables defined in your component.

await: Since this is an asynchronous operation, await is used to wait for the request to complete before moving on to the next line of code.

if (res && res.data.success) { ... } else { ... }:

res.data.success: This checks whether the response from the server indicates a successful registration. If the registration is successful, a success toast notification is shown, and the user is redirected to the login page using navigate("/login").

else { ... }: If the registration is not successful, an error toast notification is displayed with the message from the server response.

toast.success and toast.error:

These functions are used to display notifications to the user. toast.success is called when the registration is successful, while toast.error is called if something goes wrong, either due to a failed registration or an error during the request.
Summary:
handleSubmit: This function is responsible for handling the form submission, preventing the default browser behavior, making an API call to register the user, and then providing feedback to the user based on the result.
e (event object): It represents the event that triggered the function. The e.preventDefault() call stops the default action of the event (in this case, form submission) from occurring.
try/catch: These blocks are used for error handling during the asynchronous operation.
Axios: Handles the HTTP request to the server.
Toast Notifications: Provide user feedback based on the success or failure of the form submission.
*/