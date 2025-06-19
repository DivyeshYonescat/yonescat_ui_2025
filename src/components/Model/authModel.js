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
      <div className="bg-white rounded-lg p-10 px-5 : w-full relative">
        <div className="flex justify-center items-center mb-[30px]">
          <Button type="button" variant="outline" className={`hover:bg-stone-900 hover:text-stone-100 bg-transparent text-stone-900 border-stone-900 px-10  mx-[15px] max-sm:mx-[5px] font-bold py-5 border-2 ${type  === 'login' ? "active" : ""}` }  onClick={() => setType('login')} > Login</Button>
          <Button type="button" variant="outline" className={`hover:bg-stone-900 hover:text-stone-100 bg-transparent text-stone-900 border-stone-900 px-10  mx-[15px] max-sm:mx-[5px] font-bold py-5 border-2 ${type  === 'register' ? "active" : ""}` }  onClick={() => setType('register')} > Register</Button>
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