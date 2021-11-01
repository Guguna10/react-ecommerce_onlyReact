import React from 'react'
import "./hero.style.scss"

const hero = () => {
    return (
        <section className="hero is-large is-info hero-image">
            <div className="hero-body">
                <p className="hero-title">
                    Bags reimagined for modern life.
                </p>
                <div className="shop-now-btn">
                    <button className="button is-black" id="shop-now">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </section>
    )
}

export default hero
