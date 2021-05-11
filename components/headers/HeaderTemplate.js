import React from 'react';

const ServiceHeader = ({city}) => {
    return (
        <div className="header-service-main">
        <div className="service-header">
            <p className="service-title">{city} Garage Door</p>
        </div>
        <div className="below-header" >
            <p className="below-header-text">100% Satisfaction Guarantee. Same Day Services</p>
        </div>
        </div>
    )
}

export default ServiceHeader;