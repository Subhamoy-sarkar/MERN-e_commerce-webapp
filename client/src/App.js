import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Pagenotfound from "./pages/Pagenotfound";
import Register from "./pages/Auth/Register";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./components/Routes/Private";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<PrivateRoute/>}>
          <Route path="" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />    
      </Routes>
    </>
  );
}


export default App;


/*
Path Names (Lowercase)
    URL Convention: URLs are generally case-insensitive, and it’s a common convention to use lowercase in URLs. This makes them easier to read, type, and remember. It also helps avoid issues with case sensitivity, as different web servers might handle case in URLs differently.

    Consistency: Using lowercase paths ensures consistency across the application. It reduces the likelihood of errors due to case mismatches, which can be especially important when linking between pages.



Component Names (Capitalized)
    React Component Naming Convention: In React, component names are capitalized by convention because React treats elements starting with a capital letter as components. If a component name is not capitalized, React will treat it as a DOM element (like <div>, <span>), which can cause unexpected behavior.

    Readability: Capitalized component names clearly indicate that these elements are custom React components, not standard HTML tags. This makes the code more readable and easier to understand.
*/


/*
React-Toastify
    React-Toastify is a popular library in React for displaying customizable and non-intrusive notifications, often called "toasts." It provides an easy way to show alerts or messages to users without disrupting their interaction with the application. Some key uses of React-Toastify include:

    Success Messages:

    Notify users when an action, like form submission, completes successfully.
    Example: "Your profile has been updated successfully."
    Error Notifications:

    Alert users about errors, such as form validation errors, failed network requests, or server-side issues.
    Example: "Failed to load data. Please try again later."
    Informational Messages:

    Display informational messages, like reminders or updates.
    Example: "New features have been added to your dashboard."
    Warning Alerts:

    Warn users about potential issues, like unsaved changes or approaching deadlines.
    Example: "You have unsaved changes. Are you sure you want to leave?"
    Customizable Notifications:

    Customize the appearance and behavior of notifications, including their position, auto-close time, and animations.



React-Axios
    Axios is a popular JavaScript library used to make HTTP requests from the browser or Node.js. When used in a React application, React-Axios is simply Axios being used in a React component to handle API calls. Here are some key uses:

    Fetching Data:

    Use Axios to fetch data from an external API or server when a component mounts or when certain actions occur.
    Example: Fetching a list of users from a REST API.
    Posting Data:

    Send data to a server, such as form submissions, file uploads, or any other data you want to persist on the server.
    Example: Submitting a user registration form.
    Handling HTTP Methods:

    Axios supports all HTTP methods like GET, POST, PUT, DELETE, and PATCH, making it easy to interact with RESTful APIs.
    Example: Updating user information using a PUT request.
    Error Handling:

    Easily handle errors in HTTP requests, including status codes, timeouts, and network errors.
    Example: Displaying an error message if a request fails.
    Interceptors:

    Axios allows you to define interceptors that can transform requests or responses before they are handled, such as adding authentication tokens to headers.
    Example: Automatically adding a JWT token to every request.

*/

/*
npm concurrently  --- ( npm run dev in this case ) 
    npm concurrently is a Node.js package that allows you to run multiple npm scripts or commands simultaneously from a single command line. This is particularly useful in development environments where you might want to run several processes at once, such as a frontend React development server, a backend Node.js server, and maybe a build watcher for assets.

    Key Uses:
    Run Multiple Scripts:

    Run multiple npm scripts or commands at the same time with a single command.
    Example: Starting both the frontend and backend servers simultaneously.
    Streamline Development Workflow:

    Simplify your development process by reducing the need to open multiple terminal windows or tabs to start different processes.
    Cross-Platform Compatibility:

    Works on Windows, macOS, and Linux, ensuring that your scripts run consistently across different environments.

npm cors
    npm cors refers to the cors middleware package in Node.js, which is used to enable Cross-Origin Resource Sharing (CORS). CORS is a security feature implemented by browsers to prevent web pages from making requests to a different domain than the one that served the web page.

    Key Uses:
    Enable CORS in Express Applications:

    Allows your server to handle requests from different origins (domains), which is especially important for APIs that serve client applications hosted on different domains.
    Control Access:

    You can configure cors to allow or restrict access to specific domains, HTTP methods, and headers, providing fine-grained control over who can access your resources.
    Handle Preflight Requests:

    Automatically handles preflight requests sent by browsers to determine if the actual request is safe to send.
 */