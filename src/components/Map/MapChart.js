import React, { useState } from "react";
import WorldMap from "react-svg-worldmap";

const MapChart = () => {
    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "mx", value: 127318112 }, // mexico
    ];
    return (
        <div className="md:w-full w-full bg-white border border-solid rounded-lg p-5">
            <h1 className="text-sky-500">Top 10 Populous Countries</h1>
            <div className=" flex flex-row justify-center items-center">
                <div>
                    <WorldMap color="#0065CA" value-suffix="people" data={data} size={"lg"} />
                </div>
            </div>
        </div>
    );
};

export default MapChart;
