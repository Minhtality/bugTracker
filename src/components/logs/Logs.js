import React, { useState, useEffect } from 'react'
import LogItem from './LogItem'
import Preloader from '../layout/Preloader';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, [])

    const getLogs = async () => {
        setLoading(true);
        // grab the response from fetch api then convert to data in json
        const res = await fetch("/logs");
        const data = await res.json();
        // then set the logs to be equal to data and switch loading back to false
        setLogs(data);
        setLoading(false);
    }

    // conditional for when we are in loading stage
    if (loading) {
        return <Preloader />
    }

    return (
        <ul className="collection with-header">
            <li className="collection header">
                <h4 className="center">
                    Defect Logs
                </h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No Logs to Show...</p>) : (
                logs.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    )
}

export default Logs
