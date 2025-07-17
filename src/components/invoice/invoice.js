// components/Invoice.jsx

import React, { useState } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';
import Image from 'next/image';

import { useForm } from "react-hook-form";
import { sendStrpePay } from '@/api/formSubmission';

import SMS from "@/../public/images/main/svg/sms-gate-svgrepo-com.svg";
import Edit from "@/../public/images/main/svg/edit-square-svgrepo-com.svg";
import { Button, buttonVariants } from '../ui/button';

const Invoice = ({status, id, invoice_id, products, merchant , customer, payment_id, data, docId, sendTOSms, send_time }) => {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const totalAmount = products.reduce((sum, product) => sum + product.price * product.purchasedCount,0);

    const [loading, setLoading] = useState(false);

    const onSubmit = async(data) => {
        if((data.website).toString().trim() != ""){ return; }
        const fullUrl = `${window.location.origin}${router.asPath}`;
        var data = {
            "id":id,
            "invoice_id":invoice_id,
            "products":products,
            "merchant":merchant,
            "customer":customer,
            "backurl":fullUrl
        }
        const formData = await sendStrpePay(data);
        if(formData.success){
            window.location.replace(formData.data.url);
        }else{
        
        }
    }

    return (
        <div className="invoice-container">
            {/* Merchant Section */}
            <div className="merchant-section text-center ">
                {merchant != null ? <>
                <h2>{merchant.business_name}</h2>
                <p><b>{merchant.firstname} {merchant.lastname}</b></p>
                <p>Phone: <b>{merchant.phone}</b></p>
                <p>Email: <b> {merchant.email} </b></p>
                </>: ""}
            </div>

            {/* Customer Section */}
            <div className="customer-section flex justify-between my-7">
                <div className="billing-address">
                    <h3>Bill To:</h3>
                    {customer != null ? <>
                    <p>Name : <b>{customer.name} </b></p>
                    <p>Phone: <b>{customer.phone}</b></p>
                    <p>Email: <b>{customer.email}</b></p>
                    </> : ""}
                </div>
                
                <div className="shipping-address">
                <h3>Ship To:</h3>
                <p>{customer != null ? customer.address :""}</p>
                </div>
            </div>

            {/* Products Table */}
            <div className='product-main'>
            <table className="products-table">
                <thead>
                <tr>
                    <th>Item #</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {products.map((product,index) => (
                    <tr key={"product"+index}>
                        <td>{index+1}</td>
                        <td>{product.name}</td>
                        <td>{ Number(product.purchasedCount) }</td>
                        <td>${ Number(product.price).toFixed(2)}</td>
                        <td>${(Number(product.price) * Number(product.purchasedCount)).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

            {/* Total Amount */}
            <div className="total-section text-end mt-10">
                <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
            </div>
            
            {status !== true ? <>
            {/* Payment Footer */}
           
                {data ? <> 
                    <div className='list_of_buttons flex justify-between items-center mt-10'>
                        <div>
                            <Link href={`/invoice/edit/${docId}`} className={buttonVariants({ variant: "",className:"mr-[15px]"})}>
                            <Image src={Edit.src} alt='Edit button' className='white-image' width={20} height={20} /> Edit</Link>
                        </div>
                        <div>
                            {send_time !== null ? <>
                                {new Date().getTime() < new Date(send_time).getTime() ? "":
                                    <div className="sendsms"> 
                                        {status == false &&
                                            <Button type="button" variant="" className="flex justify-between items-center mt-10" onClick={()=>{sendTOSms(id, invoice_id, products, merchant , customer)}}>
                                                <Image src={SMS.src} alt='Send SMS' className='white-image' width={20} height={20} /> Send SMS
                                            </Button>
                                        } 
                                    </div>
                                }
                            </> :<>
                                <div className="sendsms"> 
                                    {status == false && 
                                        <Button type="button" className="flex justify-between items-center mt-2" onClick={()=>{sendTOSms(id, invoice_id, products, merchant , customer)}}>
                                            <Image src={SMS.src} alt='send sms' className='white-image' width={20} height={20} /> Send SMS
                                        </Button>  
                                    } 
                                </div>
                            </>}
                            {/* {send_time}
                            <button type="button" className="btm-sms btn--theme hover--theme" onClick={()=>{sendTOSms(docId,customer.phone)}}>Send SMS</button>  */}

                        </div>    
                    </div>    
                     </> :
                    <form name="contactform" className="row contact-form" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="website" {...register("website")} />
                        <button type='submit' className='btn pay-button'>Pay Now</button>
                    </form>
                }
            
            </>:<p className='text-center mt-5'> This invoice payment is payed by payment id : <b>{payment_id}</b> </p>}
        </div>
    );
};

export default Invoice;


