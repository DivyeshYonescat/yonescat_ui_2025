"use client";
import { useState } from "react";
import Layout from "@/layout/Layout";
import Banner from "@/layout/Banner";



export default function Invoice() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return(<>
    <Layout>
      <Banner title={"Requested Invoices"} description={"Want to learn more about Yonescat, get a quote, or speak with an expert? Let us know what you are looking for and we’ll get back to you right away"} />
    </Layout>
  </>)
}