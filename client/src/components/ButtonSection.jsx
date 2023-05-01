import React, { useContext } from "react";
import { detailsContext } from "../App";
import axios from "axios";

const ButtonSection = () => {
  const {
    validationSchema,
    details,
    setDetailsError,
    setIdError,
    setDetails,
    InitialState,
    idError,
  } = useContext(detailsContext);
  const SubmitHandler = () => {
    IdValidity();
    setTimeout(() => {
      !idError &&
        validationSchema
          .validate(details, { abortEarly: false })
          .then(() => {
            axios
              .post("http://localhost:5000/details", details)
              .then((response) => {
                console.log("uploaded successfully");
                CancelHandler();
              })
              .catch((error) => console.log(error));
          })
          .catch((err) => {
            const errors = {};

            err.inner.forEach((error) => {
              errors[error.path] = error.message;
            });
            setDetailsError(errors);
          });
    }, 100);
  };

  const IdValidity = () => {
    if (details.govtIdType === "Aadhar") {
      /^[0-9]{12}$/.test(details.govtIdNumber)
        ? setIdError(false)
        : setIdError(true);
    } else {
      /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(details.govtIdNumber)
        ? setIdError(false)
        : setIdError(true);
    }
  };

  const CancelHandler = () => {
    setDetails(InitialState);
    setDetailsError({});
    setIdError(false);
  };
  return (
    <div>
      <div className="flex justify-end mt-4 space-x-6">
        <button
          className="uppercase hover:text-white hover:bg-red-400 duration-500 text-red-400 border-2 border-red-300 px-5 py-3 font-medium rounded"
          onClick={CancelHandler}
        >
          cancel
        </button>
        <button
          className="uppercase hover:text-green-700 hover:bg-white duration-500 text-white bg-green-700 border-2 border-green-700 px-5 py-3 font-medium rounded"
          onClick={SubmitHandler}
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default ButtonSection;
