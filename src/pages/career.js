"use client";
import React, { useState, useRef, useEffect  } from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

import { Controller, useForm } from "react-hook-form";
// import { toast } from 'react-toastify';
// import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import LoginModel from "@/components/elements/LoginModel";



import { FormError } from "@/components/form/validationError";
import { careerFormSubmit } from '@/api/formSubmission';

import useError from '@/api/errorShow';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Layout from '@/layout/Layout';
import Banner from '@/layout/Banner';

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
    data.users_permissions_user = showUser.id;
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
        <div>
          <section id="contacts-1" className="pb-50 inner-page-hero contacts-section division">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-9">
                  <div className="section-title text-center mb-80">
                    <h2 className="s-45 w-700">Questions? Let's Talk</h2>
                    <p className="p-lg">Want to learn more about Yonescat, get a quote, or speak with an expert?
                      Let us know what you are looking for and we’ll get back to you right away
                    </p>
                  </div>
                </div>
              </div>
            
              <div className="row justify-content-center">
                <div className="col-md-11 col-lg-10 col-xl-8">
                  <div className="form-holder">
                    <form ref={formRef} name="contactform" className="row contact-form" onSubmit={handleSubmit(onSubmit)}>
                      <input type="hidden" name="website" {...register("website")} />
                      <div className="col-md-12">
                        <div className="form-group">
                          <label forhtml="fullname" className="p-lg">Your Name *</label>
                          {/* <span>Please enter your real name </span> */}
                          <input id="fullname" disabled={isSubmitting} type="text" name="fullname" className="form-control name" placeholder="Your Full Name"
                            {
                              ...register("fullname",{
                                required:{
                                  value:true,
                                  message:"Name is required"
                                },
                                minLength:{
                                  value:4,
                                  message:"Name is too short."
                                }
                              })
                            }
                          />
                          <FormError field={errors.fullname} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label forhtml="email"  className="p-lg">Your Email Address * </label>
                          {/* <span>Please carefully check your email address for accuracy</span> */}
                          <input value={`${showUser !== null ? showUser.email : ""}`}   disabled={isSubmitting} type="text" id="email" name="email" className="form-control email" placeholder="Email address" 
                            {
                              ...register("email", {
                                required: {
                                  value:true,
                                  message:"Email is required"
                                },
                                pattern: {
                                  value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                  message:"Enter valid email."
                                }
                              })
                            }
                          />
                          <FormError field={errors.email} />
                        </div>
                      </div>
                      {/* <div className="col-md-12">
                        <div className="form-group">
                          <label forhtml="phone" className="p-lg">Your Phone Numbar * </label>
                          <input disabled={isSubmitting} id="phone" type="text" name="phone" className="form-control phone_numbar" placeholder=" Phone numbar"
                            {
                              ...register("phone",{
                                required:{
                                  value:true,
                                  message:"Phone Numbar is required"
                                },
                                pattern: {
                                  value: /\d+/,
                                  message: "Phone Numbar is only number value."
                                },
                                minLength:{
                                  value:10,
                                  message:" Phone Name is not valid."
                                }
                              })
                            }
                          />
                          <FormError field={errors.phone} />
                        </div>
                      </div> */}

                      <div className="col-md-12">
                          <div className="form-group">
                              <p className="p-sm input-header">Phone numbar</p>
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                  <Controller
                                      name="phone" control={control}  rules={{ required: 'Phone number is required' }}
                                      render={({ field }) => (
                                          <PhoneInput  {...field} defaultCountry="US" onChange={field.onChange} placeholder="Phone numbar"  />
                                      )}
                                  />  
                              </div>
                          </div>  
                          <FormError field={errors.phone} />
                      </div>

                      <div className="col-md-12">
                        <div className="form-group">
                          <label forhtml="Resume" className="p-lg">File Upload (Resume / CV) * </label>
                          {/* <span>Your OS version, Yonescat version &amp; build, steps you did. Be VERY precise!</span> */}
                          <input disabled={isSubmitting} aria-label="Resume" type="file" id="Resume" name="resume" className="name" accept="application/pdf,application/msword" style={{display:"block",marginTop:"20px"}}
                            {...register('resume', {
                              required: 'A file is required',
                              message:"Phone Numbar is required",
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
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="p-lg">Message </label>
                          {/* <span>Your OS version, Yonescat version &amp; build, steps you did. Be VERY precise!</span> */}
                          <textarea disabled={isSubmitting} className="form-control message" name="message"  maxLength="150" rows={6} placeholder="Enter your message" {...register("message")} />
                        </div>
                      </div>
                      {/* <div className='capchbox'>
                        <LoadCanvasTemplate />
                        <input placeholder='Enter Captcha Code ' id="user_captcha_input" name="captcha_input" className="form-control"  type="text" 
                          {
                            ...register("captcha_input", {
                              required: {
                                value:true,
                                message:"Captcha is required"
                              },
                            })
                          } 
                        />
                      </div> 
                      <FormError field={errors.captcha_input} /> */}

                      <div className='float-left w-100'>
                        { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error" key={errorIndex}> {error.message} </div>) }
                      </div>

                      {isSubmitting === false ? 
                        <div className="col-md-12 mt-15 form-btn text-right mt-10">
                          <button type="submit" disabled={isSubmitting} className="btn btn--theme hover--theme submit">Submit Request</button>
                          </div>
                        :<div className="text-center form-load-bg"><div className="form-loader"></div></div>
                      }
                      
                      <div className="contact-form-notice">
                        <p className="p-sm">We are committed to your privacy. Yonescat uses the information you
                          provide us to contact you about our relevant content, products, and services.
                          You may unsubscribe from these communications at any time. For more information,
                          check out our <Link href="/privacy">Privacy Policy</Link>.
                        </p>
                      </div>
                     
                    </form>
                  </div>
                </div>
              </div>	   
            </div>	   
          </section>	
          <hr className="divider" />
        </div>
        {/* <LoginModel showModal={showModal} closeModal={closeModal} /> */}
      </Layout>
    </>
  )
}