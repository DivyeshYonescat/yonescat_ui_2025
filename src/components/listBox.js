import Image from "next/image";


export default function ListBox({ListArray}){
  return(<>
    {ListArray.map((item,index)=> (
    <div key={`box-section-${index}`} className="box-image-sub-page">
      <Image priority={true} src={`${item.listimg}`} width={50} height={50} alt="Easier upgrades" />
      <p className="box-image-text-sub-page">{item.title}</p>
    </div>
    ))}
  </>)
}