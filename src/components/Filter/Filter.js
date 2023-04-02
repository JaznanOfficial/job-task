import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const Filter = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    return (
        <div className="w-full  md:px-0 my-5 flex justify-center items-center bg-sky-200 py-5">
            <div className="w-11/12 mx-auto p-5 bg-white border flex flex-col md:flex-row justify-center items-center gap-5">
                <div className=" w-full">
                    <input
                        type="text"
                        placeholder="Search here"
                        className="input w-full focus:bg-white bg-sky-100 text-black"
                    />
                </div>
                <div className=" w-full bg-sky-100">
                    <Datepicker
                        value={value}
                        onChange={handleValueChange}
                        classNames={"bg-sky-100"}
                    />
                </div>

                <div className=" w-full">
                    <select className="select w-full focus:bg-white bg-sky-100 text-black">
                        <option disabled selected>
                            Country
                        </option>
                        <option>Bangladesh</option>
                        <option>Saudi Arabia</option>
                        <option>Indonesia </option>
                    </select>
                </div>
                <div className=" w-full">
                    <select className="select w-full focus:bg-white bg-sky-100 text-black">
                        <option disabled selected>
                            State
                        </option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Riyad</option>
                    </select>
                </div>
                <div className=" w-full">
                    <select className="select w-full focus:bg-white bg-sky-100 text-black">
                        <option disabled selected>
                            City
                        </option>
                        <option>Khulna</option>
                        <option>Chittagong</option>
                        <option>Hajara maut</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Filter;
