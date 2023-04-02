import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Filter from "../components/Filter/Filter";
import ProductsList from "../components/Products/ProductsList";

const MainDashboard = () => {
    return (
        <div>
            <Navbar />
            <Filter />
            <ProductsList />
        </div>
    );
};

export default MainDashboard;
