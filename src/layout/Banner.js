import Image from 'next/image';
import Link from 'next/link';

const Banner = ({title, description })=>{
  return (
    <>  
      <section className="banenr bg-[#7971e5]">
        <div className="container">
          <div className="banenr-inner">
            <h2>{title}</h2>
            <p className="mt-[25px] max-w-[515px]">{description}</p>
          </div>
        </div>  
      </section>
    </>
  );
}

export default Banner;