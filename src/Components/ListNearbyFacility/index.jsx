import React from "react";
import ButtonIconDelete from "../ButtonIconDelete";

export default function ListNearbyFacility(props) {
  const { nearby, _handleDeleteNearby } = props;
  console.log(nearby);
  return (
    <div className="w-full flex flex-col gap-4 justify-items-start mt-4">
      <h4 className="text-lg font-bold">List Nearby facilities</h4>
      <div className="w-3/5 bg-secondary-white2 flex flex-col">
        {nearby?.map((nearby, nearbyIdx) => (
          <div className="flex items-center justify-center gap-32 p-4 w-full">
            <div className="flex flex-col">
              <h4>{nearby.facility_name}</h4>
              <p className=" text-textColor-blackThin">
                {nearby.duation} min - {nearby.distance} km
              </p>
            </div>
            <h5>{nearby.facility_category_id}</h5>
            <button onClick={() => _handleDeleteNearby(nearby.facility_name)}>
              <ButtonIconDelete />
            </button>
          </div>
        ))}
        {/* <div className="flex items-center gap-24 p-4 w-full">
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
        </div> */}
      </div>
    </div>
  );
}
