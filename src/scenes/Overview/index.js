import React from "react";
import Breadcrumb from "../../components/BreadCrumb";
import ContentHeader from "../../components/ContentHeader";

const overViewTileConfig = [
    {
        title: "All News",
    },
    {
        title: "Add News",
    },
    {
        title: "All Users",
    },
    {
        title: "Add Users",
    },
    {
        title: "Settings",
    }
]

const Overview = () => {
    return (
        <div>
            <ContentHeader title="Overview"/>
            <div className="grid grid-cols-3 gap-4 ml-5 mt-4 mr-5">            
            {
                overViewTileConfig.map((tile, index) => (
                    <div key={index} className="overview-tile">
                        <p className="text-xl font-bold text-gray-700">
                            {tile.title}
                        </p>
                    </div>
                ))
            }
            </div>
        </div>
    );
};

export default Overview;
