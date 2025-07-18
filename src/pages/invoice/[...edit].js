"use client";
import React, { useState, useRef, useEffect  } from 'react';
import Image from "next/image";
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

import Layout from "@/layout/Layout";
import Banner from "@/layout/Banner";

import { Controller, useForm } from "react-hook-form";
import { FormError } from "@/components/form/validationError";
import useError from '@/api/errorShow';

import { Button, buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger,} from "@/components/ui/tooltip"
import { Loader2 } from 'lucide-react';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

import ProductManager from '@/components/invoice/Product';
import { createInvoice, invoiceById, updateInvoice } from '@/api/formSubmission';
import Link from 'next/link';
import { toast } from 'sonner';


export default function Home() {
  const router = useRouter();
  const pageUrl = usePathname();
  const formRef = useRef(null);

  const InvoiceParams = useParams();
  const invoiceid =  InvoiceParams?.edit.length > 0 ? InvoiceParams?.edit[1] : null;
 
  //wizard 
  const steps = ['User Info', 'Add Products'];
  const [step, setStep] = useState(0);
  const stepFields = [['fullname', 'email',"phone","address","city","state","postal_code","country"],];

  const onNext = async () => { const valid = await trigger(stepFields[step]); if (valid) setStep((prev) => prev + 1); };
  const onBack = () => setStep((prev) => prev - 1);

  // Check User login
  const [listInvoice, setInvoice] = useState(null);
  const [merchant, setMerchant] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [result, setResult] = useState(null);

  //Product managment
  const [productsJson, setProductsJson] = useState([]);
  const [resetTrigger, setResetTrigger] = useState(false);

  //Form 
  console.log(listInvoice);
  
  const {control, register, handleSubmit, trigger, reset,formState: { errors },  } = useForm({ mode: 'onTouched'},
);
  const { error, showError, clearError } = useError();

  const handleProductsChange = (updatedProducts) => {
    setProductsJson(updatedProducts);
  };

  //Get Invoice list fetch data
  const getInvoiceList = async (id) => {
    const tags = await invoiceById({"id":id});
    if (tags.success) {
      setInvoice(tags.data.list);
      reset({
        fullname:  tags.data.list.customer_details.fullname,
        email: tags.data.list.customer_details.email,
        phone:  tags.data.list.customer_details.phone,
        address:  tags.data.list.customer_details.address,
        city:  tags.data.list.customer_details.city,
        country:  tags.data.list.customer_details.country,
        postal_code:  tags.data.list.customer_details.postal_code,
        state:  tags.data.list.customer_details.state,
      });
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') {
      router.replace('/auth');
      return;
    }else{
      setMerchant(JSON.parse(localStorage.getItem('user')));
      if(invoiceid !== null) {
        getInvoiceList(invoiceid)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[invoiceid]);

  function areJsonEqual(json1, json2) {
    if (typeof json1 !== 'object' || typeof json2 !== 'object' || json1 === null || json2 === null) { return false;}
    const keys1 = Object.keys(json1);
    const keys2 = Object.keys(json2);
    if (keys1.length !== keys2.length) { return false;}
    for (let key of keys1) {
      // Check if the key exists in the second object
      if (!keys2.includes(key)) { return false;}
      // Check if the values are equal
      if (json1[key] !== json2[key]) { return false; }
    }
    return true; // Objects are equal
  }

  function arraysOfJsonEqual(arr1, arr2) {
    // Check if both are arrays
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return false;
    }

    // Check if the lengths are the same
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Sort both arrays to ensure order doesn't matter
    const sortedArr1 = arr1.map(JSON.stringify).sort();
    const sortedArr2 = arr2.map(JSON.stringify).sort();

    // Compare the sorted arrays
    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
            return false; // If any object is different, return false
        }
    }

    return true; // Arrays are equal
  }

  const onSubmit = async(data) => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') {   return;}
    if((data.website).toString().trim() != ""){ return; }
    
    //Semd data  to server ajax
    delete data.website;
    const checkJsone = areJsonEqual(data,listInvoice.customer_details);
    const checkArray = arraysOfJsonEqual(productsJson,JSON.parse(listInvoice.product_list));

    if(checkJsone === true && checkArray === true){ 
      alert("No changes found in form edit");
       //toast("No changes found in form edit", {type: "error", autoClose: 1000, });  
      return ; 
    }

    setCustomer(data);

    var invoice = {
      "id":listInvoice.id,
      "documentId": invoiceid,
      "customer_details":data,
      "invoice_status":false,
      "marchand_ids":merchant.id
    }  

    if(productsJson == null){
      invoice.products = listInvoice.product_list;
    }else{
      invoice.products = productsJson;
    }

    
    //data.userid = showUser.id; 
    clearError();
    setIsSubmitting(true);
    const formData = await updateInvoice(invoice);
    if(formData.success){
      setIsSubmitting(false);
      setResetTrigger(prev => !prev);
      setResult(formData.data);
      formRef.current.reset();
      toast.success('Invoice has updated!');
      setTimeout(() => { router.replace('/invoice');}, 3000);
      
    }else{
      setIsSubmitting(false);
       toast.error('Somethig is missing')
      if(formData.errors.errorCollaction == undefined){
        showError(formData.errors.message);  
      }else{
        showError(formData.errors.errorCollaction);
      }
      
      
    }
  }
  return (
    <>
      <Layout>
        <Banner title={"Questions? Let's Talk"} description={"Want to learn more about Yonescat, get a quote, or speak with an expert? Let us know what you are looking for and we’ll get back to you right away"} />
        <section className="box-main-section mb-[50px]">
          <div className="container">
            <div className="box-inner-section !grid-cols-1">
              <div className="box-text-section"> 
                <div className='flex items-center justify-between mb-[30px]'>
                  <h4> Edit Invoice </h4>
                  {/* <Image src="/images/contact-icone/send-mail.svg" alt='send_mail' width={50} height={50} /> */}
                  <Link className={buttonVariants({ variant: "", size:"lg"})} href={"/invoice"}>Invoices List</Link>
                </div>
                <form ref={formRef} name="contactform" className="row contact-form" onSubmit={handleSubmit(onSubmit)}>

                  {step === 0 && (<>
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
                        <Input type={"email"} disabled={isSubmitting} defaultValue={`${listInvoice != null ? listInvoice.customer_details.email  :""}`} name="email" className="" placeholder="example@example.com"
                            {...register("email", {
                                required: { value:true, message:"Email is required" },
                                pattern: { value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,  message:"Enter valid email." }
                            })}
                        />
                        <FormError field={errors.email} />
                      </div>
                      <div className="form-group ">
                        <Label className="">Phone numbar</Label>
                        <div className="flex items-center relative w-full">
                            <Controller name="phone" control={control}  rules={{ required: 'Phone number is required' }}
                                render={({ field }) => ( <PhoneInput disabled={true} className="w-full"  {...field} defaultCountry="US" onChange={field.onChange} placeholder="Phone numbar"  /> )}
                            />  
                            <Tooltip>
                              <TooltipTrigger className="absolute right-1.5 top-3.5"> <Image src={"/images/main/svg/info.svg"} width={20} height={20} alt=''/> </TooltipTrigger>
                              <TooltipContent> Add a phone number, and it cannot be changed later. </TooltipContent>
                            </Tooltip>
                        </div> 
                        <FormError field={errors.phone} />   
                      </div>
                    </div>
                    <h5 className='mb-[30px]'>Shipping Details</h5>

                    <div className="form-input">
                      <div className="form-group ">
                        <Label className="">Address</Label>
                        <Input disabled={isSubmitting} name="address" className="form-control name" placeholder="Address"
                          { ...register("address",{ required:{ value:true,  message:"Shoping address is required" }, minLength:{ value:4, message:"Shoping address is too short."} }) }
                        />
                        <FormError field={errors.address} />
                      </div>
                      <div className="form-group ">
                        <Label className="">City</Label>
                        <Input disabled={isSubmitting} type="text" name="city" className="form-control name" placeholder="City"
                          { ...register("city",{ required:{ value:true, message:"city is required"}}) }
                        />
                        <FormError field={errors.city} />
                      </div>
                      <div className="form-group ">
                        <Label className="">State</Label>
                        <Input disabled={isSubmitting} type="text" name="state" className="form-control name" placeholder="state"
                          { ...register("state",{ required:{ value:true, message:"state is required"},}) }
                        />
                        <FormError field={errors.state} />
                      </div>
                    </div>

                    <div className="form-input">
                      <div className="form-group ">
                        <Label className="">Postal Code</Label>
                        <Input disabled={isSubmitting} type="text" name="postal_code" className="form-control name" placeholder="Postal Code "
                           { ...register("postal_code",{ required:{ value:true, message:"postal code is required"},}) }
                        />
                        <FormError field={errors.postal_code} />
                      </div>

                      <div className="form-group ">
                        <Label className="">Country</Label>
                        <Input disabled={isSubmitting} type="text" name="country" className="form-control name" placeholder="Country"
                          { ...register("country",{ required:{ value:true, message:"country is required" },}) } 
                        />
                        <FormError field={errors.country} />
                      </div>  
                    </div>
                  </>)}

                  {step === 1 && (<>
                    <input type="hidden" name="website" {...register("website")} />
                    <h3 className='title_fields mb-[30px]'>Add Product</h3>
                     {listInvoice != null ? <> 
                        <ProductManager previewProduct={JSON.parse(listInvoice.product_list)}  onProductsChange={handleProductsChange} resetTrigger={resetTrigger} />
                      </> :""}
                  </>)}

                  {step === 0 && (
                  <div className='text-right'>
                    <Button className="px-10 py-5" disabled={isSubmitting} onClick={onNext}>Next</Button>
                  </div>  
                  )}

                  {step === 1 && <>
                    <div className="w-full mb-[10px]">
                      
                      {typeof error == "string" ? <div className="error text-red-700 mt-[10px]"> {error} </div> : <>
                      { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-red-700 mt-[10px]" key={errorIndex}> {error.message} </div>) }
                      </>}
                    </div>
                    <div className="flex justify-between mt-[15px]">
                      <Button className="px-10 py-5" disabled={isSubmitting} onClick={onBack}>Back</Button>
                      {isSubmitting ? 
                        <Button disabled> <Loader2 className="animate-spin" /> Please wait </Button>
                        : <> <Button type="submit" className="px-10 py-5" disabled={isSubmitting} >Submit Request</Button>
                      </> }
                    </div> 
                  </>}
                  
                </form>      
              </div>  
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}