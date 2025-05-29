import Link from "next/link"
import React, { useState, useRef  } from 'react';
import { useRouter } from "next/router";

import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "@/components/ui/input-otp"

import { Controller, useForm } from "react-hook-form";
import { FormError } from "@/components/form/validationError";
import { userSignupForm, userSignupOtpForm } from '@/api/formSubmission';
import useError from '@/api/errorShow';

// Select Phone Number with contry
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import TermsModel from "../Model/TermsModel";
import PrivacyModel from "../Model/PrivacyModel";




export default function Signup(props) {
    // Use For Form reset
    const formRef = useRef(null);
    const otpref = useRef(null);
    const router = useRouter();

    const {control, register, handleSubmit, watch, formState: { errors } } = useForm();

    // Watch the password field to compare with confirm password
    const password = watch('password');

    const { error, showError, clearError } = useError();
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isShowMessage, setIsShowMessage] = useState(null);

    //changes user role
    const [check, setCheck] = useState(false);
    //otp varification
    const [otpbox, setOtpbox] = useState(false);
    //After api Respons data and loader
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);

    //Model
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // form submit for user signup
    const onSubmit = async(data) => {
        if((data.website).toString().trim() != ""){ return; }
        //Semd data  to server ajax
        delete data.website;
        delete data.otp;
        delete data.acceptTerms;
        delete data.confirmPassword;
        // setLoading(true);
        clearError();
        // const id = toast.loading("Please wait...")
        setIsSubmitting(true);
        // setLoading(true);
        
        const formData = await userSignupForm(data);
        if(formData.success){
            // setLoading(false);
            setIsSubmitting(false);
            setOtpbox(true);
            formRef.current.reset();
            // toast.update(id, { render: "Thank you for register", type: "success", isLoading: false, autoClose: 1000 });
        }else{
            setIsSubmitting(false);
            // setLoading(false);
            showError([{"message":formData.errors.message}]);
            // toast.update(id, { render: "Something is wrong", type: "error", isLoading: false, autoClose: 1000 });
        }
    }

    //for submit for OTP
    const onVarifiy = async(data) => {
        if((data.website).toString().trim() != ""){ return; }
        const otp = {"otp":data.otp,'email':data.email}
        clearError();
        // const id = toast.loading("Please wait...")
        setIsSubmitting(true);
        // setLoading(true);
        
        const formData = await userSignupOtpForm(otp);
        if(formData.success){
            
            setResult(formData.data);
            setIsShowMessage("Thank you for register");
            // Store the JWT token securely
            localStorage.setItem('token', formData.data.jwt);
            // Optionally, store user data in localStorage
            localStorage.setItem('user', JSON.stringify(formData.data.user));
            if(props.type === "model"){
                props.close();
            }else{
                setTimeout(() => { setIsSubmitting(false); router.replace('/');}, 3000);
            }
        }else{
            setIsSubmitting(false);
            //setLoading(false);
            showError([{"message":formData.errors.message}]);
            //toast.update(id, { render: "Something is wrong", type: "error", isLoading: false, autoClose: 1000 });
        }
    }

    return (
        <>
            <div className="block w-full px-[30px_40px] max-lg:px-[10px_30px] max-sm:px-0">
                {/* TITLE */}
                {otpbox === false ? <>
                
                    <h3 className="text-center pb-[15px]">Create Account</h3>
                    {/* SIGN UP FORM */}
                
                    <form  ref={formRef} name="signupform" className='m-auto max-w-[500px]' onSubmit={handleSubmit(onSubmit)}>
                        {/* <div className="items-top flex justify-start space-x-2 mb-[10px]">
                            <Checkbox id="merchant" onCheckedChange={(value) => setCheck(!!value)} />
                            <div className="grid gap-1.5 leading-none" onCheckedChange={(value) => setCheck(!!value)}>
                                <label onCheckedChange={(value) => setCheck(!!value)} htmlFor="merchant" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" > Register as merchant </label>
                            </div>
                        </div> */}

                        <label htmlFor="Toggle4" className="inline-flex items-center p-1 mb-[15px] cursor-pointer bg-gray-700 rounded-md text-gray-100 ">
                            <input id="Toggle4" type="checkbox" className="hidden peer" />
                            <span className="px-3 py-1 bg-gray-400 peer-checked:bg-gray-700 rounded-sm" onClick={() => setCheck(false)}>User</span>
                            <span className="px-3 py-1 bg-gray-700 peer-checked:bg-gray-400 rounded-sm" onClick={() => setCheck(true)}>Merchant</span>
                        </label>

                        {check ? <> 
                            <div className="form-input">
                                <div className="form-group ">
                                    <Label className="">First name </Label>
                                    <Input type="text" disabled={isSubmitting} name="name" className="border border-black" placeholder="John Doe"
                                    {...register("firstname",{
                                            required:{ value:true, message:"First name is required" },
                                            minLength:{ value:4, message:"First name is too short." }
                                        })}
                                    />
                                <FormError field={errors.firstname} />
                                </div>
                                <div className="form-group ">
                                    <Label className="">Last name </Label>
                                    <Input type="text" disabled={isSubmitting} name="lastname" className="border border-black" placeholder="John Doe"
                                    {...register("lastname",{
                                            required:{ value:true, message:"Last name is required" },
                                            minLength:{ value:4, message:"Last name is too short." }
                                        })}
                                    />
                                <FormError field={errors.lastname} />
                                </div>
                            </div>    

                            <div className="form-group ">
                                <Label className="">Business name </Label>
                                <Input disabled={isSubmitting} type="hidden" name="role" value={3} {...register("role")} />
                                <Input type="text" disabled={isSubmitting} name="business_name" placeholder="Business name" className="border border-black"
                                {...register("business_name",{
                                        required:{ value:true, message:"Business name is required" },
                                        minLength:{ value:4, message:"Business name is too short." }
                                    })}
                                />
                            <FormError field={errors.business_name} />
                            </div> 

                            <div className="form-group ">
                                <Label className="">Phone numbar</Label>
                                <div className="flex items-center w-full">
                                    <Controller name="phone" control={control}  rules={{ required: 'Phone number is required' }}
                                        render={({ field }) => ( <PhoneInput className="w-full"  {...field} defaultCountry="US" onChange={field.onChange} placeholder="Phone numbar"  /> )}
                                    />  
                                </div> 
                                <FormError field={errors.phone} />   
                            </div>
                        </> :""}

                        {!check ? <>
                            <div className="form-group ">
                                <Label className="">User name </Label>
                                <Input type="text" disabled={isSubmitting} name="username" className="border border-black" placeholder="John Doe"
                                {...register("username",{
                                        required:{ value:true, message:"Username is required" },
                                        minLength:{ value:4, message:"Username is too short." }
                                    })}
                                />
                                <input type="hidden" name="website" {...register("website")} />
                            <FormError field={errors.username} />
                            </div>
                        </> :""}

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

                        <div className="form-group ">
                            <Label className=""> Password </Label>
                            <div className="passowrd-input relative">
                                <span onClick={()=>{ setIsShowPassword((prev) => !prev);}} className={`absolute right-[10px] top-[15px]  ${isShowPassword ? "active" : ""}`} ><span className="flaticon-visibility eye-pass" /></span>

                                <Input disabled={isSubmitting} type={`${isShowPassword ? "text" : "password"}`} name="password" placeholder="Min 8 characters" className="border border-black"
                                    {...register("password",{
                                            required:{ value:true, message:"Password is required"},
                                            minLength:{ value:8, message:"Minimum password length 8 characters." }
                                    })}
                                />
                            </div>
                            <FormError field={errors.password} />
                        </div>

                        <div className="form-group ">
                            <Label className=""> Confirm Password </Label>
                            <div className="passowrd-input relative">
                                <span onClick={()=>{ setIsShowPassword((prev) => !prev);}} className={`absolute right-[10px] top-[15px]  ${isShowPassword ? "active" : ""}`} ><span className="flaticon-visibility eye-pass" /></span>

                                <Input disabled={isSubmitting} type={`${isShowPassword ? "text" : "password"}`} name="confirmPassword" placeholder="Min 8 characters" className="border border-black"
                                    {...register('confirmPassword', {
                                        required: 'Please confirm your password',
                                        validate: (value) =>
                                        value === password || 'Passwords do not match',
                                    })}
                                />
                            </div>
                            <FormError field={errors.confirmPassword} />
                        </div>
                        {/* Checkbox */}
                        <div className="items-top flex justify-start space-x-2 mb-[10px]">
                            <Checkbox id="acceptTerms" className={"border-black"} 
                                {...register('acceptTerms',  { required: 'You must accept the terms and conditions' })} 
                            />
                            <div className="grid gap-1.5 leading-none">
                                <label  htmlFor="acceptTerms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" >
                                    you agree to our <button className="termurl" type="button" onClick={openModal}>Terms</button> and that you have read our <button className="termurl" type="button" onClick={openModal}>Privacy Policy</button>
                                </label>
                            </div>
                            
                        </div>
                        <FormError field={errors.acceptTerms} />
                        <TermsModel isOpen={isModalOpen} onClose={closeModal} />
                        <PrivacyModel isOpen={isModalOpen} onClose={closeModal} />
                    
                        <div className='float-left w-full mb-[10px]'>
                            { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-red-700 mt-[10px]" key={errorIndex}> {error.message} </div>) }
                        </div>
                        {/* Form Submit Button */}
                        
                        {isSubmitting ? 
                            <Button disabled> <Loader2 className="animate-spin" /> Please wait </Button>
                            : <> <Button type="submit" className="px-10 py-5" disabled={isSubmitting} >Create Account</Button>
                        </> }
                    </form>	{/* END SIGN UP FORM */}
                </> : <>
                <div className="">
                    <h3 className="text-center pb-[15px]">Send OTP in yout Email </h3>
                    {isShowMessage !== null?  <h2 className="text-center green-color">Thank you for register</h2> :""}
                    <form ref={otpref} name="signupform" className="row sign-up-form m-auto max-w-[300px]" onSubmit={handleSubmit(onVarifiy)}>
                        <div className="form-group  ">
                            <Label className=""> OTP </Label>
                            <Controller name="otp" control={control}
                                rules={{ required: "OTP is required", minLength: { value: 6, message: "OTP must be 6 digits", },}}
                                render={({ field }) => (
                                <InputOTP maxLength={6} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} /> <InputOTPSlot index={1} /> <InputOTPSlot index={2} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={3} /> <InputOTPSlot index={4} /> <InputOTPSlot index={5} />
                                    </InputOTPGroup>
                                </InputOTP>
                                )}
                            />
                            <input type="hidden" name="website" {...register("website")} /> 
                        </div>
                        <FormError field={errors.otp} />
                        <div className='float-left w-full mb-[10px]'>
                            { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-red-700 mt-[10px]" key={errorIndex}> {error.message} </div>) }
                        </div>
                        {/* Form Submit Button */}
                        <div className="">
                        {isSubmitting ? <Button disabled> <Loader2 className="animate-spin" /> Please wait </Button>
                            : <> <Button type="submit" disabled={isSubmitting} className="px-10 py-5">Submit</Button>
                        </> }
                        </div>
                        <div className="backButotn text-center mt-5" >
                            <Button type="button" variant="secondary" disabled={isSubmitting}  onClick={()=>{setOtpbox(false)}}> <b>Back To Signup</b> </Button>
                        </div>
                    </form>
                </div>
                </>}
            </div>
        </>
    )
}