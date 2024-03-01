import React from 'react';

function Ship(props) {
    const shipData = props.obj;
    return <div>
        <h2>{shipData?.name}</h2>
        <p>Description: {shipData?.description}</p>
        <h3>Country: {shipData?.country}</h3>
        <string>Displasement: <b>{shipData?.displasement}</b></string>
    </div>
}

export default Ship;
