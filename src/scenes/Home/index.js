import React, {useState} from "react";
import { Breadcrumb, Layout, Menu } from 'antd';
import {DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';
import Button from "../../components/Button";
import SideBar from "../../components/SideBar";

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <SideBar/>
        </div>
    );
};

export default Home;
