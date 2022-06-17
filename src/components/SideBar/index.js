import React, { useState, useEffect } from "react";
import SideBarItem from "./components/SideBarItem";
import { AppstoreAddOutlined, ProfileOutlined, TeamOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import logo from '../../img/newspaper.png'

const SideBar = ({onCollapse}) => {

    const [isCollapsed, setIsCollapsed] = useState(false);

    const onSideMenuCollapse = () => {
        setIsCollapsed(!isCollapsed)
        onCollapse(isCollapsed)
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
        <div className={`fixed top-2 left-2 bottom-2 rounded-lg bg-sky-100 m-0 flex flex-col text-white shadow-2xl ${!isCollapsed ? "w-80" : "w-20"} transition-all duration-200 ease-linear`}>
            <div className="h-14 mt-2 flex items-center justify-center">
                <img src={logo} className="w-12 h-12"/>
            </div>
            <div className="flex items-center justify-end">
                <div className={`bg-white flex -mr-3 items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 object-right`} onClick={onSideMenuCollapse}>
                    {!isCollapsed ? <DoubleLeftOutlined className="text-lg text-gray-900"/> : <DoubleRightOutlined className="text-lg text-gray-900"/>}
                </div>
            </div>
            <SideBarItem title="Overview" icon={<AppstoreAddOutlined className="sidebar-icon"/>} isCollapsed={isCollapsed}/>
            <SideBarItem title="News" icon={<ProfileOutlined className="sidebar-icon"/>} isCollapsed={isCollapsed}/>
            <SideBarItem title="Users" icon={<TeamOutlined className="sidebar-icon"/>} isCollapsed={isCollapsed}/>
        </div>
    );
};

export default SideBar;
