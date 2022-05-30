import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from '../Dashboard/Dashboard';

const BarCharts = () => {
    const data = useContext(DataContext);
    return (
        <BarChart height={350} width={750} data={data}>
            <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
            <Bar dataKey={'investment'} fill='rgb(246, 178, 106)'></Bar>
            <Bar dataKey={'sell'} fill='#8884d8'></Bar>
            <Bar dataKey={'revenue'} fill='#82ca9d'></Bar>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </BarChart>
    );
};

export default BarCharts;