// pages/success.js
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';

import { jsPDF } from 'jspdf';
import use from '@/lib/use';
import Layout from '@/layout/Layout';
import { paymentById } from '@/api/formSubmission';
import { Button, buttonVariants } from '@/components/ui/button';

export async function getServerSideProps(context) {
  const { params } = context;
  const { payment } = params;
  return {
      props: { payment },
  };
}


export default function Page({payment}) {
  const router = useRouter();
  
  const paymentRef = use.getPaymentIds(payment);

  if(paymentRef === null){
    router.push("/404");
  }
  
  const contentRef = useRef();

  const [listInvoice, setInvoice] = useState(null);
  const getPaymentData = async () => {
    const {sessionID,invoiceID,id} = paymentRef;

    try {
      const response = await paymentById({id:id,invoice_id:invoiceID,session_id:sessionID});
      console.log(response);
        setInvoice(response.data)
    } catch (error) {
      
    }
    
  }

  const handleDownload = () => {
    const doc = new jsPDF('portrait', 'mm', 'a4');

    // Add Header
    const headerx = 80;
    const headery = 42;
    doc.setFontSize(18);
    doc.text('Order Details', headerx, headery); // x, y coordinates
    doc.setFontSize(12);
    doc.text(`Invoice Number: ${paymentRef.invoiceID}`, 70,headery+ 10);
    if (listInvoice) {
      doc.text(`Payment Id: ${listInvoice.paymentId}`, 60, headery+ 20);
    }

    // Define table dimensions
    const startX = 14; // Starting X position
    const startY = 70; // Starting Y position
    const rowHeight = 10; // Height of each row
    const columnWidths = [20, 80, 30, 30, 30]; // Widths of each column

    // Draw table header
    const headers = ['Item #', 'Product Name', 'Quantity', 'Price', 'Total'];
    doc.setFont("Helvetica", "bold");
    
    // Draw table header
    headers.forEach((header, index) => {
      const xPosition = startX + columnWidths.slice(0, index).reduce((a, b) => a + b, 0);
      doc.rect(xPosition, startY, columnWidths[index], rowHeight); // Draw header cell border
      doc.text(header, xPosition + 2, startY + 7); // Add header text
    });

    // Draw table rows
    if (listInvoice) {
      listInvoice.ProductList.forEach((product, index) => {
        const yPosition = startY + (index + 1) * rowHeight;

        // Draw borders for each cell
        doc.rect(startX, yPosition, columnWidths[0], rowHeight); // Index cell
        doc.rect(startX + columnWidths[0], yPosition, columnWidths[1], rowHeight); // Name cell
        doc.rect(startX + columnWidths[0] + columnWidths[1], yPosition, columnWidths[2], rowHeight); // Purchased Count cell
        doc.rect(startX + columnWidths[0] + columnWidths[1] + columnWidths[2], yPosition, columnWidths[3], rowHeight); // Price cell
        doc.rect(startX + columnWidths[0] + columnWidths[1] + columnWidths[2] + columnWidths[3], yPosition, columnWidths[4], rowHeight); // Total cell

        // Add text to each cell
        doc.text(String(index + 1), startX + 2, yPosition + 7); // Index
        doc.text(product.name, startX + columnWidths[0] + 2, yPosition + 7); // Product Name
        doc.text(String(product.purchasedCount), startX + columnWidths[0] + columnWidths[1] + 2, yPosition + 7); // Purchased Count
        doc.text(`$${Number(product.price).toFixed(2)}`, startX + columnWidths[0] + columnWidths[1] + columnWidths[2] + 2, yPosition + 7); // Price
        doc.text(`$${(Number(product.price) * Number(product.purchasedCount)).toFixed(2)}`, startX + columnWidths[0] + columnWidths[1] + columnWidths[2] + columnWidths[3] + 2, yPosition + 7); // Total
      });

      // Total Price Row
      const totalPrice = listInvoice.ProductList.reduce((sum, product) => sum + product.price * product.purchasedCount, 0);
      const totalYPosition = startY + (listInvoice.ProductList.length + 1) * rowHeight;

      // Draw borders for total price row
      //doc.rect(startX , totalYPosition, columnWidths[0], rowHeight); // Total label cell
      doc.rect(startX, totalYPosition,  columnWidths[0] + columnWidths[1] + columnWidths[2] + columnWidths[3] + columnWidths[4], rowHeight); // Total price cell

      // Add text for total price
      doc.text('Total Price', startX + 2, totalYPosition + 7);
      doc.text(`$${totalPrice.toFixed(2)}`, startX + columnWidths[1] + columnWidths[2] + columnWidths[3] + 22, totalYPosition + 7);
    }

    // Save the PDF
    doc.save('invoice.pdf');
  };

  useEffect(() => {
    getPaymentData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  return (
    <Layout > {
      <div className='section-main thankyou_page'>
        <div className="container">
          <div className='w-4xl m-auto text-center'>
            <h3 className=''>Thank You for Your Payment</h3>
            <p className='my-3'>Your order has been received and is now being processed.</p>
            <div className='flex justify-between mb-5'>
              <Link href={"/"} className={buttonVariants({ variant: "",className:"mr-[15px]"})}>Back To Home</Link>
              <Button type='button' onClick={handleDownload} className='btn btn--theme hover--theme'>Download Invoice</Button>
            </div>
          </div>
          <div className='invoice_box w-4xl m-auto' ref={contentRef}>
            <div className="order-details text-center">
              <h2>Order Details</h2>
              <p className='my-3 '><strong>Invoice Number:</strong> {paymentRef.invoiceID}</p>
              {listInvoice !== null? <> <p className='mb-5'> <strong>Payment Id:</strong> {listInvoice.paymentId}</p> </>:""}
            </div>
            {/* Products Table */}
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
              {listInvoice !== null ? <> 
                {listInvoice.ProductList.map((product,index) => (
                  <tr key={"product"+index}>
                      <td>{index+1}</td>
                      <td>{product.name}</td>
                      <td>{ Number(product.purchasedCount) }</td>
                      <td>${ Number(product.price).toFixed(2)}</td>
                      <td>${(Number(product.price) * Number(product.purchasedCount)).toFixed(2)}</td>
                  </tr>
              ))}
            
                <tr>
                  <td colspan="4"> <b>Totle Price</b> </td>
                  <td><b>${listInvoice.ProductList.reduce((sum, product) => sum + product.price * product.purchasedCount,0)}.00</b></td>
                </tr>
              </> :"" }
              
              </tbody>
            </table>
            <div className="text-center mt-7">
              <p>Check your email for the confirmation and details of your order.</p>
            </div>
          </div>
        </div>
      </div>
    }
    </Layout>
  );
};