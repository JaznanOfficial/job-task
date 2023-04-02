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
            text: "Gateway Performance",
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

const paypalData = labels.map(() =>
    Array.from({ length: 3 }, () => faker.datatype.number({ min: 0, max: 1000000 }))
);
const stripeData = labels.map(() =>
    Array.from({ length: 3 }, () => faker.datatype.number({ min: 0, max: 1000000 }))
);

const data = {
    labels: labels,
    datasets: [
        {
            label: "PayPal",
            data: paypalData,
            backgroundColor: ["rgb(255, 99, 132)", ],
            barPercentage: 0.5,
            categoryPercentage: 0.5,
        },
        {
            label: "Stripe",
            data: stripeData,
            backgroundColor: ["rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)"],
            barPercentage: 0.5,
            categoryPercentage: 0.5,
        },
    ],
};

// export const data = {
//     labels,
//     datasets: [
//         {
//             label: "Dataset 1",
//             data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
//             backgroundColor: "rgb(255, 99, 132)",
//         },
//         {
//             label: "Dataset 2",
//             data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
//             backgroundColor: "rgb(75, 192, 192)",
//         },
//         {
//             label: "Dataset 3",
//             data: labels.map(() => faker.datatype.number({ min: 0, max: 1000000 })),
//             backgroundColor: "rgb(53, 162, 235)",
//         },
//     ],
// };

const Chart = () => {
    return (
        <div className="md:w-full w-full bg-white border border-solid rounded-lg p-5 h-[1000px]">
            <Bar options={options} data={data} />
        </div>
    );
};

export default Chart;
