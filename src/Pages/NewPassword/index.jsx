import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import styled from "@emotion/styled";

import Logo from "../../Components/Logo";
import FormInput from "../../Components/FormInput";
import Button from "../../Components/Button";
import Background from "../../Assets/Admin.png";

export default function NewPassword() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      id: 0,
      type: "password",
      placeholder: "New Password",
      value: "",
      pattern: /^[A-Za-z0-9]{6,12}$/,
      err: "Must be at least 8 characters",
      
    },
    {
      id: 1,
      type: "password",
      placeholder: "Confirm Password",
      value: "",
      pattern: /^[A-Za-z0-9]{6,12}$/,
      err: "Both passwords must match",
      
    },
  ]);

  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const handleClickPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleReset = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = (value, index) => {
    if(inputs[index].pattern.test(value)){
      setError({
        [inputs[index].pattern]: "",
      });
    } else {
      setError({
        [inputs[index].pattern]: inputs[index].err,
      });
    }

    const newInputs = { ...inputs[index], value };
    // console.log(newInputs);
    const newInputsArr = [...inputs];
    newInputsArr[index] = newInputs;
    setInputs(newInputsArr);
  };

  console.log(inputs);

  const backgroundImage = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "100% 100%",
  };

  return (
    <LoginWrap className="flex h-screen" style={backgroundImage}>
      <Logo />
      <div className="m-8">
        <form className="max-w-xl w-full m-auto bg-current bg-secondary-softblue rounded-lg shadow-lg shadow-primary-gray3 p-10 ">
          <div className="flex justify-start gap-32 w-full items-center mb-4">
            <Link className="cursor-pointer" to="/">
              <BiArrowBack />
            </Link>
            <h1 className="text-2xl">NEW PASSWORD</h1>
          </div>
          <p className="mb-4">
            Your password must be different from your previous passwords
          </p>
          <div>
            {inputs.map((input, inputIdx) => (
              <div key={inputIdx} className='mb-4'>
                <FormInput
                  className="peer"
                  {...input}
                  value={input.value}
                  type={
                    input.type === "password"
                      ? isPasswordShown
                        ? "text"
                        : "password"
                      : input.type
                  }
                  required
                  onChange={(e) => handleChange(e.target.value, inputIdx)}
                />
                <button
                  className="show-password -mt-12 h-8 -ml-12"
                  onClick={handleClickPassword}
                >
                  {isPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
                {/* {error[input.pattern] && (
                  <p className="text-red-500 text-xs italic">
                    {error[input.pattern]}
                  </p>
                )} */}
              </div>
            ))}

            <Button onClick={handleReset} type="submit">
              Reset
            </Button>
          </div>
        </form>
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
