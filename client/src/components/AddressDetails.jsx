import React, { useContext } from "react";
import { detailsContext } from "../App";

const AddressDetails = () => {
  const { details, DetailsHandler } = useContext(detailsContext);

  return (
    <div>
      <h1 className="font-semibold text-xl underline mb-2">Address Details</h1>
      <div className="flex flex-wrap">
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            type="text"
            placeholder="Enter Address"
            className=" border-2 border-zinc-400 p-1 rounded w-96 outline-none"
            value={details.address}
            onChange={(event) => DetailsHandler(event, "address")}
          />
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="state">State</label>
          <select
            id="state"
            className=" border-2 border-zinc-400 p-1 rounded w-64 text-zinc-400 outline-none"
            value={details.state}
            onChange={(event) => DetailsHandler(event, "state")}
          >
            <option value="" disabled>
              Enter State
            </option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter city/town/village"
            className=" border-2 border-zinc-400 p-1 rounded w-72 outline-none"
            value={details.city}
            onChange={(event) => DetailsHandler(event, "city")}
          />
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            id="country"
            placeholder="India"
            className=" border-2 border-zinc-400 p-1 rounded w-72 outline-none"
            value={details.country}
            onChange={(event) => DetailsHandler(event, "country")}
          />
        </div>
        <div className="py-2 space-x-4 flex-auto">
          <label htmlFor="pin">Pincode</label>
          <input
            type="number"
            id="pin"
            placeholder="Enter pincode"
            className=" border-2 border-zinc-400 p-1 rounded w-52 outline-none"
            value={details.pincode}
            onChange={(event) => DetailsHandler(event, "pincode")}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressDetails;
