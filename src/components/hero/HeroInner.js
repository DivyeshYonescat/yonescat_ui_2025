import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";


// Lazy load the CylinderScene component
// const Background = dynamic(() => import("@/components/Background"), { ssr: false });

const HeroInner = function ({title,  subtitle,  cta,  link,  note,  image,  background}) {
  return (
    <section className="hero-inner-main relative">
      <div className="container">
        <div className="hero-inner-section">
          <div className="hero-inner-text">
            {title && <h1 className="s-30 w-700 ">{title}</h1>}
            
            {subtitle && <div className="p-lg mt-3 mb-5" >{subtitle}</div>}
            
            {(cta && link) && <Link href={link} className="btn r-04 btn--theme hover--tra-black">{cta}</Link>}

            {note && <p className="p-sm btn-txt ico-15">{note}</p>}
          </div>
          { image &&
            <div className="hero-inner-image">
              <Image priority={true} width={723} height={1066} className={`img-fluid ${title}`} src={image} alt={title || subtitle || 'Yonescat Productions'} />
            </div>
          }
        </div>   
      </div>
    </section>
  );
}

export default HeroInner;