import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";

import { createNearby } from "../../API/ApiFetch";
import FormInput from "../FormInput";
import SelectWrap from "../SelectWrap";
import FormWrap from "../FormWrap";
import Button from "../Button";
import FormTextArea from "../FormTextArea";

export default function CreateBuilding(props) {
  const [showModal, setShowModal] = useState(true);
  const { handleClose, addBuilding, complex } = props;

  const complexName = complex?.map((item) => {
    return { 
      value: item.complex_name,
      id: item.complex_id,
    };
  });

  const complex_name = new Array(complexName.length);
  for (let i = 0; i < complexName.length; i++) {
    complex_name[i] = complexName[i].value;
  }

  const createNearbyFacilities = async (data) => {
    try {
      await createNearby(data).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [data, setData] = useState({
    buildingName: "",
    complexName: "",
    address: "",
    jumlahRoom: "",
    description: "",
    picture: "",
  });

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
      options: complex_name,
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
      name: "jumlahRoom",
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

  const [nearby, setNearby] = useState([
    {
      id: 0,
      name: "facility",
      type: "text",
      placeholder: "Facility",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "distance",
      type: "text",
      placeholder: "Distance",
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "time",
      type: "time",
      placeholder: "Time",
      value: "",
      // required: true,
    },
    {
      id: 3,
      name: "category",
      type: "select",
      placeholder: "Category",
      options: ["Hospital", "Bank", "Mall"],
      value: "",
      // required: true,
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

  const _handleChangeNearby = (value, index) => {
    setNearby(
      nearby.map((input) => {
        if (input.id === index) {
          return {
            ...input,
            value,
          };
        }
        return input;
      })
    );
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
      inputs[4].value
    ) {
      addBuilding({
        id: uuidv4(),
        name: inputs[0].value,
        complexName: inputs[1].value,
        address: inputs[2].value,
        jumlahRoom: inputs[3].value,
        description: inputs[4].value,
        picture: imageBuilding,
      });

      e.preventDefault();

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
          options: ["Complex 1", "Complex 2", "Complex 3"],
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
          name: "jumlahRoom",
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
      setShowModal(false);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  const _handleCreateNearby = (e) => {
    if (
      nearby[0].value &&
      nearby[1].value &&
      nearby[2].value &&
      nearby[3].value
    ) {
      createNearbyFacilities({
        building_id: data.id,
        name: nearby[0].value,
        description: nearby[1].value,
        time: nearby[2].value,
        category: nearby[3].value,
      });

      e.preventDefault();

      setNearby([
        {
          id: 0,
          name: "facility",
          type: "text",
          placeholder: "Facility",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "distance",
          type: "text",
          placeholder: "Distance",
          value: "",
          required: true,
        },
        {
          id: 2,
          name: "time",
          type: "time",
          placeholder: "Time",
          value: "",
          // required: true,
        },
        {
          id: 3,
          name: "category",
          type: "select",
          placeholder: "Category",
          options: ["Hospital", "Bank", "Mall"],
          value: "",
          // required: true,
        },
      ]);
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
        options: ["Complex 1", "Complex 2", "Complex 3"],
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
        name: "jumlahRoom",
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

  return (
    <>
      <FormWrap
        className="modal fade fixed top-0 left-0 hidden w-full h-5/6 outline-none overflow-x-hidden overflow-y-auto"
        onSubmit={_handleCreateBuilding}
      >
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
                <option value="">Complex Option</option>
                {input.options.map((option, optionIdx) => (
                  <option key={optionIdx} value={option}>
                    {option}
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

        <div className="w-full flex justify-between">
          <h4 className="text-md font-bold">Nearby facilities</h4>
          <button onClick={_handleCreateNearby}>
            <AiOutlinePlus />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {nearby.map((inputNearby, inputNearbyIdx) =>
            inputNearby.name === "facility" ? (
              <>
                <FormInput
                  className="w-full col-start-1 col-end-4"
                  key={inputNearbyIdx}
                  {...inputNearby}
                  value={inputNearby.value}
                  type={inputNearby.type}
                  onChange={(e) =>
                    _handleChangeNearby(e.target.value, inputNearbyIdx)
                  }
                />
              </>
            ) : (
              <>
                {inputNearby.type !== "select" ? (
                  <>
                    <FormInput
                      key={inputNearbyIdx}
                      {...inputNearby}
                      value={inputNearby.value}
                      type={inputNearby.type}
                      onChange={(e) =>
                        _handleChangeNearby(e.target.value, inputNearbyIdx)
                      }
                    />
                  </>
                ) : (
                  <>
                    <SelectWrap
                      key={inputNearbyIdx}
                      type={inputNearby.type}
                      onChange={(e) =>
                        _handleChangeNearby(e.target.value, inputNearbyIdx)
                      }
                      value={inputNearby.value}
                    >
                      <option value="">Category Option</option>
                      {inputNearby.options.map((option, optionIdx) => (
                        <option key={optionIdx} value={option}>
                          {option}
                        </option>
                      ))}
                    </SelectWrap>
                  </>
                )}
              </>
            )
          )}
        </div>

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
      </FormWrap>
    </>
  );
}
