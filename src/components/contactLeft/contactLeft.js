"use client";
import Link from "next/link";
import Image from 'next/image';
const ContactLeft = ()=>{

  return (
    <>
      <div className="box-color-section">
        <div className="w-full">
          <h3 className="text-stone-100 mb-[30px]">Contact Information</h3>
          <div className='contact_list'>
            <div className='contact-box '>
              <Image className="white-image" src="/images/contact-icone/maps-and-flags.png" alt="address" width={25} height={25} />
              <address> {process.env.NEXT_PUBLIC_ADDRESS} </address>
            </div>
            <div className='contact-box'>
              <Image className="white-image" src="/images/contact-icone/smartphone-call.png" alt="address" width={25} height={25} />
              <Link  href={`tel:${process.env.NEXT_PUBLIC_PHONE_CODE}${process.env.NEXT_PUBLIC_PHONE}`} >{process.env.NEXT_PUBLIC_PHONE}</Link>
            </div>
            <div className='contact-box'>
              <Image className="white-image" src="/images/contact-icone/letter.png" alt="address" width={25} height={25} />
              <Link  href={`mail:${process.env.NEXT_PUBLIC_EMAIL}`} > {process.env.NEXT_PUBLIC_EMAIL}</Link>
            </div>
          </div>
          <ul className="flex w-full mt-3.5 float-start items-center">
            <li className="px-[5px] pl-0">
              <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                <Image className="white-image" src={"/images/main/media/facebook.svg"} alt="facebook" width={30} height={30} />
              </Link>
            </li>
            <li className="px-[5px]">
              <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                  <Image className="white-image" src={"/images/main/media/instagram.svg"} alt="instagram" width={30} height={30} />
              </Link>
            </li>
            <li className="px-[5px] pr-0">
              <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                  <Image className="white-image" src={"/images/main/media/youtube.svg"} alt="youtune" width={30} height={30} />
              </Link>
            </li>
            <li className="px-[5px]">
              <Link rel="nofollow"  href="#" aria-label={'Follow on x'}>
                <Image className="white-image" src={"/images/main/media/x.svg"}  alt="x" width={30} height={30} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ContactLeft;