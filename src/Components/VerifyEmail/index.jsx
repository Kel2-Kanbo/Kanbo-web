import React from 'react';
import Logo from '../Logo';
import styled from '@emotion/styled';
import background from '../../Assets/Admin.png'

const VerifyEmail = () => {


    const backgroundImage = {
        backgroundImage: `url(${background})`,
        backgroundSize: "100% 100%",
    };

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
                    Your entered <b>yaya@gmail.com</b> as the email address for your account. You will need to verify you email to complete registration
                </p>

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