import React, { createContext } from 'react';
import useData from '../../hooks/useData';
import BarCharts from '../Charts/BarCharts';
import LineCharts from '../Charts/LineCharts';

export const DataContext = createContext()
const Dashboard = () => {
    const [data, setData] = useData();
    return (
        <DataContext.Provider value={data}>
            <div style={{margin:'20px'}}>
                <h2>Bar chart:</h2>
                <BarCharts></BarCharts>
            </div>
            <div style={{margin:'20px'}}>
                <h2>Line Chart:</h2>
                <LineCharts></LineCharts>
            </div>
        </DataContext.Provider>
    );
};

export default Dashboard;