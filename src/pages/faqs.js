import { useState } from "react";
import Image from "next/image";
import Layout from "@/layout/Layout";

export default function Home() {

  const [isActive, setIsActive] = useState({ status: false, key: 1, })
  const handleToggle = (key) => {
    if (isActive.key === key) { setIsActive({ status: false, }) }
    else { setIsActive({ status: true, key, }) }
  }

  return (<>
    <Layout>
      <div className="section-main">
        <div className="container">
          <div className="inner-page-title">
            <h2 className="mb-[25px]">Questions &amp; Answers</h2>
            <p>Some common questions we get about Yonescat</p>
          </div>
          <div className="faq-main">
            <ul className="accordion max-w-[1000px] m-auto">
              <li className={isActive.key == 1 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(1)}>
                <div className="accordion-thumb">
                  <h3 className={isActive.key == 1 && "font-bold"}>Getting Started</h3>
                  <div className="icon">
                    {isActive.key == 1 ? 
                    <> <Image className="minse" src="/images/main/svg/minus_icon.svg" width="30" height="30" alt="minse" />
                    </>:<>
                      <Image className="pluse" src="/images/main/svg/plus-svgrepo-com.svg" width="30" height="30" alt="pluse" />  
                    </>
                    }
                  </div>
                </div>
                <div className="accordion-panel" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4 className=""><span>1.</span> What is Yonescat and how does it work?</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus congue efficitur and ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus</p>
                    </div>
                  </div>

                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4><span>2.</span> What&apos;s inside the package?</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae purus and efficitur ipsum primis in cubilia laoreet tempor gravida congue laoreet turpis neque auctor</p>
                      <p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris undo lectus laoreet and gestas neque vitae auctor eros dolor luctus placerat a magna cursus congue magna impedit ligula congue maecenas </p>
                    </div>
                  </div>

                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4><span>3.</span> Which languages does Yonescat support?</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <ul className="simple-list">
                        <li className="list-item">
                          <p>Curabitur ac dapibus libero quisque eu congue tristique neque. Phasellus blandit tristique justo aliquam quisque aliquam vitae and molestie sapien nunc justo, aliquet non molestie purus tempor</p>
                        </li>
                        <li className="list-item">
                          <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum undo purus vitae efficitur ipsum primis in cubilia laoreet augue donec egestas luctus curabitur dapibus libero </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4><span>4.</span> Automate testing with API</h4>
                    </div>
                    <div className="faqs-2-answer ">
                      <p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum primis and augue ultrice ligula egestas suscipit lectus gestas integer congue a lectus porta phasellus neque blandit tristique</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className={isActive.key == 2 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(2)}>
                <div className="accordion-thumb ">
                  <h4 className={isActive.key == 2 && "font-bold"}>Manage your account</h4>
                  <div className="icon">
                    {isActive.key == 2 ? 
                    <> <Image className="minse" src="/images/main/svg/minus_icon.svg" width="30" height="30" alt="minse" />
                    </>:<>
                      <Image className="pluse" src="/images/main/svg/plus-svgrepo-com.svg" width="30" height="30" alt="pluse" />  
                    </>
                    }
                  </div>
                </div>
                <div className="accordion-panel" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4><span>1.</span> Sign up and manage your account</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <ol className="digit-list">
                        <li className="list-item">
                          <p>Curabitur ac dapibus libero eu congue tristique neque</p>
                        </li>
                        <li className="list-item">
                          <p>Sagittis congue augue egestas volutpat egestas</p>
                        </li>
                        <li className="list-item">
                          <p>An aliquam justo suscipit congue augue</p>
                        </li>
                        <li className="list-item">
                          <p>Gestas integer congue a lectus porta</p>
                        </li>
                      </ol>
                    </div>
                  </div>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4><span>2.</span> Manage account settings</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas magna ipsum vitae purus congue and efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus</p>
                    </div>
                  </div>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4><span>3.</span> Change language or location settings</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque pulvinar vitae auctor eros dolor luctus placerat a magna cursus congue magna nihil mpedit ligula congue. Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Viverra augue augue eget, dictum tempor diam. Sed pulvinar a consectetur nibh, imperdiet varius viverra</p>
                    </div>
                  </div>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question"> <h4><span>4.</span> Troubleshoot account issues</h4></div>
                    <div className="faqs-2-answer">
                      <p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum primis and augue ultrice ligula egestas suscipit lectus gestas integer congue a lectus porta phasellus neque blandit tristique</p>
                      <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae</p>
                      <p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas magna ipsum vitae efficitur purus congue ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus</p>
                    </div>
                  </div>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                      <h4><span>5.</span> Manage accessibility settings</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet at gestas neque cubilia vitae auctor eros dolor luctus placerat a magna cursus congue magna nihil mpedit ligula congue. Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis augue</p>
                      <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum and vitae purus efficitur ipsum primis in cubilia laoreet tempor gravida sapien cursus congue magna purus quaerat </p>
                    </div>
                  </div>
                </div>
              </li>
              <li  className={isActive.key == 3 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(3)}>
                <div className="accordion-thumb">
                  <h4 className={isActive.key == 3 && "font-bold"}>Purchase and License</h4>
                  <div className="icon">
                    {isActive.key == 3 ? 
                    <> <Image className="minse" src="/images/main/svg/minus_icon.svg" width="30" height="30" alt="minse" />
                    </>:<>
                      <Image className="pluse" src="/images/main/svg/plus-svgrepo-com.svg" width="30" height="30" alt="pluse" />  
                    </>
                    }
                  </div>
                </div>
                <div className="accordion-panel" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                        <h4><span>1.</span> How much does Yonescat cost?</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <p>An augue cubilia laoreet and magna suscipit egestas magna ipsum purus ipsum primis and augue ultrice ligula egestas suscipit lectus gestas integer congue a lectus porta phasellus neque blandit tristique</p>
                    </div>
                  </div>	
                </div>	
              </li>
              <li  className={isActive.key == 4 ? "accordion-item is-active" : "accordion-item"} onClick={() => handleToggle(4)}>
                <div className="accordion-thumb"> 
                  <h4 className={isActive.key == 4 && "font-bold"}>Policy, Safety &amp; Copyright</h4> 
                  <div className="icon">
                    {isActive.key == 4 ? 
                    <> <Image className="minse" src="/images/main/svg/minus_icon.svg" width="30" height="30" alt="minse" />
                    </>:<>
                      <Image className="pluse" src="/images/main/svg/plus-svgrepo-com.svg" width="30" height="30" alt="pluse" />  
                    </>
                    }
                  </div>
                </div>
                <div className="accordion-panel" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question"> <h4><span>1.</span> Copyright and rights management</h4></div>
                    <div className="faqs-2-answer">
                      <p>Sapien egestas, congue gestas posuere cubilia congue ipsum mauris lectus laoreet gestas neque pulvinar vitae auctor eros dolor luctus placerat a magna cursus congue magna nihil mpedit ligula congue. Maecenas gravida porttitor nunc, quis vehicula magna luctus tempor. Quisque vel laoreet turpis. Viverra augue augue eget, dictum tempor diam. Sed pulvinar a consectetur nibh, imperdiet varius viverra </p>
                    </div>
                  </div>	
                </div>	
              </li>
              <li  className={isActive.key == 5 ? "accordion-item acc-last-item is-active" : "accordion-item acc-last-item"} onClick={() => handleToggle(5)}>
                <div className="accordion-thumb"> 
                  <h4 className={isActive.key == 5 && "font-bold"}>Other Questions</h4>
                  <div className="icon">
                    {isActive.key == 5 ? 
                    <> <Image className="minse" src="/images/main/svg/minus_icon.svg" width="30" height="30" alt="minse" />
                    </>:<>
                      <Image className="pluse" src="/images/main/svg/plus-svgrepo-com.svg" width="30" height="30" alt="pluse" />  
                    </>
                    }
                  </div>
                </div>
                <div className="accordion-panel" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                  <div className="accordion-panel-item">
                    <div className="faqs-2-question">
                        <h4><span>1.</span> How do I get the error log?</h4>
                    </div>
                    <div className="faqs-2-answer">
                      <p>Sagittis congue augue egestas volutpat egestas magna suscipit egestas and magna ipsum vitae </p>
                      <p>Sagittis congue augue egestas volutpat egestas and magna suscipit egestas and magna ipsum vitae purus congue efficitur ipsum primis in cubilia laoreet augue egestas luctus donec and curabitur dapibus </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  </>)
}
