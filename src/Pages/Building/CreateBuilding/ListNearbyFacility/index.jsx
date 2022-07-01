import React from "react";
import ButtonIconDelete from "../../../../Components/ButtonIconDelete";
import ButtonIconEdit from "../../../../Components/ButtonIconEdit";

export default function ListNearbyFacility(props) {
  const {nearby} = props;
  return (
    <div className="flex flex-col gap-4 justify-items-start">
      <h4 className="text-lg text-center font-bold">List Nearby facilities</h4>
      <div className="flex gap-24 items-center">
        <div className="flex flex-col">
          <h4>RS Columbia Asia Medan</h4>
          <p className=" text-textColor-blackThin">15 min - 1.5 km</p>
        </div>
        <h5>Hospital</h5>
        <div className="flex gap-4">
          <button>
            <ButtonIconEdit />
          </button>
          <button>
            <ButtonIconDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
