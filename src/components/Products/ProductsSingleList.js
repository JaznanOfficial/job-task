import React from "react";

const ProductsSingleList = () => {
    return (
        <tr className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-3 text-center font-medium">
                <h1 className="break-words whitespace-wrap   text-center">Tazul96</h1>
            </td>
            <td className="py-3 px-3 text-center">
                <div className="flex justify-center items-center ">
                    <p className="break-words whitespace-wrap text-center">Md Tazul Islam</p>
                </div>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">1000$</p>
            </td>
            <td className="p-3 text-center font-medium">
                <p className="break-words whitespace-wrap  text-center">325$</p>
            </td>

            <td className="py-3 px-3 text-center">
                <span className="bg-sky-200 text-sky-600 py-1 px-3 rounded-full text-xs text-center">
                    25%
                </span>
            </td>
        </tr>
    );
};

export default ProductsSingleList;
