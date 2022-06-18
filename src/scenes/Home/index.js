import React, { useState, useEffect } from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import SideBar from "../../components/SideBar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const Home = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapse = (isCollapsed) => {
        setIsCollapsed(!isCollapsed)
    }

    const appWindowSize = useSelector(
        (state) => state.appWindowSize.value
    )

    useEffect(() => {
        if (appWindowSize === "full") {
            setIsCollapsed(false)
        } else {
            setIsCollapsed(true)
        }
    }, [appWindowSize]);

    return (
        <div className="flex h-screen">
            <div className={`flex-none ${!isCollapsed ? "w-80" : "w-20"} transition-all duration-200 ease-linear"`}>
                <SideBar onCollapse={onCollapse} />
            </div>
            <div className={`flex-1 bg-red-50 `}>
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
