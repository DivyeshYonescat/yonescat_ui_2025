"use client";
import { useState } from "react";
import Modal from "@/components/Model/Modal";
import { Button } from "../ui/button";
import Login from "../auth/login";
import Signup from "../auth/signup";

export default function AuthModel() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [type, setType] = useState("login")
  return(<>
    <Modal isOpen={isModalOpen} auth={true}>
      <div className="bg-white rounded-lg p-10 px-5 w-full relative my-2.5">
        <div className="flex justify-center items-center mb-[30px]">
          <Button type="button" variant="outline" className={`text-deepsea hover:bg-deepsea hover:text-white px-10  mx-[15px] max-sm:mx-[5px] font-bold py-5 border-2 ${type  === 'login' && "bg-deepsea text-white"}` }  onClick={() => setType('login')} > Login</Button>
          <Button type="button" variant="outline" className={`text-deepsea hover:bg-deepsea hover:text-white px-10  mx-[15px] max-sm:mx-[5px] font-bold py-5 border-2 ${type  === 'register' && "bg-deepsea text-white"}` }  onClick={() => setType('register')} > Register</Button>
        </div>
        <div className='flex flex-col justify-center  max-md:order-2 max-md:mt-[50px] max-sm:mt-[25px] '> 
          <div className="max-h-[70vh] min-w-[500px] w-full max-sm:min-w-[280px] overflow-auto auth-form ">
          {type === 'login' && <Login /> }
          {type === 'register' && <Signup /> }
          </div>
        </div>
      </div>
    </Modal>
  </>)
}