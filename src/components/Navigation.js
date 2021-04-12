import React from 'react';
import './navigation.css'
import SignOut from './SignOut';


export default function Navigation() {
    return (
        <div className="navigation">
            <div>Home</div>
            <SignOut button_type="button_link">Sign out</SignOut>
        </div>
    )
}