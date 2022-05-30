import React, { useContext } from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { DataContext } from '../Dashboard/Dashboard';

const LineCharts = () => {
    const data = useContext(DataContext)
    return (
        <LineChart height={350} width={750} data={data}>
            <CartesianGrid strokeDasharray={'3 3'}></CartesianGrid>
            <XAxis dataKey={'month'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Legend></Legend>
            <Line dataKey={'investment'} stroke={'rgb(246, 178, 106)'}></Line>
            <Line dataKey={'sell'} stroke={'#8884d8'}></Line>
            <Line dataKey={'revenue'} stroke={'#82ca9d'}></Line>
        </LineChart>
    );
};

export default LineCharts;