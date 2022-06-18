import React, { useState, useEffect } from "react";
import SideBarItem from "./components/SideBarItem";
import { AppstoreAddOutlined, ProfileOutlined, TeamOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import logo from '../../img/newspaper.png'
import { Link , useNavigate} from "react-router-dom";

const sideMenuConfig = [
    {
        title: "Overview",
        route: "/",
        icon: <AppstoreAddOutlined className="sidebar-icon"/>
    },
    {
        title: "News",
        route: "/news",
        icon: <ProfileOutlined className="sidebar-icon"/>
    },
    {
        title: "Users",
        route: "/users",
        icon: <TeamOutlined className="sidebar-icon"/>
    }
]

const SideBar = ({onCollapse}) => {

    const [isCollapsed, setIsCollapsed] = useState(false);
    let navigate = useNavigate();

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
        <div className={`fixed top-0 bottom-0 bg-sky-100 flex flex-col text-white shadow-2xl ${!isCollapsed ? "w-80" : "w-20"} transition-all duration-200 ease-linear`}>
            <div className="h-14 mt-2 flex items-center justify-center">
                <img src={logo} className="w-12 h-12"/>
            </div>
            <div className="flex items-center justify-end">
                <div className={`bg-white flex -mr-3 items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 object-right`} onClick={onSideMenuCollapse}>
                    {!isCollapsed ? <DoubleLeftOutlined className="text-lg text-gray-900"/> : <DoubleRightOutlined className="text-lg text-gray-900"/>}
                </div>
            </div>
            <div className="mt-2">
                {
                    sideMenuConfig.map((sideMenuItem, index) => (
                        <Link to={sideMenuItem.route} key={index}>
                            <SideBarItem title={sideMenuItem.title} icon={sideMenuItem.icon} isCollapsed={isCollapsed}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default SideBar;
