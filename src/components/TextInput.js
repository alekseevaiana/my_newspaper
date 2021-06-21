import React from 'react';
import Button from './Button';
import "./mainTextInput.css"


export default function TextInput() {
    return (
        <form className="text-input">
            <textarea className="textarea" type="text" placeholder="What did you learn today?"/>
            <Button type="button_link">Отправить</Button>
        </form>
    )
}