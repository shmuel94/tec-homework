import React from 'react';
import { useState } from 'react';

const Reedit = () => {
    const [titles, setTitles] = useState ([]);
    fetch ('https://www.reddit.com/r/reactjs.json')
    .then(res=> res.json())
    .then((json)=>{
        setTitles(json.data.children.map(item=>{
            return <div>{item.data.title}</div>;
        }))
    })
    return (
        <div>
            {titles}
        </div>
    );
};

export default Reedit;