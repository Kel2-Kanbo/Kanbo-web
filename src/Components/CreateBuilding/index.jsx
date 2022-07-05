import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";

import { createNearby, getComplex } from "../../API/ApiFetch";
import FormInput from "../FormInput";
import SelectWrap from "../SelectWrap";
import FormWrap from "../FormWrap";
import Button from "../Button";
import FormTextArea from "../FormTextArea";
import FormWrapModal from "../FormWrapModal";

export default function CreateBuilding(props) {
  const { handleClose, addBuilding, showModal } = props;

  // const complexName = complex?.map((item) => {
  //   return {
  //     value: item.complex_name,
  //     id: item.complex_id,
  //   };
  // });

  // const complex_name = new Array(complexName.length);
  // for (let i = 0; i < complexName.length; i++) {
  //   complex_name[i] = complexName[i].value;
  // }

  const [data, setData] = useState({
    buildingName: "",
    complexName: "",
    address: "",
    numOfRooms: "",
    description: "",
    picture: "",
  });

  const [complex, setComplex] = useState([]);
  console.log(complex)
  const [msg, setMsg] = useState("");

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "buildingName",
      type: "text",
      placeholder: "Building Name",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "complexName",
      type: "select",
      placeholder: "Complex Name",
      options: complex,
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "address",
      type: "text",
      placeholder: "Address",
      value: "",
      required: true,
    },
    {
      id: 3,
      name: "numOfRooms",
      type: "number",
      placeholder: "Jumlah Room",
      value: "",
      required: true,
    },
    {
      id: 4,
      name: "description",
      type: "textarea",
      placeholder: "Description",
      value: "",
      required: true,
    },
  ]);

  const _handleChange = (value, index) => {
    setInputs(
      inputs.map((input) => {
        if (input.id === index) {
          return {
            ...input,
            value,
          };
        }
        return input;
      })
    );
    setData({
      ...data,
      [inputs[index].name]: value,
    });

  };

  const [imageBuilding, setImageBuilding] = useState("");

  const uploadImageBuilding = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setImageBuilding(base64);
    console.log(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const _handleCreateBuilding = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value &&
      data
    ) {
      addBuilding({
        buildingName: inputs[0].value,
        complexName: inputs[1].value,
        address: inputs[2].value,
        numOfRooms: inputs[3].value,
        description: inputs[4].value,
        building_image: imageBuilding,
      });

      e.preventDefault();
      handleClose();

      setInputs([
        {
          id: 0,
          name: "buildingName",
          type: "text",
          placeholder: "Building Name",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "complexName",
          type: "select",
          placeholder: "Complex Name",
          options: complex,
          value: "",
          required: true,
        },
        {
          id: 2,
          name: "address",
          type: "text",
          placeholder: "Address",
          value: "",
          required: true,
        },
        {
          id: 3,
          name: "numOfRooms",
          type: "number",
          placeholder: "Jumlah Room",
          value: "",
          required: true,
        },
        {
          id: 4,
          name: "description",
          type: "textarea",
          placeholder: "Description",
          value: "",
          required: true,
        },
      ]);
      // setShowModal(false);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  const _handleClose = () => {
    handleClose();
    setInputs([
      {
        id: 0,
        name: "buildingName",
        type: "text",
        placeholder: "Building Name",
        value: "",
        required: true,
      },
      {
        id: 1,
        name: "complexName",
        type: "select",
        placeholder: "Complex Name",
        options: complex,
        value: "",
        required: true,
      },
      {
        id: 2,
        name: "address",
        type: "text",
        placeholder: "Address",
        value: "",
        required: true,
      },
      {
        id: 3,
        name: "numOfRooms",
        type: "number",
        placeholder: "Jumlah Room",
        value: "",
        required: true,
      },
      {
        id: 4,
        name: "description",
        type: "textarea",
        placeholder: "Description",
        value: "",
        required: true,
      },
    ]);
  };

  //get complex
  const getAllComplex = async () => {
    try {
      await getComplex().then((response) => {
        setComplex(response);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllComplexes = async () => {
      const allComplex = await getAllComplex();
      if (allComplex) {
        setComplex(allComplex);
        console.log(allComplex);
      }
    };
    getAllComplexes();
  }, []);

  if (!showModal) return null;

  return (
    <>
      <div
        onSubmit={_handleCreateBuilding}
        className="fixed flex-col gap-2 inset-0 bg-primary-black bg-opacity-30 backdrop-blur-md flex justify-center items-center"
      >
        <FormWrapModal>
          <h3 className="text-2xl text-center font-bold">Create Building</h3>
          <p className="has-text-centered text-error-red">{msg}</p>
          {inputs.map((input, inputIdx) =>
            input.type !== "select" && input.type !== "textarea" ? (
              <>
                <FormInput
                  key={inputIdx}
                  {...input}
                  value={input.value}
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                />
              </>
            ) : input.type === "select" ? (
              <>
                <SelectWrap
                  key={inputIdx}
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                  value={input.value}
                >
                  <option value="">Complex</option>
                  {complex.map((complex, complexIdx) => (
                    <option key={complexIdx} value={complex.complex_name}>
                      {complex.complex_name}
                    </option>
                  ))}
                </SelectWrap>
              </>
            ) : input.type === "textarea" ? (
              <>
                <FormTextArea
                  key={inputIdx}
                  {...input}
                  value={input.value}
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                />
              </>
            ) : (
              ""
            )
          )}

          <div>
            <FormInput
              type="file"
              id="gambar"
              onChange={(e) => uploadImageBuilding(e)}
            />
          </div>

          <div className="flex justify-between w-full text-primary-white">
            <Button
              className="font-bold bg-error-red uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
              type="button"
              onClick={_handleClose}
            >
              Close
            </Button>
            <Button
              className="bg-primary-blue font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
              type="button"
              onClick={_handleCreateBuilding}
            >
              Submit
            </Button>
          </div>
        </FormWrapModal>
      </div>
    </>
  );
}
