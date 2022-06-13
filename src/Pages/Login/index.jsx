import React, { useState } from 'react';
import Logo from '../../Components/Logo';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FormInput from '../../Components/FormInput';
import Button from '../../Components/Button';
import Background from '../../Assets/Admin.png'
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// import styled, { css } from 'styled-components';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    // const [msg, setMsg] = useState('');
    // const history = useHistory();

    // const Auth = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/login', {
    //             email: email,
    //             password: password
    //         });
    //         history.push("/dashboard-admin");
    //     } catch (error) {
    //         if (error.response) {
    //             setMsg(error.response.data.msg);
    //         }
    //     }
    // }

    const [inputs, setInputs] = useState([
        {
            id: 0,
            type: 'email',
            placeholder: 'Email',
            value: '',
            pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
            err: 'Email must be valid',
        },
        {
            id: 1,
            type: 'password',
            placeholder: 'Password',
            value: '',
            pattern: "^[A-Za-z0-9]{6,12}$",
            err: 'Must contain at least 6 or more characters',
        },
    ])

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const handleClickPassword = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const handleChange = (value, index) => {
        const newInputs = { ...inputs[index], value };
        // console.log(newInputs);
        const newInputsArr = [...inputs];
        newInputsArr[index] = newInputs;
        setInputs(newInputsArr);
    }
    const onLogin = (e) => {
        e.preventDefault();
        navigate("/dashboard")
    }

    const backgroundImage = {
        backgroundImage: `url(${Background})`,
        backgroundSize: "100% 100%",
    };

    return (
        <LoginWrap style={backgroundImage}>
            <div className='flex h-screen'>
                <form
                    onSubmit={onLogin}
                    className="max-w-xl w-full m-auto bg-current bg-secondary-softblue rounded-lg shadow-lg shadow-primary-gray3 p-10 ">
                    <div className='flex justify-center mb-4'>
                        <Logo />
                    </div>
                    {/* <div>
                        <h1 style={{
                            textAlign: 'center',
                        }} className="py-2">Masuk sebagai admin!</h1>
                    </div> */}

                    <div>
                        {
                            inputs.map((input, inputIdx) => (
                                <div
                                    key={inputIdx}
                                >
                                    <FormInput
                                        className='p-3 peer'
                                        {...input}
                                        value={input.value}
                                        type={input.type === 'password' ? isPasswordShown ? 'text' : 'password' : input.type}
                                        required
                                        onChange={(e) => handleChange(e.target.value, inputIdx)}
                                    />
                                    <p className='my-2 invisible peer-invalid:visible text-primary-red text-sm'>{input.err}</p>
                                </div>
                            ))
                        }
                        {/* <button
                            className='show-password -mt-12 h-8 lg:-mr-72 md:-mr-32 sm:-mr-56'
                            onClick={handleClickPassword}>
                            {isPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                        </button> */}

                        <div style={{
                            textAlign: 'end',
                        }} className="py-2">
                            <a href='/forgot'>Forgot password?</a>
                        </div>

                        <Button className='rounded
                                w-full
                                border-1
                                bg-stone-500'
                            type='submit'
                        >
                            Login
                        </Button>

                        <div style={{
                            textAlign: 'center',
                        }} className="mt-4">
                            <p className='text-sm'>Don't have an account? <a className='text-primary-blue' href='/register'>Register</a></p>
                        </div>

                    </div>

                </form>

            </div >

        </LoginWrap >
    );
}

const LoginWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;