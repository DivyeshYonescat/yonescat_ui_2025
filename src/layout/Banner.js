const Banner = ({title, description, sortheader })=>{
  return (
    <>  
      <section className="banner">
        <div className="container">
          <div className={`banner-inner ${sortheader && "shot-banner-inner"}`}>
            <h2>{title}</h2>
            <p className="mt-[25px] max-w-[515px]">{description}</p>
          </div>
        </div>  
      </section>
    </>
  );
}

export default Banner;