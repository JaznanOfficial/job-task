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
            label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "rgb(255, 99, 132)",
            stack:"a"
        },
        {
            label: "Dataset 2",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "rgb(75, 192, 192)",
            stack:"a"
        },
        {
            label: "Dataset 3",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "rgb(53, 162, 235)",
            stack:"a"
        },
        {
            label: "Dataset 1",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "rgb(255, 99, 132)",
            stack:"b"
        },
        {
            label: "Dataset 2",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "rgb(75, 192, 192)",
            stack:"b"
        },
        {
            label: "Dataset 3",
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
            backgroundColor: "rgb(53, 162, 235)",
            stack:"b"
        },
    ],
};

const Chart = () => {
    return (
        <div className="md:w-full w-full bg-white border border-solid rounded-lg p-5 h-[1000px]">
            <Bar options={options} data={data} />
        </div>
    );
};

export default Chart;
