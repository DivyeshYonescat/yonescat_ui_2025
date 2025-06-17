// components/Modal.js
import React, { useState } from "react";
import Modal from "./Modal";
import Terms from "../sections/terms";
import Image from "next/image";


const TermsModel = ({ isOpen, onClose}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-lg p-10 px-5 w-full relative max-w-[950px] max-xl:w-[50%] !max-md:w-[50%]">
        <button className="absolute  text-xl text-gray-600 hover:text-red-600 top-[20px] right-[20px]" onClick={onClose}>
          <Image src={"/images/main/svg/close-svgrepo-com.svg"} width="20" height="20" alt="sadfsd" />
        </button>
        <div className="modelterms  max-h-[400px] w-full overflow-auto">
          <Terms />
        </div>
      </div>  
    </Modal>);
};

export default TermsModel;
