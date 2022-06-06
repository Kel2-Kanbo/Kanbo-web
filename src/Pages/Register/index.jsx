import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import styled from "@emotion/styled";

import Logo from "../../Components/Logo";
import background from "../../Assets/BgRegisterAdmin.png";
import Button from "../../Components/Button";

export default function Register() {
	const [isPaswordShown, setIsPasswordShown] = useState(false);
	const _handleClickPassword = () => {
		setIsPasswordShown(!isPaswordShown);
	};

	const [data, setData] = useState({
		name: '',
		email: '',
		username: '',
		password: '',
		role: 'admin',
	});
	const [msg, setMsg] = useState("");
  const navigate = useNavigate();

	const errorData = {
		password: '',
	}
	const RegexPassword = /(?=^.{8,}$)/;
  const [error, setError] = useState(errorData.password);
	const [inputs, setInputs] = useState([
		{
			id: 0,
			type : 'text',
			placeholder: 'Name',
			value: '',
		},
		{
			id: 1,
			type : 'email',
			placeholder: 'Email',
			value: '',
		},
		{
			id: 2,
			type : 'text',
			placeholder: 'Username',
			value: '',
		},
		{
			id: 3,
			type: 'password',
			placeholder: 'Password',
			value: '',
		}
	])

	const _handleChange = (value, index) => {
		if(index === 3) {
			if(!RegexPassword.test(value)){
				setError("Password must be at least 8 characters");
			} else{
				setError("")
			}
		}
		const newInputs = { ...inputs[index], value };
		console.log(newInputs);
		const newInputsArr = [...inputs];
		newInputsArr[index] = newInputs;
		setInputs(newInputsArr);

		setData({
			...data,
			[inputs[index].id]: value
		});
		console.log(data);
	}


	const _handleRegister = async (e) => {
		if(data.name && data.email && data.username && data.password && data.role){
			if (error === "") {
				try {
					await Axios.post("http://localhost:3000/register", {
						name: data.name,
						email: data.email,
						username: data.username,
						password: data.password,
						role: data.role,
					})
					alert(`Register "${data.name}" Success`);
					navigate("/login")
				} catch (error) {
					if(error.response) {
						setMsg(error.response.data.msg)
					}   
				}
			}
			e.preventDefault();
			console.log(data);
			setData({	
				name: '',
				email: '',
				username: '',
				password: '',
				role: 'admin',
			});
		}	else {
			setMsg("Please fill all field")
		}
	}

	const backgroundImage = {
    backgroundImage: `url(${background})`,
    backgroundSize: "100% 100%",
  };

	return (
		<RegisterWrap style={backgroundImage}>
			<Logo/>
			<RegisterInput onSubmit={_handleRegister}>
				<h1 className="text-2xl font-bold">REGISTER</h1>
				<h4 className="text-left">Create Your Account</h4>
				<p className="has-text-centered text-error-red">{msg}</p>	
				{
          inputs.map((input, inputIdx) => (
            <FormInput
              key={inputIdx}
              {...input}
              value={input.value}
							type={input.type === 'password' ? isPaswordShown ? 'text' : 'password' : input.type}
              onChange={(e) => _handleChange(e.target.value, inputIdx)}
              />
          ))
        }
				
				<button className="show-password -mt-12 h-8 lg:-mr-64 md:-mr-32 sm:-mr-24" onClick={_handleClickPassword}>
					{isPaswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
				</button>
        <span className="text-black">{error}</span>
				
				<Button onClick={_handleRegister}>Register</Button>
				<h4>
          Have an account?{" "}
          <Link to="/login" className="font-bold text-primary-blue">
            Login
          </Link>
        </h4>
			</RegisterInput>
		</RegisterWrap>
	)
}

const RegisterWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex; 
  flex-direction: column;
  align-items: center;
`;

const RegisterInput = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  width: 40%;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  padding: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .password {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-left: -15px;
  }
`;

const FormInput = styled.input`
	width: 60%;
	border: 2px solid black;
	border-radius: 8px;
	padding: 10px;
`