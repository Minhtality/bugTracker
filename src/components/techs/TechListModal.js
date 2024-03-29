import React, { useState, useEffect } from 'react';
import TechItem from './TechItem'


const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, [])

    const getTechs = async () => {
        setLoading(true);
        // grab the response from fetch api then convert to data in json
        const res = await fetch("/techs");
        const data = await res.json();
        // then set the logs to be equal to data and switch loading back to false
        setTechs(data);
        setLoading(false);
    }
    return (
        <div id="tech-list-modal" className="modal" >
            <div className="modal-content">
                <h4>Technician List:</h4>
                <ul className="collection">
                    {!loading && techs.map(tech => (
                        <TechItem tech={tech} key={tech.id} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TechListModal
