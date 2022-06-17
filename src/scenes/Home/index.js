import React, {useState, useEffect} from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import SideBar from "../../components/SideBar";

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
            <div className={`flex-none mt-2 ml-2 mb-2 ${!isCollapsed ? "w-80" : "w-20"} transition-all duration-200 ease-linear"`}>
                <SideBar onCollapse={onCollapse}/>
            </div>
            <div className={`flex-1 bg-slate-500 mb-2 mt-2 mr-2 ml-5 rounded-lg shadow-xl`}>
                Content
            </div>
        </div>
    );
};

export default Home;
