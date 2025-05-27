import use from "@/lib/use";
import axiosInstance from "@/lib/axiosInstance";
import {fileUploadToServer} from "@/api/base";

// Send Form data with file upload
async function careerFormSubmit(data,files) {
    const url = use.getApiUrl("careers");
    if(files.length > 0){
        const filesResponse = await fileUploadToServer(files);
        if(filesResponse == null){ return ; }
        const filesIds = filesResponse.map((file)=>{  return file.id; });
        data.resume = filesIds[0];
    }    
    try {
        const response = await axiosInstance.post(url,{data});
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}
// Send Ticket with File upload From
async function ticketFormSubmit(data,files) {
    const url = use.getApiUrl("tickets");
    if(files.length > 0){
        const filesResponse = await fileUploadToServer(files);
        if(filesResponse == null){ return ; }
        let keyid = [];
        for(let i=0;  i < filesResponse.length; i++){ keyid.push({id:filesResponse[i].id }); }
        data.resume = keyid;
    }
    try {
        const response = await axiosInstance.post(url,{data});
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}
// Send Contact us 
async function contactUsForm(data) {
    const url = use.getApiUrl("contacts");
    try {
        const response = await axiosInstance.post(url,{data});
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}
// send form for newslater
async function newslaterForm(data) {
    const url = use.getApiUrl("subscribes");
    try {
        const response = await axiosInstance.post(url,{data});
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}
// user login form submit for user
async function userLoginForm(data) {
    const url = use.getApiUrl("auth/local");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
        console.log(error);
       return { success:false, errors:error };
    }
}
// user signup form submit for user
async function userSignupForm(data) {
    const url = use.getApiUrl("auth/local/register");
    console.log(url,data);
    
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
        console.log(error);
        
       return { success:false, errors:error };
    }
}
// signup otp varification form submit for user
async function userSignupOtpForm(data) {
    const url = use.getApiUrl("auth/verify-otp");
    console.log(url,data);
    
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
        console.log(error);
        
       return { success:false, errors:error };
    }
}
//Forget passowrd for user 
async function userForgetPasswordForm(data) {
    const url = use.getApiUrl("auth/forgot-password");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
        return { success:false, errors:error };
    }
}
//Reset passowrd for user
async function userResetPasswordForm(data) {
    const url = use.getApiUrl("auth/reset-password");
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axiosInstance.post(url,data);
            resolve({ success:true,data: response});
        } catch (error) {
            console.log(error);
            reject({ success:false, errors:error });
        }
    })
}
//Show list of invoice 
async function list_of_invoice(data) {
    const url = use.getApiUrl("show_invoices");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}
//Invoice details base on document Id
async function invoiceById(data) {
    const url = use.getApiUrl("invoices_by_id");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true, data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}
//Create invoice 
async function createInvoice(data) {
    const url = use.getApiUrl("invoices");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}
//Update invoice 
async function updateInvoice(data) {
    const url = use.getApiUrl("update_invoice");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}

//Send Invoice To phone for pay
async function invoice_SMS_Send_To_Pay(data) {
    const url = use.getApiUrl("send_invoice");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}

//Send payment link strpe 
async function sendStrpePay(data){
    const url = use.getApiUrl("payment");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}

//send id for get payment id and data of payment in strapi
async function paymentById(data) {
    const url = use.getApiUrl("getPaymentId");
    try {
        const response = await axiosInstance.post(url,data);
        return { success:true,data: response};
    } catch (error) {
       return { success:false, errors:error };
    }
}


export { careerFormSubmit, ticketFormSubmit, contactUsForm, newslaterForm, userLoginForm, userSignupForm, userSignupOtpForm, userForgetPasswordForm, userResetPasswordForm, createInvoice, list_of_invoice, invoiceById, updateInvoice, sendStrpePay,invoice_SMS_Send_To_Pay, paymentById}