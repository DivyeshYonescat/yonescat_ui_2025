"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from "react";

import FloatingSVG from './NewsLetter/newslaterAnimation';

const NewsLetterSection = () => {
  const formRef = useRef(null);
    return (<>
    <section className="section-main bg-[#DFF1FF]">
        <div className="container">
            <div className="newsletter-inner">
                <div className="newsletter-text">
                    <div className="newsletter-txt">
                        <h3 className="">Ready To Get Started? Sign Up Now With Yonescat Is Easy, Fast And Free</h3>
                    </div>
                    <form ref={formRef} name="contactform"  onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-group">
                            <input type="email" name="email" id="email" autoComplete="off" className="form-control" placeholder="Your email address"
                            {
                                ...register("email", {
                                  required: {
                                    value:true,
                                    message:"Email is required"
                                  },
                                  pattern: {
                                    value:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                    message:"Enter valid email." 
                                  }
                                })
                            }
                            />
                        </div>
                        <FormError field={errors.email} />
                        <div>
                        { error && error.length > 0 && error.map((error,errorIndex)=> <div className="error text-start" key={errorIndex}> {error.message} </div>) }
                        </div>
                        <div className="input-group">
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn--theme hover--theme">Subscribe Now</button>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="newsletter-image">
                    <div className="newsletter-img d-none d-lg-block">
                        <FloatingSVG />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>);
};

export default NewsLetterSection;