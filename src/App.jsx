import "./App.css";
import {
  HashRouter,
  NavLink,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = "https://todolist-api.hexschool.io";

const Todo = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const handleLoginOut = () => {
    if (!isLogin) {
      navigate("/login");
    }
  };
  return (
    <div>
      <p>這是 Todo 頁面</p>
      <button type="button" onClick={() => handleLoginOut()}>
        登出
      </button>
    </div>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        {/* 練習區 */}
        <Routes>
          <Route path="/" element={<h1>首頁</h1>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="*" element={<h1>找不到頁面</h1>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
