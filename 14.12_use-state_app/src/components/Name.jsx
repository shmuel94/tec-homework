import React , {useState} from 'react';

const Name = ({name}) => {
    const [flag , setFlag]= useState(true);
    const style = {color : flag ? 'red' : 'green'}

    return (
        <p onClick={() => setFlag(!flag)} style={style}>
            {name}
        </p>
    );
};

export default Name;