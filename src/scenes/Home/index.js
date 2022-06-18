import React, {useState, useEffect} from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router";

const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapse = (isCollapsed) => {
        setIsCollapsed(!isCollapsed)
    }

    const [width, setWidth]   = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const updateDimensions = () => {
        if(window.innerWidth < 850) {
            setIsCollapsed(true)
        } else {
            setIsCollapsed(false)
        }
    }
    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    return (
        <div className="flex h-screen">
            <div className={`flex-none ${!isCollapsed ? "w-80" : "w-20"} transition-all duration-200 ease-linear"`}>
                <SideBar onCollapse={onCollapse}/>
            </div>
            <div className={`flex-1 bg-red-50 `}>
                <Outlet/>
            </div>
        </div>
    );
};

export default Home;
