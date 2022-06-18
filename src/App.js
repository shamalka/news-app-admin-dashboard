import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./scenes/About";
import Home from "./scenes/Home";
import MyAccount from "./scenes/MyAccount";
import ProtectedRoute from "./components/ProtectedRoute";
import UnAuthorized from "./scenes/Unauthorized";
import 'antd/dist/antd.css';
import './index.css';
import News from "./scenes/News";
import Users from "./scenes/Users";
import Overview from "./scenes/Overview";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route index element={<Overview/>}/>
                    <Route path="news" element={<News/>}/>
                    <Route path="users" element={<Users/>}/>
                </Route>
                <Route path="/my-account" element={<ProtectedRoute component={<MyAccount/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
