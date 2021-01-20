import React from 'react';
import '../../App.css';
import './Conditions.css';

const conditions = (props) => {
    return (
        <div>
            {props.error && <div className="text">Please enter a valid city.</div>}
            {props.loading && <div className="text">Loading...</div>}
            {props.responseObj.cod === 200 ?
                <div>
                    <p className="text">In {props.responseObj.name} it is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default conditions;