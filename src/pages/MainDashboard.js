import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/Filter/Filter";
import ProductsList from "../components/Products/ProductsList";
import Chart from "../components/Chart/Chart";

const MainDashboard = () => {
    return (
        <div>
            <Navbar />
            <Filter />
            <ProductsList />
            <Chart />
        </div>
    );
};

export default MainDashboard;
