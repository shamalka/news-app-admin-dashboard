import React, { useEffect } from "react";
import { useSelector } from "react-redux";
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
    const appWindowSize = useSelector(
        (state) => state.appWindowSize.value
    )

    useEffect(() => {
        console.log(appWindowSize)
    }, [appWindowSize])
    return (
        <div>
            <ContentHeader title="Overview" />
            <div className={`grid ${appWindowSize === "full" ? "grid-cols-3 gap-4" : appWindowSize === "medium" ? "grid-cols-2 gap-4 " : "grid-cols-1 gap-4 "} ml-5 mt-4 mr-5`}>
                {
                    overViewTileConfig.map((tile, index) => (
                        <div key={index} className="overview-tile">
                            <p className={`${appWindowSize === "full" ? "text-xl" : "text-xs"} font-bold text-gray-700`}>
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
