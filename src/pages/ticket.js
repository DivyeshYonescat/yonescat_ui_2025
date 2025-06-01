"use client";
import React, { useRef, useState, useEffect} from 'react';
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Layout from '@/layout/Layout';
import Banner from '@/layout/Banner';
import ContactLeft from '@/components/contactLeft/contactLeft';


import { Button } from "@/components/ui/button";
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import { useForm } from "react-hook-form";
// import { toast} from 'react-toastify';
// import {loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
// import LoginModel from "@/components/elements/LoginModel";

// import TiptapEditor from '@/components/elements/TiptapEditor/TiptapEditor';
import { FormError } from "@/components/form/validationError";
import { ticketFormSubmit } from '@/api/formSubmission';
import useError from '@/api/errorShow';
import TiptapEditor from '@/components/TiptapEditor';
import { Loader2 } from 'lucide-react';




export default function Home() {
  const pageUrl = usePathname();
  const formRef = useRef(null);
  //text editer
  const [value, setValue] = useState('');
  //After api Respons data and loader
  const [result, setResult] = useState(null);
  const { error, showError, clearError } = useError();
  const [isSubmitting, setIsSubmitting] = useState(false);

  //Check User Login Model
  // State to control modal visibility
  // const [showModal, setShowModal] = useState(false); 
  // const [loading, setLoading] = useState(false);

  // Check User login
  // const [showUser, setShowUser] = useState(null); 
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

  // Form validton 
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    // const userCaptchaValue = data.captcha_input;
    // if (validateCaptcha(userCaptchaValue)) {} else {
    //   showError([{message:"Invalid Captcha"}]);
    //   return
    // }

    // if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') { setShowModal(true);  return;}
    // description data
    data.description = value ;
    //set upload file
    data.resume = files;

    // const fullname = data.name.replace(/\b\w/g, (char) => char.toUpperCase());
    const fullname = data.name;
    data.name = fullname;
    if((data.website).toString().trim() != ""){ return; }
      delete data.website;
      // delete data.captcha_input;
      clearError();
      // const id = toast.loading("Please wait...")
      setIsSubmitting(true);
      // setLoading(true);
      // data.users_permissions_user = showUser.id;
      // function for send data with api
      const formData = await ticketFormSubmit(data,files);
      if(formData.success){
        setIsSubmitting(false);
        // setLoading(false);
        formRef.current.reset();
        setResult(formData.data.data);

        setFiles([]);
        setValue('');
        setInvalidFiles([]);

        // toast.update(id, { render: "Your ticket is Submitted", type: "success", isLoading: false, autoClose: 1000 });
      }else{
        setIsSubmitting(false);
        // setLoading(false);
        
        showError(formData.errors.errorCollaction);
        // toast.update(id, { render: "Something is wrong", type: "error", isLoading: false, autoClose: 1000 });
      }
  }

  // File Upload with DND
  // store and draging status
  const [files, setFiles] = useState([]);
  const [invalidFiles, setInvalidFiles] = useState([]);
  const [dragging, setDragging] = useState(false);

  // Drag Enter
  const handleDragEnter = (e) => { e.preventDefault(); setDragging(true);};
  // Drag Leave
  const handleDragLeave = (e) => { e.preventDefault(); setDragging(false); };
  // Drop File
  const handleDrop = (e) => {
      e.preventDefault();
      setDragging(false);
      const filesArray = Array.from(e.dataTransfer.files);
      const dataStore = ["application/pdf","application/vnd.ms-excel","image/jpeg","image/png","text/plain",'application/x-gzip','application/x-zip','application/x-zip-compressed'];
      var fileValditon = [];
      var envalidFile = [];
      filesArray.map((itmes,index) => {
        if(dataStore.includes(itmes.type) && itmes.size < 1 * 1024 * 1024){
          fileValditon.push(itmes);
        }else{
          envalidFile.push(itmes);
        }
      })
      setFiles((prevFiles) => [...prevFiles, ...fileValditon]);
      setInvalidFiles((prevFiles) => [...prevFiles, ...envalidFile]);
      (files);
  };
  // Select File
  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    const dataStore = ["application/pdf","application/vnd.ms-excel","image/jpeg","image/png","text/plain",'application/x-gzip','application/x-zip','application/x-zip-compressed'];
    var fileValditon = [];
    var envalidFile = [];
    
    filesArray.map((itmes,index) => {
      
      if(dataStore.includes(itmes.type) && itmes.size < 1 * 1024 * 1024){  
        fileValditon.push(itmes); 
      }else{
        envalidFile.push(itmes);
      }
    })
    setFiles((prevFiles) => [...prevFiles, ...fileValditon]);
    setInvalidFiles((prevFiles) => [...prevFiles, ...envalidFile]);
    if(files.length  > 0){  (filesArray); }
  };
  // Remove File
  const handleRemoveFile = (index,type) => {
    if(type === 'valid'){
      setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
    }else{
      setInvalidFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
    }  
  };
  //Preview File
  const getFilePreview = (file) => {
    if (file.type.startsWith('image/')) {
    return (<div className='w-[90%]'> <Image className='min-w-[40px] w-[40px] h-[40px]'  priority={true} src={URL.createObjectURL(file)} alt={file.name} width={40} height={40}/> <p className='line-clamp-1 max-w-full px-[10px]'>{file.name}</p> <p className='pr-[10px]'>{file.type}</p> </div> );
    } else {
      return (
        <div>
        <p>{file.name}</p>
        <p>{file.type}</p>
        </div>
      );
    }
  };

  return (
    <>
      
      <Layout>
        <Banner title={" Ticket Support"} description={"Want to learn more about Yonescat, get a quote, or speak with an expert? Let us know what you are looking for and we’ll get back to you right away"} />
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
                      <Input type="text" disabled={isSubmitting} name="fullname" className="border border-black" placeholder="John Doe"
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

                  <div className="form-group">
                    <label className="p-lg ">Explain your question in details: </label>
                    <p className=" questing_name">Your OS version, Yonescat version &amp; build, steps you did. Be VERY precise!</p>
                    <TiptapEditor setContent={setValue} />
                  </div>

                  <div className="form-group">
                    <Label className="p-lg">Upload your files   </Label>
                    <p className='text-sm'>Your OS version, Yonescat version &amp; build, steps you did. Be VERY precise!</p>
                    <div  className={`dndFile ${dragging ? 'dragging' : ''}`} onDragEnter={handleDragEnter} onDragLeave=  {handleDragLeave} onDrop={handleDrop} >
                      <Image src="/images/contact-icone/file-upload.svg" alt="File UpLoad" width={30} height={30} />
                      <input disabled={isSubmitting} aria-label="name" type="file" name="files" onChange={handleFileChange} className="name" multiple  style={{display:"block",marginTop:"24px"}} accept="" />
                      <p>Drag and drop files here or click to upload</p>
                      {files.length !== 0 ?  <p> Total {files.length} files are selected </p> :""}
                    </div>
                    <ul className='block max-h-[230px] overflow-auto'>
                      {files.map((file, index) => (
                      <li key={index}>
                        <div className="prview_image_box ">
                          {getFilePreview(file)}
                          <button type="button" className=" remove_file_button" onClick={() => handleRemoveFile(index,"valid")}>
                            <Image src="/images/contact-icone/delete.svg" alt="File UpLoad" width={20} height={20} />
                          </button>
                        </div>
                      </li>
                      ))}

                      {invalidFiles.map((file, index) => (
                        <li key={"invalid"+index}>
                        <div className="prview_image_box">
                          {getFilePreview(file)}
                          <button type="button" className=" remove_file_button" onClick={() => handleRemoveFile(index)}>
                            <Image className='max-w-20px max-h-20px' src="/images/contact-icone/delete.svg" alt="File UpLoad" width={20} height={20} />
                          </button>
                        </div>
                        { file.size > 1 * 1024 * 1024 ? <span className='error '> Please Select File less than 1MB</span> : <span className='error'> Please Select valid file</span> }
                      </li>
                      ))}
                    </ul>
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