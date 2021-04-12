import React from 'react';
import Navigation from '../components/Navigation';
import './MainPage.css'

export default function MainPage() {
    return (
        <div className="main-page">
            <section className="main-page_item main-page_navigation">
                <Navigation/>
            </section>
            <div className="main-page_item main-page_wrapper">
                <section className="main-page_top-block">TOP Block</section>
                <section className="main-page_twits">Twits</section>
            </div>
            <section className="main-page_item main-page_footer">
                Footer
            </section>
        </div>
    )
}