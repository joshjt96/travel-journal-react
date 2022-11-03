import React from "react"
import ReactDOM from "react-dom"
import Navbar from "./components/Navbar"
import Section from "./components/Section"
import data from "./data"

// import { createRoot } from 'react-dom/client';

function App() {     
    
    const sections = data.map(item => {
        return (
            <Section 
                    key={item.id}
                    item={item}
            />
        )
    })
    
    return (
        <div>
            <Navbar />
            <section className="section">
                {sections}
            </section>
        </div>
    )
}

export default App