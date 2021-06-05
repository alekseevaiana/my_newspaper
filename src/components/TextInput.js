import React from 'react';
import "./mainTextInput.css"


export default function TextInput() {
    return (
        <form className="text-input">
            <textarea className="textarea" type="text" placeholder="What did you learn today?"/>
        </form>
    )
}