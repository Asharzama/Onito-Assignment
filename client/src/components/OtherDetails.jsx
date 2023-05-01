import React, { useContext } from "react";
import { detailsContext } from "../App";

const OtherDetails = () => {
  const { details, DetailsHandler } = useContext(detailsContext);

  return (
    <div>
      <h1 className="font-semibold text-xl underline mb-2">Other Details</h1>
      <div className="flex flex-wrap">
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            id="occupation"
            className="border-2 border-zinc-400 p-1 rounded w-52 outline-none"
            placeholder="Enter Occupation"
            value={details.occupation}
            onChange={(event) => DetailsHandler(event, "occupation")}
          />
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="Religion">Religion</label>
          <select
            id="Religion"
            className="border-2 border-zinc-400 p-1 rounded w-52 outline-none text-zinc-400"
            value={details.religion}
            onChange={(event) => DetailsHandler(event, "religion")}
          >
            <option value="" disabled>
              Enter Religion
            </option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Jain">Jain</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="Marital Status">Marital Status</label>
          <select
            id="Marital Status"
            className="border-2 border-zinc-400 p-1 rounded w-52 outline-none text-zinc-400"
            value={details.status}
            onChange={(event) => DetailsHandler(event, "status")}
          >
            <option value="" disabled>
              Enter Marital Status
            </option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="Blood Group">Blood Group</label>
          <select
            id="Blood Group"
            className="border-2 border-zinc-400 p-1 rounded w-32 outline-none text-zinc-400"
            value={details.blood}
            onChange={(event) => DetailsHandler(event, "blood")}
          >
            <option value="" disabled>
              Group
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="AB">AB</option>
            <option value="O">O</option>
          </select>
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="Nationality">Nationality</label>
          <input
            type="text"
            id="Nationality"
            className="border-2 border-zinc-400 p-1 rounded w-52 outline-none"
            placeholder="India"
            value={details.nationality}
            onChange={(event) => DetailsHandler(event, "nationality")}
          />
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
