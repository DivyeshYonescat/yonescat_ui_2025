import React, { useState, useRef, useEffect  } from 'react';
import { useRouter } from "next/router";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

import { userResetPasswordForm } from '@/api/formSubmission';
import { FormError } from '@/components/form/validationError';
import useError from '@/api/errorShow';

export default function ResetPasswordPage(props) {
    const pageUrl = usePathname();
    const tokenParams = useParams();
    const router = useRouter();
    const searchParams = useSearchParams();
    const id  = searchParams.get('id');
    const tokenId =  id;
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { error, showError, clearError } = useError();
    // Watch the password field to compare it with confirm password
    const password = watch('password');
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowMessage, setIsShowMessage] = useState(null);

    // Use For Form reset
    const formRef = useRef(null);

    //After api Respons data and loader
    const [result, setResult] = useState(null);
    
    const onSubmit = async(data) => {
        if((data.website).toString().trim() != ""){ return; }
        data.token=tokenId;
        //Semd data  to server ajax
        delete data.website;
        clearError();
        setIsSubmitting(true);
        try {
            const response = await userResetPasswordForm(data);
            setIsSubmitting(false);
            setResult(response.data);
            setIsShowMessage("Thank you for login");
            formRef.current.reset();
            setTimeout(() => { router.replace('/auth?type=login');}, 3000);
        } catch (error) {
            setIsSubmitting(false);
            showError([{"message":error.errors.message}]);
        }
        
        // if(formData.success){
        //     setIsSubmitting(false);
        //     setResult(formData.data);
        //     setIsShowMessage("Thank you for login");
        //     formRef.current.reset();
        //     setTimeout(() => { setLoading(false); router.replace('/auth');}, 3000);
        //     //toast.update(id, { render: "Thank you for login", type: "success", isLoading: false, autoClose: 1000 });
        // }else{
        //     setIsSubmitting(false);
        //     setLoading(false);
        //     showError([{"message":formData.errors.message}]);
        //     //toast.update(id, { render: "Something is wrong", type: "error", isLoading: false, autoClose: 1000 });
        // }
    }

    return (<>
        <div  className="pb-[80px] min-h-screen pt-[80px] w-full bg-no-repeat bg-[100%] bg-cover flex justify-center items-center" style={{background:"url(/images/login.webp)"}}>
            <div className="block w-full max-lg:px-[10px_30px] max-sm:px-0">
                <h3 className="text-center pb-[15px]">Reset Password</h3>
                {isShowMessage !== null &&  <h3 className="text-center">Password is set.</h3>}
                <form ref={formRef} className='m-auto max-w-[500px] px-1.5' name="signinform" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group ">
                        <Label className=""> Password </Label>
                        <div className="passowrd-input relative">
                            <span onClick={()=>{ setIsShowPassword((prev) => !prev);}} className={`absolute right-[10px] top-[15px]  ${isShowPassword ? "active" : ""}`} ><span className="flaticon-visibility eye-pass" /></span>

                            <Input disabled={isSubmitting} type={`${isShowPassword ? "text" : "password"}`} name="password" placeholder="Min 8 characters"
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
                            <Input disabled={isSubmitting} type={`${isShowPassword ? "text" : "password"}`} name="confirmPassword" placeholder="Min 8 characters" 
                                {...register('confirmPassword', {
                                    required: 'Please confirm your password',
                                    validate: (value) =>
                                    value === password || 'Passwords do not match',
                                })}
                            />
                        </div>
                        <FormError field={errors.confirmPassword} />
                    </div>
                    <Input type="hidden" name="website" {...register("website")} />
                    <div className='flo'>
                        { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-red-700 mb-[10px]" key={errorIndex}> {error.message} </div>) }
                    </div>
                    <Button disabled={isSubmitting} type="submit" className="w-full px-10 py-5">
                        {isSubmitting ? <> <Loader2 className="animate-spin" /> Please wait  </> : "Submit" }  
                    </Button>

                </form>
            </div>
        </div>    
        
        </>
    )
}