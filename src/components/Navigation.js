import React from 'react';
import './navigation.css'
import SignOut from './SignOut';


export default function Navigation() {
    return (
        
            <div className="navigation_wrapper">
                <div>My_Newspapper.</div>
                <div className="navigation_right-column">
                    <div className="navigation_right-column__item">Home</div>
                    <div className="navigation_right-column__item">Profile</div>
                    <div className="navigation_right-column__item">
                        <SignOut button_type="button_link">Sing out</SignOut>
                    </div>
                </div>
            </div>
        
    )
}