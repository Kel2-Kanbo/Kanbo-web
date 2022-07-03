import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import FormInput from "../FormInput";
import SelectWrap from "../SelectWrap";
import FormWrapModal from "../FormWrapModal";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import {
  createComplex,
  getCity,
  getDistrict,
  getProvince,
} from "../../API/ApiFetch";
import Swal from "sweetalert2";

export default function CreateComplex(props) {
  const { handleClose, showModal } = props;

  const navigate = useNavigate();
  const [data, setData] = useState({
    complexName: "",
    complexAddress: "",
    city: "",
    district: "",
    building: "",
  });
  const [msg, setMsg] = useState("");

  const [province, setProvince] = useState([]);
  console.log(province);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);

  console.log(city);

  // const dataProvince = province?.map((item) => {
  //   return {
  //     id: item.id,
  //   };
  // }
  // );
  // console.log(dataProvince);

  // console.log(city);
  // const cityName = city?.map((item) => {
  //   return {
  //     value: item.name,
  //     id: item.id,
  //   };
  // });
  // const city_name = new Array(cityName.length);
  // for (let i = 0; i < cityName.length; i++) {
  //   city_name[i] = cityName[i].value;
  // }

  // console.log(city_name);

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "complexName",
      type: "text",
      placeholder: "Complex Name",
      value: "",
      required: true,
    },
    {
      id: 1,
      name: "complexAddress",
      type: "text",
      placeholder: "Complex Address",
      value: "",
      required: true,
    },
    {
      id: 2,
      name: "province",
      type: "select",
      placeholder: "Province",
      options: province,
      // options: dataProvince,
      value: "",
      required: true,
    },
    {
      id: 3,
      name: "city",
      type: "select",
      placeholder: "City",
      // options: city_name,
      options: city,

      value: "",
      required: true,
    },
    {
      id: 4,
      name: "district",
      type: "select",
      placeholder: "District",
      options: district,
      value: "",
      required: true,
    },
    {
      id: 5,
      name: "building",
      type: "number",
      placeholder: "Building",
      value: "",
      required: true,
    },
  ]);
  console.log(inputs);

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

    // setProvince({
    //   [inputs[index].name]: value,
    // });
  };

  const _handleCreateComplex = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value &&
      inputs[5].value
    ) {
      createComplex({
        //   id: uuidv4(),
        complexName: inputs[0].value,
        complexAddress: inputs[1].value,
        province: inputs[2].value,
        city: inputs[3].value,
        district: inputs[4].value,
        building: inputs[5].value,
      });
      Swal.fire({
        title: "Success",
        text: "Complex has been created",
        icon: "success",
        confirmButtonText: "OK",
      });
      navigate("/complex");
      e.preventDefault();

      setInputs([
        {
          id: 0,
          name: "complexName",
          type: "text",
          placeholder: "Complex Name",
          value: "",
          required: true,
        },
        {
          id: 1,
          name: "complexAddress",
          type: "text",
          placeholder: "Complex Address",
          value: "",
          required: true,
        },
        {
          id: 2,
          name: "province",
          type: "select",
          placeholder: "Province",
          // options: city_name,
          options: province,
          value: "",
          required: true,
        },
        {
          id: 3,
          name: "city",
          type: "select",
          placeholder: "City",
          // options: city_name,
          options: city,

          value: "",
          required: true,
        },
        {
          id: 4,
          name: "district",
          type: "select",
          placeholder: "District",
          options: district,
          value: "",
          required: true,
        },
        {
          id: 5,
          name: "building",
          type: "number",
          placeholder: "Building",
          value: "",
          required: true,
        },
      ]);
      // handleClose();
    } else {
      setMsg("Please fill out all fields");
    }
  };

  const _handleClose = () => {
    handleClose();
    setInputs([
      {
        id: 0,
        name: "complexName",
        type: "text",
        placeholder: "Complex Name",
        value: "",
        required: true,
      },
      {
        id: 1,
        name: "complexAddress",
        type: "text",
        placeholder: "Complex Address",
        value: "",
        required: true,
      },
      {
        id: 2,
        name: "province",
        type: "select",
        placeholder: "Province",
        // options: city_name,
        options: province,
        value: "",
        required: true,
      },
      {
        id: 3,
        name: "city",
        type: "select",
        placeholder: "City",
        // options: city_name,
        options: city,

        value: "",
        required: true,
      },
      {
        id: 4,
        name: "district",
        type: "select",
        placeholder: "District",
        options: district,
        value: "",
        required: true,
      },
      {
        id: 5,
        name: "building",
        type: "number",
        placeholder: "Building",
        value: "",
        required: true,
      },
    ]);
  };

  const getProvinces = async () => {
    try {
      await getProvince().then((response) => {
        setProvince(response);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const getCities = async (provinceId) => {
  //   try {
  //     await getCity(provinceId).then((response) => {
  //       setCity(response);
  //       console.log(response);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  //get city by province
  const getCities = async (id) => {
    console.log(id);
    try {
      await getCity(id).then((response) => {
        setCity(response);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // const getCities = async(id) => {
  //   try {
  //     await getCity(id).then((response) => {
  //       setCity(response);
  //       console.log(response);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const getDistricts = async () => {
    try {
      await getDistrict().then((response) => {
        setDistrict(response);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //  const getDistricts = async () => {
  //    try {
  //      await getDistrict().then((response) => {
  //        setDistrict(response);
  //      });
  //    } catch (error) {
  //      console.log(error);
  //    }
  //  };

  useEffect(() => {
    const getAllCity = async () => {
      const allCity = await getCities();
      if (allCity) {
        setCity(allCity);
      }
    };
    getAllCity();

    // const getAllProvince = async () => {
    //   const allProvince = await getProvinces();
    //   if (allProvince) {
    //     setProvince(allProvince);
    //   }
    // };
    // getAllProvince();
  }, []);

  useEffect(() => {
    const getAllProvince = async () => {
      const allProvince = await getProvinces();
      if (allProvince) {
        setProvince(allProvince);
      }
    };
    getAllProvince();
  }, []);

  if (!showModal) return null;

  return (
    <>
      <div
        onSubmit={_handleCreateComplex}
        className="fixed flex-col gap-10 inset-0 bg-primary-black bg-opacity-30 backdrop-blur-md flex justify-center items-center"
      >
        <FormWrapModal>
          <h3 className="text-2xl text-center font-bold">Create Complex</h3>
          <p className="has-text-centered text-error-red">{msg}</p>
          {inputs.map((input, inputIdx) =>
            input.type !== "select" ? (
              <>
                <FormInput
                  key={inputIdx}
                  {...input}
                  value={input.value}
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                />
              </>
            ) : (
              <>
                <SelectWrap
                  type={input.type}
                  onChange={(e) => _handleChange(e.target.value, inputIdx)}
                >
                  <option value="">{input.placeholder}</option>
                  {/* {input.options.map((option, optionIdx) => (
                          <option key={optionIdx} value={option}>
                            {option}
                          </option>
                        ))} */}
                  {input.name === "province"
                    ? province.map((option, optionIdx) => (
                        <option
                          key={optionIdx}
                          value={option.id}
                          onChange={() => getCities(option.id)}
                        >
                          {option.name}
                        </option>
                      ))
                    : input.name === "city"
                    ? city.map((option, optionIdx) => (
                        <option
                          key={optionIdx}
                          value={option.id}
                          onChange={() => getDistricts(option)}
                        >
                          {option.name}
                        </option>
                      ))
                    : district.map((option, optionIdx) => (
                        <option key={optionIdx} value={option.id}>
                          {option.name}
                        </option>
                      ))}
                </SelectWrap>
              </>
            )
          )}

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
              onClick={_handleCreateComplex}
            >
              Submit
            </Button>
          </div>
        </FormWrapModal>
      </div>
    </>
  );
}
