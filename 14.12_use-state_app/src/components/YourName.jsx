import React , {useState} from 'react';

const YourName = () => {
    const [flag , setFlag]= useState(true);
    const style = {color : flag ? 'red' : 'green'}

    return (
        <h2 onClick={() => setFlag(!flag)} style={style}>
            Shmuel Moche
        </h2>
    );
};

export default YourName;