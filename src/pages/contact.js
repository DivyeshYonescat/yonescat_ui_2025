"use client";
import React, { useState, useRef, useEffect  } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';

import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";


import Layout from "@/layout/Layout";
import { FormError } from "@/components/form/validationError";
import { contactUsForm } from '@/api/formSubmission';
import useError from '@/api/errorShow';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { Loader2 } from 'lucide-react';
import Banner from '@/layout/Banner';
import ContactLeft from '@/components/contactLeft/contactLeft';

export default function Home() {
  const pageUrl = usePathname();

  useEffect(() => {
    //loadCaptchaEnginge(6);
  },[]);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { error, showError, clearError } = useError();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Use For Form reset
  const formRef = useRef(null);
  //After api Respons data and loader
  const [result, setResult] = useState(null);

   const onSubmit = async(data) => {

    // const userCaptchaValue = data.captcha_input;
    // if (validateCaptcha(userCaptchaValue)) {} else {
    //   showError([{message:"Invalid Captcha"}]); return
    // }

    //if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') { setShowModal(true);  return;}

    if((data.website).toString().trim() != ""){ return; }
    //Semd data  to server ajax
    delete data.website;
    //delete data.captcha_input;
    
    const fullname = data.name.replace(/\b\w/g, (char) => char.toUpperCase());
    //data.users_permissions_user = showUser.id;
    data.name = fullname;
    clearError();
    setIsSubmitting(true);
    const formData = await contactUsForm(data);
    if(formData.success){
      setIsSubmitting(false);
      setResult(formData.data);
      formRef.current.reset();
    }else{
      setIsSubmitting(false);
      showError(formData.errors.errorCollaction);
    }
  }
  return (<>
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
                    <Input type="text" disabled={isSubmitting} name="name" className="border border-black" placeholder="John Doe"
                    {...register("name",{
                            required:{ value:true, message:"Name is required" },
                            minLength:{ value:4, message:"Name is too short." }
                        })}
                    />
                    <FormError field={errors.name} />
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
                <div className="form-group ">
                  <Label htmlFor="message">Explain your question in details</Label>
                  <Textarea disabled={isSubmitting} name="description" rows={6} placeholder="I have a problem with..." 
                    { ...register("description", 
                      { minLength:{ value:30, message:"Description is too short. Describe in min 30 charactors" }
                    })}
                  />
                  <FormError field={errors.description} />
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
    </Layout>  
  </>);
}