import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  getComplex,
  createBuilding,
  createNearby,
  getCategoryNearby,
} from "../../API/ApiFetch";

import FormInput from "../FormInput";
import SelectWrap from "../SelectWrap";
import FormWrap from "../FormWrap";
import Button from "../Button";
import ListNearbyFacility from "../ListNearbyFacility";

export default function FormNearbyFacilities(props) {
  const [msg, setMsg] = useState("");

  const [nearby, setNearby] = useState({
    id: "",
    facility: "",
    category: "",
    distance: "",
    time: "",
  });
  console.log(nearby);
  const [categoryNearby, setCategoryNearby] = useState([]);
  console.log(categoryNearby);

  const [inputNearby, setInputNearby] = useState([
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
      name: "category",
      type: "select",
      placeholder: "Category",
      options: ["Hospital", "Bank", "Mall"],
      value: "",
      // required: true,
    },
    {
      id: 2,
      name: "distance",
      type: "number",
      placeholder: "Distance km",
      value: "",
      required: true,
    },
    {
      id: 3,
      name: "time",
      type: "time",
      placeholder: "Time",
      value: "",
      // required: true,
    },
  ]);

  const _handleChangeNearby = (value, index) => {
    setInputNearby(
      inputNearby.map((input) => {
        if (input.id === index) {
          return {
            ...input,
            value,
          };
        }
        return input;
      })
    );
    setNearby({
      ...nearby,
      [inputNearby[index].name]: value,
    });
  };

  const _handleCreateNearby = (e) => {
    if (
      inputNearby[0].value &&
      inputNearby[1].value &&
      inputNearby[2].value &&
      inputNearby[3].value
    ) {
      createNearby({
        // building_id: data.id,
        name: inputNearby[0].value,
        category: inputNearby[1].value,
        description: inputNearby[2].value,
        time: inputNearby[3].value,
      });

      e.preventDefault();

      setInputNearby([
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
          name: "category",
          type: "select",
          placeholder: "Category",
          options: ["Hospital", "Bank", "Mall"],
          value: "",
          // required: true,
        },
        {
          id: 2,
          name: "distance",
          type: "text",
          placeholder: "Distance",
          value: "",
          required: true,
        },
        {
          id: 3,
          name: "time",
          type: "time",
          placeholder: "Time",
          value: "",
          // required: true,
        },
      ]);
    } else {
      setMsg("Please fill out all fields");
    }
  };

  //get category facility
  const getAllCategory = async () => {
    try {
      await getCategoryNearby().then((response) => {
        setCategoryNearby(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getAllCategories = async () => {
      const allCategory = await getAllCategory();
      if (allCategory) {
        setCategoryNearby(allCategory);
        console.log(allCategory);
      }
    };
    getAllCategories();
  }, []);

  return (
    <div>
      <h4 className="text-lg text-left font-bold mb-4">Nearby facilities</h4>
      <div className="grid grid-cols-3 gap-4 justify-items-start">
        {inputNearby.map((inputNearby, inputNearbyIdx) =>
          inputNearby.name === "facility" ? (
            <>
              <FormInput
                className="w-full col-start-1 col-end-3"
                key={inputNearbyIdx}
                {...inputNearby}
                value={inputNearby.value}
                type={inputNearby.type}
                onChange={(e) =>
                  _handleChangeNearby(e.target.value, inputNearbyIdx)
                }
              />
            </>
          ) : inputNearby.type === "select" ? (
            <>
              <SelectWrap
                key={inputNearbyIdx}
                type={inputNearby.type}
                onChange={(e) =>
                  _handleChangeNearby(e.target.value, inputNearbyIdx)
                }
                value={inputNearby.value}
              >
                <option value="">Category</option>
                {categoryNearby.map((categoryNearby, categoryNearbyIdx) => (
                  <option key={categoryNearbyIdx} value={categoryNearby.id}>
                    {categoryNearby.category_name}
                  </option>
                ))}
              </SelectWrap>
            </>
          ) : (
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
          )
        )}
        <Button
          className="bg-primary-gray text-primary-white font-bold uppercase text-sm px-6 py-3 rounded shadow mr-1 mb-1"
          type="button"
          onClick={_handleCreateNearby}
        >
          Add Nearby Facility
        </Button>
      </div>
    </div>
  );
}
