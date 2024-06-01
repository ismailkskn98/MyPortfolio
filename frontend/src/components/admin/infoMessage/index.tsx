import React from "react";

type InfoMessageProps = {
  errorMessage: string;
  successMessage: string;
};

const InfoMessage: React.FC<InfoMessageProps> = ({ errorMessage, successMessage }) => {
  return (
    <>
      {errorMessage.length > 0 && (
        <p className="w-full px-4 py-4 bg-red-500 text-red-900 rounded flex items-center justify-center">
          {errorMessage}
        </p>
      )}
      {successMessage.length > 0 && (
        <p className="w-full px-4 py-4 bg-green-500 text-green-900 rounded flex items-center justify-center">
          {successMessage}
        </p>
      )}
    </>
  );
};

export default InfoMessage;
