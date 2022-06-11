import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import styled from "@emotion/styled";

import Logo from "../../Components/Logo";
import background from "../../Assets/BgRegisterAdmin.png";
import Button from "../../Components/Button";
import FormInput from "../../Components/FormInput";

export default function Register() {
	const [isPaswordShown, setIsPasswordShown] = useState(false);
	const _handleClickPassword = () => {
		setIsPasswordShown(!isPaswordShown);
	};

	const [msg, setMsg] = useState("");
	const navigate = useNavigate();
	// const [error, setError] = useState({
	// 	name: 'name cant be empty',
	// 	username: 'username cant contain special characters',
	// 	email: 'email must be valid',
	// 	password: 'Password must be at least 8 characters',
	// });
	const [inputs, setInputs] = useState([
		{
			id: 0,
			name: "name",
			type: 'text',
			placeholder: 'Name',
			value: '',
			regex: /^$|\s+/,
			err: 'name cant be empty',
			isValid: false,
		},
		{
			id: 1,
			name: "email",
			type: 'email',
			placeholder: 'Email',
			value: '',
			regex: /(?=^.{8,}$)/,
			err: ''
		},
		{
			id: 2,
			name: "username",
			type: 'text',
			placeholder: 'Username',
			value: '',
			regex: /(?=^.{8,}$)/,
			err: ''
		},
		{
			id: 3,
			name: "password",
			type: 'password',
			placeholder: 'Password',
			value: '',
			regex: /(?=^.{8,}$)/,
			err: ''
		}
	])

	const _handleChange = (value, index) => {
		// value baru
		const newInputs = { ...inputs[index], value };
		// value lama
		const newInputsArr = [...inputs];
		// add to value baru
		newInputsArr[index] = newInputs;

		// if (inputs[0].regex.test(value)) {
		// 	// value baru
		// 	const newTest = { ...inputs[index], isValid: true };
		// 	// value lama
		// 	const newArr = [...inputs];
		// 	// add to value baru
		// 	newArr[index] = newTest;
		// }

		// setInput di state
		setInputs(newInputsArr);
	}
	console.log(inputs);

	const _handleRegister = async (e) => {
		if (inputs[0].value && inputs[1].value && inputs[2].value && inputs[3].value) {
			// if (error === "") {
			try {
				// await Axios.post("http://localhost:3000/register", {
				// 	name: inputs[0].value,
				// 	email: inputs[1].value,
				// 	username: inputs[2].value,
				// 	password: inputs[3].value,
				// 	role: 'admin',
				// });
				alert(`Register "${inputs[0].value}" Success`);
				navigate("/login")
			} catch (error) {
				if (error.response) {
					setMsg(error.response.data.msg)
				}
			}
			// }
			e.preventDefault();
		} else {
			setMsg("Please fill all field")
		}
	}

	const backgroundImage = {
		backgroundImage: `url(${background})`,
		backgroundSize: "100% 100%",
	};

	return (
		<RegisterWrap style={backgroundImage}>
			<Logo />
			<RegisterInput onSubmit={_handleRegister}>
				<h1 className="text-2xl font-bold">REGISTER</h1>
				<h4 className="text-left">Create Your Account</h4>
				<p className="has-text-centered text-error-red">{msg}</p>
				{
					inputs.map((input, inputIdx) => {
						return (
							<>
								<FormInput
									key={inputIdx}
									{...input}
									value={input.value}
									type={input.type === 'password' ? isPaswordShown ? 'text' : 'password' : input.type}
									onChange={(e) => _handleChange(e.target.value, inputIdx)}
								/>
								{/* <span className="text-black">{input.err}</span> */}
							</>
						)
					})
				}

				<button className="show-password -mt-12 h-8 lg:-mr-72 md:-mr-32 sm:-mr-56" onClick={_handleClickPassword}>
					{isPaswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
				</button>
				{/* {
					error.name && <span className="text-black">{error.name}</span>
				}
				{
					error.username && <span className="text-black">{error.username}</span>
				}
				{
					error.email && <span className="text-black">{error.email}</span>
				}
				{
					error.password && <span className="text-black">{error.password}</span>
				} */}
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
  width: 30%;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
  padding: 24px;
  margin-top: 36px;
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

  @media (max-width: 768px) {
	width: 50%;
	margin-top: 5%;
  }
`;
