"use client"
import Image from 'next/image';
import Link from 'next/link';

import React, { useState, useRef, useEffect } from 'react';

import useError from "@/api/errorShow";

import { useForm } from 'react-hook-form';
import FloatingSVG from './newslaterAnimation';



const NewsLetterSection = () => {
    const formRef = useRef(null);

     // Form validton 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { error, showError, clearError } = useError();

    const [result, setResult] = useState(null);

    const onSubmit = async (data) => {
        clearError();
        // const id = toast.loading("Please wait...")
        const formData = await newslaterForm(data);
        
        if(formData.success){
            // toast.update(id, { render: "Your Resume is Send", type: "success", isLoading: false, autoClose: 1000 });
            setResult(formData.data);    
            formRef.current.reset();
        }else{
            // toast.update(id, { render: "Somethig is missing", type: "error", isLoading: false, autoClose: 1000 });
            showError(formData.errors);
        }
    }

    return (<>
        <section className="section-main bg-[#DFF1FF]">
            <div className="container">
                <div className="newsletter-inner flex flex-row max-sm:flex-col sm:flex-col md:flex-row  justify-between  items-center">
                    <div className="newsletter-text w-[40%] max-sm:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[40%] max-sm:order-2 sm:order-2 md:order-1">
                        <h3 className="">Ready To Get Started? Sign Up Now With Yonescat Is Easy, Fast And Free</h3>
                        <form ref={formRef} name="contactform" className="newsletter-form contact-form" onSubmit={handleSubmit(onSubmit)}>
                           
                            <div className="form-group">
                                <input type="email" name="email" id="email" autoComplete="off" className="form-input mt-[45px] mb-[15px]" placeholder="Your email address"
                                    {...register("email", { required: {value:true, message:"Email is required" },
                                        pattern: { value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:"Enter valid email."  }
                                    })}
                                />
                            </div>
                           
                            <div>
                            { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-start" key={errorIndex}> {error.message} </div>) }
                            </div>
                            <div className="input-group">
                                <span className="input-group-btn">
                                    <button type="submit" className="btn btn--theme hover--theme">Subscribe Now</button>
                                </span>
                            </div>
                        </form>
                    </div>
                    <div className="newsletter-image w-[50%] max-sm:w-[100%] sm:w-[100%] md:w-[50%] lg:w-[50%] max-sm:order-1 sm:order-1 md:order-2 flex flex-col items-end sm:items-center max-sm:mb-7 sm:mb-7">
                        <FloatingSVG />
                    </div>
                </div>
            </div>
        </section>
    
    </>);
};

export default NewsLetterSection;