import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./scenes/About";
import Home from "./scenes/Home";
import MyAccount from "./scenes/MyAccount";
import ProtectedRoute from "./components/ProtectedRoute";
import UnAuthorized from "./scenes/Unauthorized";
import 'antd/dist/antd.css';
import './index.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path="/my-account" element={<ProtectedRoute component={<MyAccount/>}/>}/>
                {/*<Route path="/about" element={<About/>}>*/}

                {/*    <Route path="us" element={<Home/>}/>*/}
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
