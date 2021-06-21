import React from 'react';
import Button from './Button';
import "./textInput.css"


export default function TextInput() {
    return (
        <form className="text-input">
            <div className="text-input_wrapper">
                <textarea className="textarea" type="text" placeholder="What did you learn today?"/>
            </div>
            <div className="text-input_button-wrapper">
                <Button type="button_button">Отправить</Button>
            </div>
        </form>
    )
}