// components/Modal.js
import React from "react";
import Privacy from "../sections/privacy";
import Modal from "./Modal";
import Image from "next/image";


const PrivacyModel = ({ isOpen,onClose, type }) => {
  if (!isOpen) return null;
  
  
  return (<>
    <Modal isOpen={isOpen} onClose={onClose}>
        <div className="bg-white rounded-lg p-10 px-5  w-full relative max-w-[80vw]  overflow-auto">
          <button className="absolute  text-xl text-gray-600 hover:text-red-600 top-[20px] right-[20px]" onClick={onClose}>
            <Image src={"/images/main/svg/close-svgrepo-com.svg"} width="20" height="20"  alt="sadfsd" />
          </button>
          <div className="modelterms  max-h-[80vh] w-full overflow-auto">
            <Privacy />  
          </div>  
        </div>  
    </Modal>
   </>);
};

export default PrivacyModel;
