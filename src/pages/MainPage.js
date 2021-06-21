import React from 'react';
import Navigation from '../components/Navigation';
import './MainPage.css';
import Footer from '../components/Footer';
import TextInput from '../components/TextInput';

export default function MainPage() {
    return (
        <div className="main-page">
            <section className="main-page_item main-page_navigation">
                <Navigation/>
            </section>
            <div className="main-page_item main-page_wrapper">
                <section className="main-page_top-block">
                    <TextInput/>
                </section>
                <section className="main-page_twits">Twits</section>
            </div>
        </div>
    )
}