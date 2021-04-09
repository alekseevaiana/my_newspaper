import React from 'react';
import './MainPage.css'

export default function MainPage() {
    return (
        <div className="main-page">
            <section className="main-page_navigation">NAVIGATION</section>
            <div className="main-page_wrapper">
                <section className="main-page_top-block">TOP Block</section>
                <section className="main-page_twits">Twits</section>
            </div>
            <section className="main-page_footer">
                Footer
            </section>
        </div>
    )
}