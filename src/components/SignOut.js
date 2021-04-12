import React from 'react';
import './navigation.css'
import Button from './Button';
import { Auth } from 'aws-amplify';


export default function SignOut(props) {
    
    const onClick = async() => {
        try {
          await Auth.signOut()
          window.location.href="/";
        } catch (error) {
          console.log(error)
        }
      }

    return (
            <Button
                onClick={onClick}
                type={props.button_type}
            >Sign out</Button>
    )
}