import React ,{useState} from 'react'
import './entry.style.css'

import { LoginForm } from '../../components/login/Login.comp'
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp'

export const Entry = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [frmLoad,setFrmLoad] = useState("login");

    const handleOnchange = e =>{
        const {name,value} = e.target;

        switch(name){
            case'email':
                setEmail(value)
                break
            case'password':
                setPassword(value)
                break
            default:
                break
        }
       
    }

    const handleOnSubmit = e =>{
        e.preventDefault()

        if(!email||!password){
            return alert("fill up form")
        }

        //TODO call api to submit the form
        console.log(email,password);
    }
    const handleOnResetSubmit = e =>{
        e.preventDefault()

        if(!email){
            return alert("fill up email")
        }

        //TODO call api to submit the form
        console.log(email,password);
    }

    const formSwitcher = (frmType) => {
        setFrmLoad(frmType)
    }
  return (
    <div className='entry-page bg-info'>
        <div className="mt-4 p-5 bg-white text-dark rounded text-start form-box">
        {frmLoad === 'login' &&
        <LoginForm handleOnchange={handleOnchange}
        handleOnSubmit={handleOnSubmit} 
        formSwitcher={formSwitcher}
        email={email}
        pass={password}
        />
        }
        
        
        {frmLoad === 'rest' &&
        <ResetPassword handleOnchange={handleOnchange}
        handleOnResetSubmit={handleOnResetSubmit} 
        formSwitcher={formSwitcher}
        email={email}
    
        />
        }
        
        </div>
        
    </div>
  )
}
