import React, {useState} from 'react';
import Logo from '../../Components/Logo';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import FormInput from '../../Components/FormInput';
import Button from '../../Components/Button';
import Background from '../../Assets/Admin.png'
import styled from '@emotion/styled';
// import styled, { css } from 'styled-components';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

export default function Login() {
    
    // const [msg, setMsg] = useState('');
    // const history = useHistory();
 
    // const Auth = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/login', {
    //             email: email,
    //             password: password
    //         });
    //         history.push("/dashboard");
    //     } catch (error) {
    //         if (error.response) {
    //             setMsg(error.response.data.msg);
    //         }
    //     }
    // }

    const [inputs, setInputs] = useState([
        {
            id: 0,
            type: 'text',
            placeholder: 'Username',
            value: '',
        },
        {
            id: 1,
            type: 'password',
            placeholder: 'Password',
            value: '',
        },
    ])

    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const handleClickPassword = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    const handleChange = (value, index) => {
     const newInputs = { ...inputs[index], value };
		console.log(newInputs);
		const newInputsArr = [...inputs];
		newInputsArr[index] = newInputs;
		setInputs(newInputsArr);
	}   

    const backgroundImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
  };

    return (

        <LoginWrap style={backgroundImage}>
        
        <div className='flex h-screen bg-neutral-400'>

            <div className="max-w-xl w-full m-auto bg-current bg-stone-50 rounded p-5 px-30">

                <Logo/>
                
                <div>
                    <h1 style={{
                        textAlign : 'center',
                    }}>Masuk sebagai admin!</h1>
                </div>

                <div>

                    {
                        inputs.map((input, inputIdx) => (
                            <FormInput
                                key={inputIdx}
                                {...input}
                                value={input.value}
                                type={input.type === 'password' ? isPasswordShown ? 'text' : 'password' : input.typr}
                                onChange={(e) => handleChange(e.target.value, inputIdx)}
                            />
                        ))
                    }
                        <button
                            className='show-password -mt-12 h-8 lg:-mr-72 md:-mr-32 sm:-mr-56'
                            onClick={handleClickPassword}>
                            {isPasswordShown ? <AiFillEyeInvisible/> : <AiFillEye/>}
                        </button>
                        
                        <div style={{
                                textAlign : 'end',
                            }}>
                            <a href='/forgot'>Forgot password?</a>
                        </div>

                        <Button className='rounded
                            w-full
                            border-1
                            bg-stone-500'
                            type='submit'
                            name='Login'
                            >
                                Login
                        </Button>

                        <div style={{
                            textAlign : 'center',
                        }}>
                            <p>Don't have an account? <a href='/register'>Register</a></p>
                        </div>

                </div>

            </div>

        </div>

        </LoginWrap>
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