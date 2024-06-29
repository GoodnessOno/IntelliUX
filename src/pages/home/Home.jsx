import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import './home.css'

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/login");
  };
  const Login = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="homepage">
        <div className="homepage-container">
        <h4>
          {" "}
          IntelliUX <span>{username}</span>
        </h4>
        <button onClick={Login}>LOGIN</button>
        <button onClick={Logout}>LOGOUT</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;

