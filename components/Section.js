import React from "react"

function Section(props) {
    return (
        <div className="section">
            <img src="https://source.unsplash.com/WLxQvbMyfas" className="section-img"></img>
            <div className="section-right">
                <div className="section-right-top">
                    <img src="./images/pin.png" className="pin"></img>
                    <p className="country">Japan</p>
                    <span className="google-maps-link">View on Google Maps</span>
                </div>
                <h2 className="location">Mount Fuji</h2>
                <span className="date">12th Jan, 2021 - 24th Jan, 2021</span>
                <p className="description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                </div>
        </div>
    )
}

export default Section