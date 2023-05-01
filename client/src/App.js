import React, { createContext, useState } from "react";
import * as yup from "yup";

import AddressDetails from "./components/AddressDetails";
import ContactDetails from "./components/ContactDetails";
import OtherDetails from "./components/OtherDetails";
import PersonalDetails from "./components/PersonalDetails";
import ButtonSection from "./components/ButtonSection";

export const detailsContext = createContext(null);

function App() {
  const InitialState = {
    name: "",
    age: "",
    sex: "",
    mobile: "",
    govtIdType: "",
    govtIdNumber: "",
    guardianLabel: "",
    guardianName: "",
    email: "",
    emergencyContact: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    status: "",
    blood: "",
    nationality: "",
  };

  const [details, setDetails] = useState(InitialState);
  const [detailsError, setDetailsError] = useState({});
  const [idError, setIdError] = useState(false);

  const DetailsHandler = (event, field) => {
    setDetails({ ...details, [field]: event.target.value });
  };

  let validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    age: yup.string().required("Age is required"),
    sex: yup.string().required("Gender is required"),
    mobile: yup.string().matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
    emergencyContact: yup
      .string()
      .matches(/^[6-9]\d{9}$/, "Invalid emergency contact number"),
  });

  return (
    <div className="p-5 bg-[#f5f5f5]">
      <detailsContext.Provider
        value={{
          details,
          setDetails,
          DetailsHandler,
          validationSchema,
          setDetailsError,
          detailsError,
          idError,
          setIdError,
          InitialState,
        }}
      >
        <PersonalDetails />
        <ContactDetails />
        <AddressDetails />
        <OtherDetails />
        <ButtonSection />
      </detailsContext.Provider>
    </div>
  );
}

export default App;
