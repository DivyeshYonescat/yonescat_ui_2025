import { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { useForm } from "react-hook-form";
import useError from "@/api/errorShow";
import { userForgetPasswordForm } from "@/api/formSubmission";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import { FormError } from "@/components/form/validationError";


export default function Home() {
  const router = useRouter();
    
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { error, showError, clearError } = useError();
  

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowMessage, setIsShowMessage] = useState(null);

  // Use For Form reset
  const formRef = useRef(null);

  //After api Respons data and loader
  const [result, setResult] = useState(null);

  const onSubmit = async(data) => {
    if((data.website).toString().trim() != ""){ return; }
    //Semd data  to server ajax
    delete data.website;
    clearError();
    //const id = toast.loading("Please wait...")
    setIsSubmitting(true);
        
    const formData = await userForgetPasswordForm(data);
    if(formData.success){
        
        setResult(formData.data);
        setIsShowMessage("Thank you for login");
        setTimeout(() => {  setIsSubmitting(false); router.replace('/auth');}, 3000);
        formRef.current.reset();

        //toast.update(id, { render: "Thank you for login", type: "success", isLoading: false, autoClose: 1000 });
    }else{
        setIsSubmitting(false);
        showError([{"message":formData.errors.message}]);
        //toast.update(id, { render: "Something is wrong", type: "error", isLoading: false, autoClose: 1000 });
    }
  }

  return <>
    <div  className="pb-[80px] min-h-screen pt-[80px] w-full bg-no-repeat bg-[100%] bg-cover flex justify-center items-center" style={{background:"url(/images/login.webp)"}}>
      <div className="block w-full max-lg:px-[10px_30px] max-sm:px-0">
        <h3 className="text-center pb-4">Forget Password</h3>
       
        {isShowMessage !== null &&  <h3 className="text-center pb-4">Reset Password Url is send to Email.</h3>}
          
        <form ref={formRef} className='m-auto max-w-[500px] px-1.5' name="signinform" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group mb-[20px]">
                <Label className="mb-2.5 block"> Email address </Label>
                <Input disabled={isSubmitting} className="form-control email" type="email" name="email" placeholder="example@example.com"
                    { ...register("email", { required: {  value:true, message:"Email is required" },
                      pattern: { value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:"Enter valid email." }
                      })
                    }
                />
                <Input type="hidden" name="website" {...register("website")} />
                <FormError field={errors.email} />
            </div>    
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
}