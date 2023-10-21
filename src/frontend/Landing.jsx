import React from "react"
import Navigation from "./Navigation";
import Card from "./card";
import Footer from "./Footer";
const Landing = () => {
    return (
        <div>
            <Navigation />
            <div className="grid grid-rows-2 grid-flow-col gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}

export default Landing;