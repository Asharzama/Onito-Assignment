import React, { useContext } from "react";
import { detailsContext } from "../App";

const PersonalDetails = () => {
  const { details, DetailsHandler,detailsError,idError } = useContext(detailsContext);

  return (
    <div>
      <h1 className="font-semibold text-xl underline mb-2">Personal Details</h1>
      <div className="flex flex-wrap">
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="name">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            className="border-2 border-zinc-400 p-1 rounded w-96 outline-none"
            value={details.name}
            onChange={(event) => DetailsHandler(event, "name")}
          />
          {detailsError.name && <div className="text-red-500">{detailsError.name}</div>}
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="dob">
            Date of Birth or Age<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="dob"
            placeholder="DD/MM/YYYY or Age in Years"
            className="border-2 border-zinc-400 p-1 rounded w-80 outline-none"
            value={details.age}
            onChange={(event) => DetailsHandler(event, "age")}
          />
           {detailsError.age && <div className="text-red-500">{detailsError.age}</div>}
        </div>
        <div className="py-2 space-x-4 flex-auto relative">
          <label htmlFor="sex">
            Sex<span className="text-red-500">*</span>
          </label>
          <select
            id="sex"
            className=" border-2 border-zinc-400 p-1 rounded w-40 outline-none text-zinc-400"
            value={details.sex}
            onChange={(event) => DetailsHandler(event, "sex")}
          >
            <option value="" disabled>
              Enter Sex
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {detailsError.sex && <div className="text-red-500">{detailsError.sex}</div>}
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            id="mobile"
            placeholder="Enter Mobile"
            className=" border-2 border-zinc-400 p-1 rounded w-80 outline-none"
            value={details.mobile}
            onChange={(event) => DetailsHandler(event, "mobile")}
          />
          {detailsError.mobile && <div className="text-red-500">{detailsError.mobile}</div>}
        </div>
        <div className="py-2 space-x-4 flex-auto relative">
          <label htmlFor="govt">Govt Issued ID</label>
          <select
            id="govt"
            className="border-2 border-zinc-400 text-zinc-400 p-1 rounded w-40 outline-none"
            value={details.govtIdType}
            onChange={(event) => DetailsHandler(event, "govtIdType")}
          >
            <option disabled value="">
              ID Type
            </option>
            <option value="Aadhar">Aadhar</option>
            <option value="PAN">PAN</option>
          </select>
          <input
            type="text"
            placeholder="Enter Govt ID"
            className=" border-2 border-zinc-400 p-1 rounded w-[22rem] outline-none"
            value={details.govtIdNumber}
            onChange={(event) => DetailsHandler(event, "govtIdNumber")}
          />
          {idError && <div className="text-red-500">Please enter valid Id</div>}
          
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
