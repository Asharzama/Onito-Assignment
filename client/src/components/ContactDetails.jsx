import React, { useContext } from "react";
import { detailsContext } from "../App";

const ContactDetails = () => {
  const { details, DetailsHandler, detailsError } = useContext(detailsContext);

  return (
    <div>
      <h1 className="font-semibold text-xl underline mb-2">Contact Details</h1>
      <div className="flex flex-wrap">
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="guardian">Guardian Details</label>
          <select
            className=" border-2 border-zinc-400 text-zinc-400 p-1 rounded w-32 outline-none"
            value={details.guardianLabel}
            onChange={(event) => DetailsHandler(event, "guardianLabel")}
          >
            <option disabled value="">
              Enter Label
            </option>
            <option value="Mr">Mr.</option>
            <option value="Mrs">Mrs.</option>
            <option value="Ms.">Ms.</option>
            <option value="Dr.">Dr.</option>
          </select>
          <input
            type="text"
            id="guardian"
            placeholder="Enter Guardian Name"
            className="border-2 border-zinc-400 p-1 rounded w-72 outline-none"
            value={details.guardianName}
            onChange={(event) => DetailsHandler(event, "guardianName")}
          />
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            className=" border-2 border-zinc-400 p-1 rounded w-72 outline-none"
            value={details.email}
            onChange={(event) => DetailsHandler(event, "email")}
          />
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="emergency">Emergency Contact Number</label>
          <input
            type="number"
            id="emergency"
            placeholder="Enter Emergency No"
            className=" border-2 border-zinc-400 p-1 rounded w-52 outline-none"
            value={details.emergencyContact}
            onChange={(event) => DetailsHandler(event, "emergencyContact")}
          />
          {detailsError.emergencyContact && (
            <div className="text-red-500">{detailsError.emergencyContact}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
