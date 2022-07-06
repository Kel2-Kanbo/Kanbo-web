import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import Button from '../Button';
import Logo from '../Logo';
import background from '../../Assets/Admin.png'

const VerifyEmail = () => {  
    const backgroundImage = {
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
    };
    
  const location = useLocation();
  const state = location.state;
  console.log(state)

  const [email, setEmail] = useState(state);
  console.log(email);
  const value = Object.values(email);
  console.log(value);
  const getDataemail = value?.map((item) => {
    return item;
  });
  console.log(getDataemail);
  console.log(getDataemail[0].email);


    return (
        <VerifyWrap style={backgroundImage}>
            <div className='flex justify-center'>
                <Logo />
            </div>

            <div
                style={{
                    margin: "50px 340px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    borderColor: "black",
                    padding: "20px",
                }}
            >
                <h1 style={{ textAlign: "center" }}><b>VERIFY YOUR EMAIL</b></h1>
                <p style={{ textAlign: "center" }}
                    className="my-5">
                    Your entered <a href='https://mail.google.com/mail/u/0/#all' target="_blank"><b>{getDataemail[0].email}</b></a> as the email address for your account. You will need to verify you email to complete registration
                </p>
                <Link to="/"><Button className='cursor-pointer text-lg font-bold text-center bg-secondary-softblue'>Login</Button></Link>

                <div style={{ textAlign: "center" }}>
                    <p className="mt-5">Did not receive the email? Check your spam folder</p>
                    <b>Resend Email</b>
                </div>
            </div>

        </VerifyWrap>
    );
};

export default VerifyEmail;

const VerifyWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;