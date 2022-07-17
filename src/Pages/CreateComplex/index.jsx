import React, { useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import {
  getCity,
  getDistrict,
  createComplex,
  getProvince,
} from "../../API/ApiFetch";
import { useNavigate } from "react-router-dom";

import FormInput from "../../Components/FormInput";
import SelectWrap from "../../Components/SelectWrap";
import FormWrap from "../../Components/FormWrap";
import Button from "../../Components/Button";
import Sidebar from "../../Components/Sidebar";
import Navbar from "../../Components/Navbar";
import Swal from "sweetalert2";

export default function CreateComplex() {
  const navigate = useNavigate(); 

  const [data, setData] = useState({
    complexName: "",
    complexAddress: "",
    city: "",
    district: "",
  });

  const [province, setProvince] = useState([]);
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);

  const [msg, setMsg] = useState("");

  const [isEmptyName, setIsEmptyName] = useState(false);
  const [isEmptyAddress, setIsEmptyAddress] = useState(false);
  const [isEmptyProvince, setIsEmptyProvince] = useState(false);
  const [isEmptyCity, setIsEmptyCity] = useState(false);
  const [isEmptyDistrict, setIsEmptyDistrict] = useState(false);

  const [inputs, setInputs] = useState([
    {
      id: 0,
      name: "complexName",
      type: "text",
      placeholder: "Complex Name",
      value: "",
      err: "Complex Name must be filled",
      required: true,
    },
    {
      id: 1,
      name: "complexAddress",
      type: "text",
      placeholder: "Complex Address",
      value: "",
      err: "Complex Address must be filled",
      required: true,
    },
    {
      id: 2,
      name: "province",
      type: "select",
      placeholder: "Province",
      value: "",
      err: "Province must be selected",
      required: true,
    },
    {
      id: 3,
      name: "city",
      type: "select",
      placeholder: "City",
      value: "",
      err: "City must be selected",
      required: true,
    },
    {
      id: 4,
      name: "district",
      type: "select",
      placeholder: "District",
      value: "",
      err: "District must be selected",
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

  const _handleChangeSelect = (value, index) => {
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
      [inputs[index].value]: value,
    });

    if (inputs[index].name === "province") {
      getCities(value);
    }
    if (inputs[index].name === "city") {
      getDistricts(value);
    }
    if (inputs[index].name === "district") {
      inputs[index].value = value;
    }
  };

  const _handleCreateComplex = (e) => {
    if (
      inputs[0].value &&
      inputs[1].value &&
      inputs[2].value &&
      inputs[3].value &&
      inputs[4].value
    ) {
      setIsEmptyName(false);
      setIsEmptyAddress(false);
      setIsEmptyProvince(false);
      setIsEmptyCity(false);
      setIsEmptyDistrict(false);

      createComplex({
        complex_name: inputs[0].value,
        street: inputs[1].value,
        province_id: inputs[2].value,
        city_id: inputs[3].value,
        district_id: inputs[4].value,
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
          err: "Complex Name must be filled",
          required: true,
        },
        {
          id: 1,
          name: "complexAddress",
          type: "text",
          placeholder: "Complex Address",
          value: "",
          err: "Complex Address must be filled",
          required: true,
        },
        {
          id: 2,
          name: "province",
          type: "select",
          placeholder: "Province",
          value: "",
          err: "Province must be selected",
          required: true,
        },
        {
          id: 3,
          name: "city",
          type: "select",
          placeholder: "City",
          value: "",
          err: "City must be selected",
          required: true,
        },
        {
          id: 4,
          name: "district",
          type: "select",
          placeholder: "District",
          value: "",
          err: "District must be selected",
          required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
      setIsEmptyName(true);
      setIsEmptyAddress(true);
      setIsEmptyProvince(true);
      setIsEmptyCity(true);
      setIsEmptyDistrict(true);
    }
  };

  const _handleClose = () => {
    navigate("/complex");
    setInputs([
      {
        id: 0,
        name: "complexName",
        type: "text",
        placeholder: "Complex Name",
        value: "",
        err: "Complex Name must be filled",
        required: true,
      },
      {
        id: 1,
        name: "complexAddress",
        type: "text",
        placeholder: "Complex Address",
        value: "",
        err: "Complex Address must be filled",
        required: true,
      },
      {
        id: 2,
        name: "province",
        type: "select",
        placeholder: "Province",
        value: "",
        err: "Province must be selected",
        required: true,
      },
      {
        id: 3,
        name: "city",
        type: "select",
        placeholder: "City",
        value: "",
        err: "City must be selected",
        required: true,
      },
      {
        id: 4,
        name: "district",
        type: "select",
        placeholder: "District",
        value: "",
        err: "District must be selected",
        required: true,
      },
    ]);
  };

  // get province by api
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

  const [provinceId, setProvinceId] = useState(province);
  console.log(provinceId);
  const [cityId, setCityId] = useState(city);
  console.log(cityId);
  const [districtId, setDistrictId] = useState(district);
  console.log(districtId);

  //get city by province id
  const getCities = async (provinceId) => {
    console.log(provinceId);
    try {
      await getCity(provinceId).then((response) => {
        setCity(response);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  //get district ny city id
  const getDistricts = async (cityId) => {
    console.log(cityId);
    try {
      await getDistrict(cityId).then((response) => {
        setDistrict(response);
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    if (inputs[0].value.match(inputs[0].pattern)) {
      setIsEmptyName(false);
    }
    if (inputs[1].value.match(inputs[1].pattern)) {
      setIsEmptyAddress(false);
    }
    if (inputs[2].value.match(inputs[2].pattern)) {
      setIsEmptyProvince(false);
    }
    if (inputs[3].value.match(inputs[3].pattern)) {
      setIsEmptyCity(false);
    }
    if (inputs[4].value.match(inputs[4].pattern)) {
      setIsEmptyDistrict(false);
    }
  }, [inputs]);

  return (
    <div className=" flex bg-secondary-blue h-full">
      <Sidebar />
      <Navbar />
      <div className="basis-5/6">
        <div className="px-4 py-4 mt-20">
          <div className="flex items-center justify-between mb-6">
            <FormWrap onSubmit={_handleCreateComplex}>
              <h3 className="text-2xl text-center font-bold">Create Complex</h3>
              <p className="has-text-centered text-error-red">{msg}</p>
              {inputs.map((input, inputIdx) =>
                input.type !== "select" ? (
                  <>
                    <FormInput
                      key={inputIdx}
                      className={`${
                        isEmptyName && isEmptyAddress
                        ? "peer-invalid:visible border-primary-red border-2"
                        : "peer-valid:visible border-secondary-softblue border-2"
                      }`}
                      {...input}
                      value={input.value}
                      type={input.type}
                      onChange={(e) => {
                        console.log(e);
                        _handleChange(e.target.value, inputIdx);
                      }}
                    />

                    {input.type !== "select" ? (
                      <div className="w-full my-0 mx-0 text-left px-0 py-0">
                        <p
                          className={`${
                            isEmptyName && isEmptyAddress
                              ? "peer-invalid:visible text-primary-red "
                              : "invisible"
                          }`}
                        >
                          {input.err}
                        </p>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <>
                    <SelectWrap
                      type={input.type}
                      className={`${
                        isEmptyProvince && isEmptyCity && isEmptyDistrict
                          ? "peer-invalid:visible border-primary-red border-2"
                          : "peer-valid:visible border-secondary-softblue border-2"
                      }`}
                      onChange={(e) => {
                        console.log(e.target.value);
                        _handleChangeSelect(e.target.value, inputIdx);
                      }}
                    >
                      <option value="">{input.placeholder}</option>
                      {input.name === "province"
                        ? province.map((province, provinceIdx) => (
                            <option key={provinceIdx} value={province.id}>
                              {province.name}
                            </option>
                          ))
                        : input.name === "city"
                        ? city.map((city, cityIdx) => (
                            <option key={cityIdx} value={city.id}>
                              {city.name}
                            </option>
                          ))
                        : district.map((district, districtIdx) => (
                            <option
                              key={districtIdx}
                              value={district.district_id}
                            >
                              {district.name}
                            </option>
                          ))}
                    </SelectWrap>
                    {input.type === "select" ? (
                      <div className="w-full my-0 mx-0 text-left px-0 py-0">
                        <p
                          className={`${
                            isEmptyProvince && isEmptyCity && isEmptyDistrict
                              ? "peer-invalid:visible text-primary-red "
                              : "invisible"
                          }`}
                        >
                          {input.err}
                        </p>
                      </div>
                    ) : null}
                  </>
                )
              )}

              <div className="w-full flex justify-end">
                <div className="flex w-2/4 items-center gap-4">
                  <Button
                    className="font-bold bg-secondary-softblue text-primary-blue w-1/2 uppercase px-6 py-3 text-sm rounded shadow mr-1 mb-1"
                    type="button"
                    onClick={_handleClose}
                  >
                    Close
                  </Button>
                  <Button
                    className="bg-primary-blue w-1/2 text-primary-white font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
                    type="button"
                    onClick={_handleCreateComplex}
                  >
                    Add Complex
                  </Button>
                </div>
              </div>
            </FormWrap>
          </div>
        </div>
      </div>
    </div>
  );
}
