import React from "react"

function Section(props) {
    return (
        <div className="section">
            <img src={props.item.imageUrl} className="section-img"></img>
            <div className="section-right">
                <div className="section-right-top">
                    <img src="./images/pin.png" className="pin"></img>
                    <p className="country">{props.item.country}</p>
                    <span><a href={props.item.googleMapsUrl}><p className="google-maps-link">View on Google Maps</p></a></span>
                </div>
                <h2 className="location">{props.item.location}</h2>
                <span className="date">{props.item.startDate} - {props.item.endDate}</span>
                <p className="description">{props.item.description}</p>
                </div>
        </div>
    )
}

export default Section