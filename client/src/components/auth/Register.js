import Axios from 'axios'
import React, {useState, useContext} from 'react'

import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import UserContext from '../../context/UserContext'
import domain from '../../util/domain'

import ErrorMessage from '../misc/ErrorMessage'

import './AuthForm.scss'

// ! names, email, username, password, passwordVerify

function Register(){
    const [formName, setFormName] = useState('')
    const [formEmail, setFormEmail] = useState('')
    const [formUsername, setFormUsername] = useState('')
    

    const [formPassword, setFormPassword] = useState('')
    const [formPasswordVerify, setFormPasswordVerify] = useState('')

    const [formPronouns, setFormPronouns] = useState('')

    const [errorMessage, setErrorMessage] = useState(null)

    const {getUser} = useContext(UserContext)

    const navigate = useNavigate()

    async function register(e){
        e.preventDefault()

        const registerData = {
            name: formName,
            email: formEmail,
            username: formUsername,
            profilePicture: 'https://i.pinimg.com/736x/9b/47/a0/9b47a023caf29f113237d61170f34ad9.jpg',
            profileBanner: 'https://www.thepartnermarketinggroup.com/wp-content/uploads/2018/01/LinkedInDefaultBanner.png',
            password: formPassword,
            passwordVerify: formPasswordVerify,
            pronouns: formPronouns,
        }

        try{
            await Axios.post(`${domain}/auth/register`, registerData)
        }
        catch(err){
            if(err.response){
                setErrorMessage(err.response.data.errorMessage)
            }    
            return
        }

        await getUser()
        navigate('/')
    }


    return (
        <div className="auth-form">
            <h2>Register a new account</h2>
            {errorMessage && (
                <ErrorMessage
                    message={errorMessage}
                    clear={() => setErrorMessage(null)}
                />
            )}

            <form className='form-regLog' onSubmit={register}>
                
                <div className="line-up">
                    <label htmlFor="form-email">Name:</label>
                    <input 
                        id='form-name'
                        type="text" 
                        value={formName}
                        onChange={(e)=> setFormName(e.target.value)}
                    />
                </div>


                <div className="line-up">
                    <label htmlFor="form-email">Email:</label>
                    <input 
                        id='form-email'
                        type="text" 
                        value={formEmail}
                        onChange={(e)=> setFormEmail(e.target.value)}
                    />
            
                    <label htmlFor="form-username">Username:</label>        
                    <input 
                        id='form-username'
                        type="text" 
                        value={formUsername}
                        onChange={(e)=> setFormUsername(e.target.value)}
                    />

                    <label htmlFor="form-pronouns">Pronouns:</label>
                    <input 
                        id='form-pronouns'
                        type="text" 
                        value={formPronouns}
                        onChange={(e)=> setFormPronouns(e.target.value)}
                    />

                    <label htmlFor="form-password">Password:</label>
                    <input 
                        id='form-password'
                        type="password" 
                        value={formPassword}
                        onChange={(e)=> setFormPassword(e.target.value)}
                    />
                
                    <label htmlFor="form-passwordVerify">Verify Password:</label>
                    <input 
                        id='form-passwordVerify'
                        type="password" 
                        value={formPasswordVerify}
                        onChange={(e)=> setFormPasswordVerify(e.target.value)}
                    />
                </div>

                <p>Have an account? <Link to='/login'>Login here</Link></p>

                <button className='btn-submit' type='submit'>Register</button>
            </form>
            
        </div>
    )
}

export default Register