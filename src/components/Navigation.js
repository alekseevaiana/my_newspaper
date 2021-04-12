import React from 'react';
import './navigation.css'
import Button from './Button';
import { Auth } from 'aws-amplify';


export default function Navigation() {
    const onClick = async() => {
        try {
          await Auth.signOut()
        } catch (error) {
          console.log(error)
        }
      }
    return (
        <div className="navigation">
            <div>Home</div>
            <Button
                onClick={onClick}
                type="button_link"
            >Sign out</Button>
        </div>
    )
}