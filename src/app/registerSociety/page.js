'use client'
//page for user to register a society
import { useRouter } from "next/navigation";
import { useState } from "react"
import sendEmailCode from "./apisForSection";

//need to figure out what details need to be known first
export default function registerSociety() {

    const router = useRouter();
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ message, setMessage ] = useState('');
    const [ passwordRecovery, setPasswordRecovery ] = useState(false);
    const [ emailForRecovery, setEmailForRecovery ] = useState('');
     //const [ selectedFile, setSelectedFile ] = useState(null);


    //borrow functions from formalbridge
    //use localStorage to to save jwt returned upon sign-up or log-in
    //and will need to add forgotPassword and resetPassword - which needs a UI display
    //'forgot password?' button changes ui on click, and then 'reset via email' button calls api function that sends email
    //and needs to change ui to an input for the code and email, with a button to submit code and email?
    
    //localStorage.setItem('jwt', data.jwt); // Store JWT
    //localStorage.setItem('user', JSON.stringify(data.user));
    let dataToSend;

    async function logginSocietyHandler(e) {
        e.preventDefault();

        dataToSend = {
            identifier: email,
            password: password
        }
        const user = await loginUser(dataToSend);
        console.log("here's the outcome from trying to log-in:", user);

        if (user) {
            setMessage(`Welcome, ${user.user.username}!`);
            localStorage.setItem('jwt', user.jwt); // Store JWT
            localStorage.setItem('user', JSON.stringify(user.user));
            router.push('/userPage')
        }
    }
    
    async function registerSocietyHandler(e) {
        e.preventDefault()

        dataToSend = {
            username,
            email,
            password
        }
        console.log("this is the value of dataToSend:", dataToSend);
        const user = await signUpUser(dataToSend);
        console.log("here is outcome from registerSocietyHandler:", user);
        //if returned http code is 400, means email already registered, need a message to pop up for that


        if (user) {
          setMessage(`Welcome, ${user.user.username}!`);
          localStorage.setItem('jwt', user.jwt); // Store JWT
          localStorage.setItem('user', JSON.stringify(user.user));
          router.push('/userPage')
        //need to set jwt in localStorage
        //then navigate to userPage
        }
    }
    
    const loginUser = async (dataToSend) => {
        try {
          const response = await fetch('http://localhost:1337/api/auth/local', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
          });
      
          if (!response.ok) {
            throw new Error('Failed to log in');
          }
      
          const data = await response.json();
          //localStorage.setItem('jwt', data.jwt); // Store JWT
          //localStorage.setItem('user', JSON.stringify(data.user));
          return data;
        } catch (error) {
          console.error("Login Error:", error);
          return null;
        }
      };

   

    //unclear whether i need to add username and societyLogo here, or later
    const signUpUser = async (dataToSend) => {
        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
              });
          
              if (!response.ok) {
                throw new Error('Failed to register');
              }
          
              const data = await response.json();
              //localStorage.setItem('jwt', data.jwt); // Store JWT if needed
              //localStorage.setItem('user', JSON.stringify(data.user));
              console.log("Here's the data about to be returned: ", data);
              return data;
            } catch (error) {
              console.error("Registration Error:", error);
              return null;
            }
    }

    //lets just add email, username and password - let societies add societyLogo later on userpage

    function passwordRecoveryDisplayHandler() {
      setPasswordRecovery(prev => !prev);
    }

    async function sendEmailCodeHandler() {
      //need the api here to send - /api/auth/forgot-password
      console.log("this is the emailForRecovery being sent:", emailForRecovery);
      const response = await sendEmailCode(emailForRecovery);
      console.log("thsi is the favklue of respoonse assigned retredn sendEmailCode api call:", response);
    }

    return (
        <>
        <p>register society or log in</p>
        <p>Society Name</p>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>society email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>enter password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={registerSocietyHandler}>register society</button>

        <p>or you can log in:</p>
        <label>society email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>society password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={logginSocietyHandler}>log-in to society</button>

        <button onClick={passwordRecoveryDisplayHandler}>forgot password?</button>


        {message && (
            <p>{message}</p>
        )}
        { passwordRecovery && (
          <>
            <label>enter the email associated with your account</label>
            <input type="email" value={emailForRecovery} onChange={(e) => setEmailForRecovery(e.target.value)} />
            <button onClick={sendEmailCodeHandler}>send code to email address</button>
          </>
        )}
        </>
    )
} //once you've set up login, then play with forgot password function implementation