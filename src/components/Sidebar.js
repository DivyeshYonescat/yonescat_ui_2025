import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // For navigation between pages

import { invoiceById } from '@/api/formSubmission';
// import Scrollbars from 'react-custom-scrollbars-2';
import Invoice from './invoice/invoice';
import Image from 'next/image';


const Sidebar = ({showMenu, id,closeButton,sendTOSms}) => {
    
    //Get tag fetch data
    const [listInvoice, setInvoice] = useState(null);
    const [Merchant, setMerchant] = useState(null);
    //Get Invoice list fetch data
    const getInvoiceList = async (id) => {
        // Get the full URL
        const tags = await invoiceById({"id":id});
        if (tags.success) { 
            setInvoice(tags.data.list);
        }
    };

    // function call all data
    useEffect(() => {
        if(listInvoice === null){ 
            getInvoiceList(id); 
        } 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    
    return <> 
        {/* <div className='sadebar_main'>
            <div className='sadebar_inner'>
                <div className='sadebar-header'>
                    <button type='button' className="" onClick={()=>{closeButton(false)}}>clsoe</button>
                </div>
                {listInvoice !== null ? <>
                    <Invoice docId={listInvoice.documentId} payment_id={ listInvoice.payment_id} status={listInvoice.invoice_status} invoice_id={listInvoice.invoice_id} id={listInvoice.id} products={JSON.parse(listInvoice.product_list) } customer={listInvoice.customer_details }  merchant={listInvoice.marchand_ids} data={true} sendTOSms={sendTOSms} send_time={listInvoice.sms_send_time}  />
                </> :""}    
            </div>
        </div> */}
        <div className='invoice_sadebar_main inset-shadow-sm inset-shadow-black-500  z-50'>
            <button type='button' className='close_button' onClick={()=>{closeButton(false)}}>
                <Image src={"/images/main/svg/close-svgrepo-com.svg"} alert={"close-svgrepo-com.svg"} width={20} height={20} />
            </button>
            <div className="nav-menu-bar" data-show-menu={showMenu}>
            {/* <Scrollbars universal={true}> */}
                {listInvoice !== null ? <>
                    <Invoice docId={listInvoice.documentId} payment_id={ listInvoice.payment_id} status={listInvoice.invoice_status} invoice_id={listInvoice.invoice_id} id={listInvoice.id} products={JSON.parse(listInvoice.product_list) } customer={listInvoice.customer_details }  merchant={listInvoice.marchand_ids} data={true} sendTOSms={sendTOSms} send_time={listInvoice.sms_send_time}  />
                </> :""}    
            {/* </Scrollbars> */}
            </div>
        </div>
    </>;
};

export default Sidebar;
