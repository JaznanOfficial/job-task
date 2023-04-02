import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/Filter/Filter";
import ProductsList from "../components/Products/ProductsList";
import Chart from "../components/Chart/Chart";
import MapChart from "../components/Map/MapChart";

const MainDashboard = () => {
    return (
        <div>
            <Navbar />
            <Filter />
            <ProductsList />
            <Chart />
            <MapChart />
        </div>
    );
};

export default MainDashboard;
