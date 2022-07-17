import React from "react";
import ButtonIconDelete from "../ButtonIconDelete";

export default function ListRoomItem(props) {
  const { roomItem } = props;
  return (
    <div className="w-full flex flex-col gap-4 justify-items-start">
      <h4 className="text-lg font-bold">List Room Item</h4>
      <div className="w-2/5 bg-secondary-white2 flex flex-col">
        <div className="flex items-center justify-center gap-32 p-4 w-full">
            <h4>AC</h4>
          <h5>1</h5>
            <button>
              <ButtonIconDelete />
            </button>
          </div>
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
