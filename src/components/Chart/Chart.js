import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// import faker from "faker";
import { faker } from "@faker-js/faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
    plugins: {
        title: {
            display: true,
            text:"Gateway Performance",
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export const data = {
    labels,
    datasets: [
        {
            label: "Paypal",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "#625CCC",
            stack:"a"
        },
        {
            label: "Fee",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "#CA2E66",
            stack:"a"
        },
        {
            label: "Cancel",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "#FF0000",
            stack:"a"
        },
        {
            label: "Stripe",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "#0070E0",
            stack:"b"
        },
        {
            label: "Fee",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "#992D5A",
            stack:"b"
        },
        {
            label: "Cancel",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "#FF0000",
            stack:"b"
        },
    ],
};

const Chart = () => {
    return (
        <div className="md:w-full w-full bg-white border border-solid rounded-lg p-5">
            <Bar options={options} data={data} />
        </div>
    );
};

export default Chart;
