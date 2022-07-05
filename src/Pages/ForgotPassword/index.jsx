import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import Swal from "sweetalert2";

import Background from "../../Assets/Admin.png";
import Logo from "../../Components/Logo";
import FormInput from "../../Components/FormInput";
import Button from "../../Components/Button";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      id: 0,
      type: "email",
      placeholder: "youremail@gmail.com",
      value: "",
      pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
      err: "Email must be valid",
    },
  ]);

  const handleChange = (value, index) => {
    const newInputs = { ...inputs[index], value };
    const newInputsArr = [...inputs];
    newInputsArr[index] = newInputs;
    setInputs(newInputsArr);
  };

  const _handleSend = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Intructions Sent",
      text: `We sent instructions to change your password to yaya@gmail.com, please check bot your inbox and spam folder`,
      confirmButtonColor: "#4C35E0",
      confirmButtonText: "Ok!",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/new-pw");
      }
    });
  };

  const backgroundImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
  };

  return (
    <ForgotPasswordWrap className="flex h-screen" style={backgroundImage}>
      <Logo />
      <div className="m-8">
        <form className="max-w-lg m-auto bg-current bg-primary-white rounded-lg shadow-lg shadow-primary-gray3 p-10 ">
          <div className="flex justify-start gap-32 w-full items-center mb-4">
            <Link className="cursor-pointer" to='/'>
            <BiArrowBack />
            </Link>

            <h1 className="text-2xl">RESET PASSWORD</h1>
          </div>
          <p>
            Enter the email associated with your account and we will send
            instructions to reset your password
          </p>
          <div>
            {inputs.map((input, inputIdx) => (
              <div key={inputIdx}>
                <FormInput
                  className="peer"
                  {...input}
                  value={input.value}
                  type={input.type}
                  required
                  onChange={(e) => handleChange(e.target.value, inputIdx)}
                />
              </div>
            ))}

            <Button onClick={_handleSend} type="submit" className="mt-2 bg-primary-blue text-secondary-softblue">
              Send
            </Button>

            <div className="mt-4 text-center">
              <p className="text-sm">
                Didn't recieve the email? Check your span folder or{" "}
                <a className="text-primary-blue" href="/register">
                  Resend email
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </ForgotPasswordWrap>
  );
}

const ForgotPasswordWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
