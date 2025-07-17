"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

import Layout from "@/layout/Layout";
import Banner from "@/layout/Banner";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table"
import { Button, buttonVariants } from "@/components/ui/button";

import { invoice_SMS_Send_To_Pay, list_of_invoice, sendStrpePay } from "@/api/formSubmission";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Sidebar from "@/components/Sidebar";
 
export default function Invoice() {
  const router = useRouter();
  const pageUrl = usePathname();
  const pageSize = 10;

  //Get tag fetch data
  const [check, setCheck ] = useState(false);
  const [listInvoice, setInvoice] = useState([]);
  const [Merchant, setMerchant] = useState(null);

  //toggle saidbar
  const [toggleButton, setToggleButton ] = useState(false);
  const [saidbarData, setSaidbarData] = useState(null);

  const closeButton = (data) => {
    setToggleButton(false);
    setSaidbarData(null);
  }

  //send sms 
  const sendSMSToCutomers = async (docId,invoice_id,product_list,customer_details,marchand_ids) => {
    const fullUrl = `${window.location.origin}${router.asPath}`;
    var data = {
      "id":docId,
      "invoice_id":invoice_id,
      "products":product_list,
      "merchant":marchand_ids,
      "customer":customer_details,
      "backurl":fullUrl
    }

    setIsSubmitting(true);
    const formData = await sendStrpePay(data);
    if(formData.success){
      setIsSubmitting(false);
    }else{
      setIsSubmitting(false);
    }
    
  // const sendSMSToCutomers = async (idd,phone) => {
  //   //const id = toast.loading("Please wait...")
  //   setIsSubmitting(true);
  //   const send = await invoice_SMS_Send_To_Pay({"documentId":idd,"phone":phone});
  //   if(send.success){
  //     var divsToHide = document.getElementsByClassName("sendsms"); //divsToHide is an array
  //     for(var i = 0; i < divsToHide.length; i++){
  //         divsToHide[i].style.visibility = "hidden"; // or
  //         divsToHide[i].style.display = "none"; // depending on what you're doing
  //     }
  //     setIsSubmitting(false);
  //     setToggleButton(false);
  //     setSaidbarData(null);
  //     //toast.update(id, { render: "Invoice Link send to cutomer", type: "success", isLoading: false, autoClose: 1000 });
  //   }else{
  //     setIsSubmitting(false);
  //     //toast.update(id, { render: "Something is wrong", type: "error", isLoading: false, autoClose: 1000 });
  //   }  
  }


  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('token') || localStorage.getItem('token') === 'null') {
      router.replace('/auth');
      return;
    }else{
      //Get Merchant fetch data
      JSON.parse(localStorage.getItem('user')).user_type !== "Merchant" ? router.replace('/')  :"";
      setMerchant(JSON.parse(localStorage.getItem('user')));
      
      //Get Invoice list fetch data
      const getInvoiceList = async (id) => {
        const tags = await list_of_invoice({"id":id});
        if (tags.success) {
          setInvoice(tags.data.list);
          setCheck(true);
        }
      };
      getInvoiceList(JSON.parse(localStorage.getItem('user')).id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(<>
    <div className={`${toggleButton && "invoice-wapper"}`}>
    <Layout>
      <Banner sortheader={true} title={"Requested Invoices"} description={"Want to learn more about Yonescat, get a quote, or speak with an expert? Let us know what you are looking for and we’ll get back to you right away"} />
      <section>
        <div className="container">
          <div className="invoice_list section-main">
            <div className="invoice_header flex justify-end">
              <Link href={`/invoice/create`} className={buttonVariants({ variant: "",className:"mr-[15px]"})}> <Image src={"/images/main/svg/create-svgrepo-com.svg"} width={20} height={20} alt="dsfsd" /> Create Invoice</Link>  
            </div>
            <div className="invoice_body mt-[50px]">
              {Merchant !== null && listInvoice.length != 0 ? <>
              <Table className="invoice_table">
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Cutomer Name</TableHead>
                    <TableHead>Cutomer Phone</TableHead>
                    <TableHead>Stastus</TableHead>
                    <TableHead className="text-end w-20">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {listInvoice.map((row, index) => <>
                  <TableRow key={row.invoice_id}>
                    <TableCell>{index+1}</TableCell>
                    <TableCell>{row.invoice_id}</TableCell>
                    <TableCell>{row.customer_details.fullname}</TableCell>
                    <TableCell>{row.customer_details.phone}</TableCell>
                    <TableCell>{row.invoice_status == true ? <span className="Paid">Paid</span>:<span className="Pending">Pending</span>}</TableCell>
                    
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="border-0 focus-visible:ring-[0px]"><Image src={"/images/main/svg/three-dots-vertical.svg"} width={25} height={25} alt="" /> </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-26 invoice-dropdwon" align="end">
                          <DropdownMenuItem className="flex items-center" onClick={()=>{setToggleButton(true); setSaidbarData(row.documentId)}}>

                            <Image src={"/images/main/svg/preview-svgrepo-com.svg"} className="mr-1.5" width={25} height={25} alt="" /> Preview</DropdownMenuItem>
                          {row.invoice_status == false && <>
                            <DropdownMenuItem className="flex items-center">
                              <Link className="flex items-center"  href={`/invoice/edit/${row.documentId}`}>
                                <Image className="mr-1.5" src={"/images/main/svg/edit-square-svgrepo-com.svg"} alt="profile" width={20} height={20}  /> Edit
                              </Link>
                            </DropdownMenuItem>

                            {row.sms_send_time !== null ? <>
                              {new Date().getTime() < new Date(row.sms_send_time).getTime() ? "":
                                <DropdownMenuItem className="flex items-center">
                                  {row.invoice_status == false && <> 
                                    <button type="button" className="flex items-center" onClick={()=>{sendSMSToCutomers(row.id,row.invoice_id,JSON.parse(row.product_list),row.customer_details,row.marchand_ids,row.sms_send_time)}}> 
                                      <Image src={"/images/main/svg/sms-gate-svgrepo-com.svg"} className="mr-1.5" alt="profile" width={20} height={20}  /> Send SMS
                                    </button> 
                                  </>}
                                </DropdownMenuItem>
                              }
                            </> :<>
                              <DropdownMenuItem className="flex items-center"> 
                                {row.invoice_status == false &&  
                                  <button type="button" className="flex items-center" onClick={()=>{sendSMSToCutomers(row.id,row.invoice_id,JSON.parse(row.product_list),row.customer_details,row.marchand_ids,row.sms_send_time)}}> 
                                    <Image src={"/images/main/svg/sms-gate-svgrepo-com.svg"} className="mr-1.5" alt="profile" width={20} height={20}  /> Send SMS
                                  </button>  }
                              </DropdownMenuItem>
                            </>}
                          </>}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  </>)}
                </TableBody>
              </Table>
              </> : <h3 className="text-center">No invoice is found</h3>}
            </div>
          </div>
        </div>
      </section>
      {saidbarData !== null ? <Sidebar showMenu={toggleButton} closeButton={closeButton} id={saidbarData} sendTOSms={sendSMSToCutomers} /> : ""}
    </Layout>
    </div>
  </>)
}
