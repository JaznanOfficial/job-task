import React from "react";
import ProductsSingleList from "./ProductsSingleList";

const ProductsList = () => {
    return (
        <div>
            <div className="  flex items-top justify-center  font-sans overflow-auto">
                <div className="w-11/12 mx-auto">
                    <div className="w-auto overflow-auto bg-white shadow-md rounded">
                        <table className="w-full table-auto">
                            <thead>
                                <tr className="bg-sky-100 text-gray-600 uppercase text-sm leading-normal">
                                    <th className="py-3 px-3 text-center">User Name</th>
                                    <th className="py-3 px-3 text-center">Name</th>
                                    <th className="py-3 px-3 text-center">Subscription Value</th>
                                    <th className="py-3 px-3 text-center">Transaction</th>
                                    <th className="py-3 px-3 text-center">Contribution</th>
                                </tr>
                            </thead>

                            <tbody className={"text-gray-600 text-sm font-light"}>
                                {Array.from({ length: 7 }).map((product) => {
                                    return (
                                        <ProductsSingleList product={product} key={product?._id} />
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
