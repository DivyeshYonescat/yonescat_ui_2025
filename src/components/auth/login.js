import React, { useState, useRef  } from 'react';
import Link from "next/link"
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useError from '@/api/errorShow';
import { FormError } from '../form/validationError';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { userLoginForm } from '@/api/formSubmission';
import { Loader2 } from 'lucide-react';

export default function Login(props) {
     // Use For Form reset
    const formRef = useRef(null);
    const router = useRouter();

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isShowMessage, setIsShowMessage] = useState(null);
    
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { error, showError, clearError } = useError();

    const onSubmit = async(data) => {
        if((data.website).toString().trim() != ""){ return; }
        //Semd data  to server ajax
        delete data.website;
        clearError();
        setIsSubmitting(true);
        
        const formData = await userLoginForm(data);
        if(formData.success){
            setResult(formData.data);
            // Store the JWT token securely
            localStorage.setItem('token', formData.data.jwt);
            // Optionally, store user data in localStorage
            localStorage.setItem('user', JSON.stringify(formData.data.user));

            setIsShowMessage("Thank you for login");
            formRef.current.reset();
            if(props.type === "model"){ props.close();}else{
               setTimeout(() => { setIsSubmitting(false); router.replace('/');}, 3000);
            }

        }else{
            setIsSubmitting(false);
            showError([{"message":formData.errors.message}]);
        }
    }
    return (
        
        <>
            <div className="block w-full px-[30px_40px] max-lg:px-[10px_30px] max-sm:px-0">
               
               <h3 className="text-center pb-[15px]">Log in to Yonescat</h3>
                {isShowMessage !== null &&  <h3 className="text-center">Thank you for login</h3>}
                
                {/* LOGIN FORM */}
                <form ref={formRef} className='m-auto max-w-[500px]' name="signinform" onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-group mb-[20px]">
                        <Label > Email address </Label>
                        <Input type={"email"} disabled={isSubmitting} name="identifier" placeholder="example@example.com"
                            {...register("identifier", {
                                required: { value:true, message:"Email is required" },
                                pattern: { value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,  message:"Enter valid email." }
                            })}
                        />
                        <Input type="hidden" name="website" {...register("website")} />
                        <FormError field={errors.identifier} />
                    </div>    
                    
                    {/* Form Input */}
                    <div className="form-group ">
                        <Label> Password </Label>
                        <div className="passowrd-input relative">
                            <span onClick={()=>{ setIsShowPassword((prev) => !prev);}} className={`absolute right-[10px] top-[15px]  ${isShowPassword ? "active" : ""}`} ><span className="flaticon-visibility eye-pass" /></span>

                            <Input disabled={isSubmitting} type={`${isShowPassword ? "text" : "password"}`} name="password" placeholder="* * * * * * * * *" 
                                {...register("password",{
                                      required:{ value:true, message:"Password is required"},
                                      minLength:{ value:8, message:"Minimum password length 8 characters." }
                                })}
                            />
                        </div>
                        <FormError field={errors.password} />
                    </div>

                    {/* Reset Password Link */}
                    
                    <p className='pb-[20px]'><Link href="/forgotPassword">Forgot your password?</Link></p>

                    <div className='flo'>
                        { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-red-700 mb-[10px]" key={errorIndex}> {error.message} </div>) }
                    </div>

                    {isSubmitting ? 
                        <Button disabled> <Loader2 className="animate-spin" /> Please wait </Button>
                    : <>
                        <Button disabled={isSubmitting} type="submit" className="px-10 py-5">Log In</Button>
                    </> }
                </form>	
            </div>
        </>
    )
}