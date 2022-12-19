import React, { useEffect, useState } from 'react'
import './covid.css'

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
            <div className="live-indicator">
                <h3> 🔴 LIVE</h3>
                <h2>LIVE COVID-19 Tracker</h2>
            </div>

            <div className="live-data-card-container">
                <div class="card">
                    <h3>Country</h3>
                    <h1>India</h1>
                </div>
                <div class="card">
                    <h3>Active Cases</h3>
                    <h1>{data.active}</h1>
                </div>

                <div class="card">
                    <h3>Confirmed Cases</h3>
                    <h1>{data.confirmed}</h1>
                </div>

                <div class="card">
                    <h3>Total deaths</h3>
                    <h1>{data.deaths}</h1>
                </div>

                <div class="card">
                    <h3>Total Recovered</h3>
                    <h1>{data.recovered}</h1>
                </div>
                <div class="card">
                    <h3>Last Update Recovered</h3>
                    <h1>{data.lastupdatedtime}</h1>
                </div>
            </div>

        </>
    )
}

export default Covid