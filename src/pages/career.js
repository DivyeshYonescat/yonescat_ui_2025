"use client";
import React, { useState, useRef, useEffect  } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import Layout from '@/layout/Layout';
import Banner from '@/layout/Banner';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import ContactLeft from '@/components/contactLeft/contactLeft';


import { Controller, useForm } from "react-hook-form";
// import { toast } from 'react-toastify';
// import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import LoginModel from "@/components/elements/LoginModel";

import { FormError } from "@/components/form/validationError";
import { careerFormSubmit } from '@/api/formSubmission';
import useError from '@/api/errorShow';
import Image from 'next/image';




export default function Home() {

  const pageUrl = usePathname();
  const formRef = useRef(null);

  const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const { error, showError, clearError } = useError();
  const [isSubmitting, setIsSubmitting] = useState(false);

  //After api Respons data and loader
  const [result, setResult] = useState(null);
  //const [loading, setLoading] = useState(false);

  //Check User Login Model
  // State to control modal visibility
  const [showModal, setShowModal] = useState(false); 
  // Check User login
  const [showUser, setShowUser] = useState(null); 

  // useEffect(() => {
  //   if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') {
  //     setShowModal(true);
  //     setShowUser(null);
  //   }else{
  //     setShowUser(JSON.parse(localStorage.getItem("user")));
  //   }
  //   loadCaptchaEnginge(6);
  // },[]);

  // Function to close the modal
  // const closeModal = () => {
  //   setShowModal(false);
    
  //   if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') {
  //     setShowUser(null);
  //   }else{
  //     setShowUser(JSON.parse(localStorage.getItem("user")));
  //   }
  // };
  

  const onSubmit = async(data) => {
    // const userCaptchaValue = data.captcha_input;
    // if (validateCaptcha(userCaptchaValue)) {} else {
    //   showError([{message:"Invalid Captcha"}]);
    //   return
    // }  

    // if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') { setShowModal(true);  return;}
    if((data.website).toString().trim() != ""){ return; }
    setIsSubmitting(true);
    delete data.website;
    //delete data.captcha_input;
    //setLoading(true);
    //const id = toast.loading("Please wait...")
    
    const file = data.resume;

    const name = data.fullname.replace(/\b\w/g, (char) => char.toUpperCase());
    //data.users_permissions_user = showUser.id;
    data.fullname = name;
    clearError();

    const formData = await careerFormSubmit(data,file);  
    
    if(formData.success){
      setIsSubmitting(false);
      formRef.current.reset();
      //toast.update(id, { render: "Your Resume is Send", type: "success", isLoading: false, autoClose: 1000 });
      setResult(formData.data);    
      //setLoading(false);
    }else{
      setIsSubmitting(false);
      //setLoading(false);
      showError(formData.errors.errorCollaction);
      //toast.update(id, { render: "Somethig is missing", type: "error", isLoading: false, autoClose: 1000 });
    }
  }

  return (
    <>
      <Layout>
        <Banner title={"Questions? Let's Talk"} description={"Want to learn more about Yonescat, get a quote, or speak with an expert? Let us know what you are looking for and we’ll get back to you right away"} />
        <section className="box-main-section mb-[50px]">
          <div className="container">
            <div className="box-inner-section ">
              <div className="box-text-section"> 
                <div className='flex items-center justify-between mb-[30px]'>
                  <h3> Send us a Message </h3>
                  <Image src="/images/contact-icone/send-mail.svg" alt='send_mail' width={50} height={50} />
                </div>
                <form ref={formRef} name="contactform" className="row contact-form" onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" name="website" {...register("website")} />
                  <div className="form-input">
                    <div className="form-group ">
                      <Label className="">Your Name * </Label>
                      <Input type="text" disabled={isSubmitting} name="fullname" className="border border-stone-900" placeholder="John Doe"
                      {...register("fullname",{
                              required:{ value:true, message:"Name is required" },
                              minLength:{ value:4, message:"Name is too short." }
                          })}
                      />
                      <FormError field={errors.fullname} />
                    </div>
                    <div className="form-group ">
                      <Label className=""> Email address </Label>
                      <Input type={"email"} disabled={isSubmitting} name="email" className="" placeholder="example@example.com"
                          {...register("email", {
                              required: { value:true, message:"Email is required" },
                              pattern: { value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,  message:"Enter valid email." }
                          })}
                      />
                      <FormError field={errors.email} />
                    </div>
                  </div>
                  <div className="form-input">
                    <div className="form-group ">
                      <Label className="">Phone numbar</Label>
                      <div className="flex items-center w-full">
                          <Controller name="phone" control={control}  rules={{ required: 'Phone number is required' }}
                              render={({ field }) => ( <PhoneInput className="w-full"  {...field} defaultCountry="US" onChange={field.onChange} placeholder="Phone numbar"  /> )}
                          />  
                      </div> 
                      <FormError field={errors.phone} />   
                    </div>

                    <div className="form-group">
                      <Label className="">File Upload (Resume / CV)</Label>
                      <Input disabled={isSubmitting}  type="file" id="Resume" name="resume" accept="application/pdf,application/msword" 
                        {...register('resume', { required: 'A file is required', 
                            validate: (value) => {
                              const acceptedFormats = ['pdf',"msword"];
                              const fileExtension = value[0]?.name.split('.').pop().toLowerCase();
                              const fileSize = 1*1024*1204;
                              if (!acceptedFormats.includes(fileExtension)) {
                                  return 'Invalid file format. Only PDF and ms word files are allowed.';
                              }

                              if (value[0].size > fileSize) {
                                return 'Invalid file Size. Select lass than 1 MB.';
                              }
                              return true;
                            },
                          })}
                        />
                        <FormError field={errors.resume} />        
                    </div>
                  </div>  

                  <div className="form-group ">
                    <Label htmlFor="message">Message</Label>
                    <Textarea disabled={isSubmitting} name="message" rows={6} placeholder="Enter your message..." maxLength="150" {...register("message")} />
                    <FormError field={errors.message} />
                  </div>

                  {/* <div className="capchbox">
                    <LoadCanvasTemplate />
                    <input placeholder='Enter Captcha Code ' id="user_captcha_input" name="captcha_input"className="form-control"  type="text" 
                    { ...register("captcha_input", { required: { value:true, message:"Captcha is required" },}) }  />
                          
                    <FormError field={errors.captcha_input} />
                  </div>       */}
                  <div className="float-left w-full mb-[10px]">
                    { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-red-700 mt-[10px]" key={errorIndex}> {error.message} </div>) }
                  </div>

                  <p className="mb-[15px]">We are committed to your privacy. Yonescat uses the information you provide us to contact you about our relevant content, products, and services. You may unsubscribe from these communications at any time. For more information, check out our <Link className='underline' href={"/privacy"} >Privacy Policy</Link>.</p>

                  {isSubmitting ? 
                    <Button disabled> <Loader2 className="animate-spin" /> Please wait </Button>
                    : <> <Button type="submit" className="px-10 py-5" disabled={isSubmitting} >Submit Request</Button>
                  </> }
                </form>      
              </div>  
              <ContactLeft/>
            </div>
          </div>
        </section>
        {/* <LoginModel showModal={showModal} closeModal={closeModal} /> */}
      </Layout>
    </>
  )
}