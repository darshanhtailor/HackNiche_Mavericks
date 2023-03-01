import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
export default function Jobs() {
    const [jobs, setJobs] = useState([]);


    const getJobs = async () => {
        const res = await axios.get("http://localhost:5000/api/jobs/getjobs/");

        setJobs(res.data);

    }

    React.useEffect(() => {

        getJobs();
    }, [])
    console.log(jobs)

    return (
        <div >
            <ul style={{ width: "75%", marginLeft: "150px", marginTop: "50px" }}>
                {jobs.map((item, index) => (

                    <li className="item" key={index}>

                        <h3>

                            {item.role}

                        </h3>


                        <p className="description">
                            {item.company}
                        </p>

                        <span style={{ display: "flex" }}>
                            <i className="ri-map-pin-line"></i>
                            <h6>{item.location}</h6>

                        </span>
                        <span style={{ display: "flex" }}>
                            <i className="ri-currency-fill"></i>
                            <h6>{item.salary}</h6>


                        </span>
                        <a href={item.link}>
                            <button style={{

                            }}>Apply</button>
                        </a>

                    </li>

                ))}
            </ul>
        </div >
    )
}