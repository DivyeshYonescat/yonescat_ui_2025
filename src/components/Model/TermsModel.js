// components/Modal.js
import React from "react";


const TermsModel = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="overlay fixed top-[0] left-[0] w-full h-full bg-[rgba(0,_0,_0,_0.5)] right-[0] bottom-[0] flex" onClick={onClose}>
      <div className="modal bg-[white] p-[20px] rounded-[8px] w-[1000px] max-w-full [box-shadow:0_4px_8px_rgba(0,_0,_0,_0.1)] relative inline-block m-auto max-h-[530px] overflow-hidden"onClick={(e) => e.stopPropagation()}>
        <button className="closeButton absolute top-[15px] right-[15px] bg-none border-[none] text-[24px] !cursor-pointer text-[#000] p-0 leading-none m-0" onClick={onClose}>
          &times;
        </button>
        <div className="ModelBody float-left w-full bg-transparent p-[12px] overflow-x-hidden h-[500px]  overflow-y-scroll">
          <div className="w-full">
            {/* INNER PAGE TITLE */}
            <div className="inner-page-title">
              <h2>Terms of Service</h2>
              <p className="p-lg">This policy is effective as of 23th October 2022</p>
            </div>
            {/* TEXT BLOCK */}
            <div className="txt-block legal-info">
              <p>These Terms govern</p>
              <ul className="simple-list">
                <li class>the use of this Website, and,</li>  
                <li class>any other related Agreement or legal relationship with the Owner</li>  
              </ul>
              <p>in a legally binding way. Capitalised words are defined in the relevant dedicated section of this document.</p>
              <p>The User must read this document carefully.</p>

              <p>This Website is provided by:</p>
              <p>Ugli Campus, 56 Wood Ln, White City Living, London W12 7SB, United Kingdom</p>
              <p><b>Owner contact email</b>: admin@yonescat.com</p>
              <p>The following documents are incorporated by reference into these Terms:</p>
              <ul className="simple-list">
                <li class>Any CVs sent to any member of our team on a speculative basis will not be recognised and we will not accept liability for any fee or commission should we subsequently employ a candidate who applied to us directly or was introduced by an instructed agency that may also have been submitted speculatively by an uninstructed agency.</li>
              </ul>  

              {/* Title */}
              <h4 >What the User should know at a glance</h4>
              {/* Text */}
              <ul className="simple-list">
                <li class>Please note that some provisions in these Terms may only apply to certain categories of Users. In particular, certain provisions may only apply to Consumers or to those Users that do not qualify as Consumers. Such limitations are always explicitly mentioned within each affected clause. In the absence of any such mention, clauses apply to all Users.</li>
              </ul>  
              
              {/* Title */}
              <h4 >TERMS OF USE</h4>
              {/* Text */}
              <p>Unless otherwise specified, the terms of use detailed in this section apply generally when using this Website.</p>
              <p>Single or additional conditions of use or access may apply in specific scenarios and in such cases are additionally indicated within this document.</p>
              <p>By using this Website, Users confirm to meet the following requirements:</p>
              <ul className="simple-list">
                <li class>There are no restrictions for Users in terms of being Consumers or Business Users</li>
              </ul>

              {/* Small Title */}
              <h5 >Content on this Website</h5>                  
              <p>Unless where otherwise specified or clearly recognisable, all content available on this Website is owned or provided by the Owner or its licensors.</p>
              <p>The Owner undertakes its utmost effort to ensure that the content provided on this Website infringes no applicable legal provisions or third-party rights. However, it may not always be possible to achieve such a result.</p>
              <p>In such cases, without prejudice to any legal prerogatives of Users to enforce their rights, Users are kindly asked to preferably report related complaints using the contact details provided in this document.</p>

              <h5 >Rights regarding content on this Website - All rights reserved</h5> 

              <p>The Owner holds and reserves all intellectual property rights for any such content.</p>
              <p>Users may not, therefore, use such content in any way that is not necessary or implicit in the proper use of the Service.</p>
              <p>In particular, but without limitation, Users may not copy, download, share (beyond the limits set forth below), modify, translate, transform, publish, transmit, sell, sublicence, edit, transfer/assign to third parties or create derivative works from the content available on this Website, nor allow any third party to do so through the User or their device, even without the User&apos;s knowledge.</p>
              <p>Where explicitly stated on this Website, the User may download, copy and/or share some content available through this Website for its sole personal and non-commercial use and provided that the copyright attributions and all the other attributions requested by the Owner are correctly implemented. Any applicable statutory limitation or exception to copyright shall stay unaffecte</p>

              <h5 >Access to external resources</h5>
              <p>Through this Website Users may have access to external resources provided by third parties. Users acknowledge and accept that the Owner has no control over such resources and is therefore not responsible for their content and availability.</p>
              <p>Conditions applicable to any resources provided by third parties, including those applicable to any possible grant of rights in content, result from each such third parties’ terms and conditions or, in the absence of those, applicable statutory law.</p>

              <h5 >Acceptable use</h5>                 
              <p> This Website and the Service may only be used within the scope of what they are provided for, under these Terms and applicable law. </p>
              <p> Users are solely responsible for making sure that their use of this Website and/or the Service violates no applicable law, regulations or third-party rights </p>
              <p> Therefore, <b>the Owner reserves the right to take any appropriate measure to protect its legitimate interests including by denying Users access to this Website or the Service, terminating contracts, reporting any misconduct performed through this Website or the Service to the competent authorities – such as judicial or administrative authorities - whenever Users engage or are suspected to engage in any of the following activities:</b>  </p>
              <ul className="simple-list">
                <li>violate laws, regulations and/or these Terms;</li>
                <li>infringe any third-party rights;</li>
                <li>considerably impair the Owner’s legitimate interests;</li>
                <li>offend the Owner or any third party.</li>
              </ul>


              {/* Title */}
              <h4 >Liability and indemnification</h4>
              {/* Text */}
              <p> Unless otherwise explicitly stated or agreed with Users, the Owner’s liability for damages in connection with the execution of the Agreement shall be excluded, limited and/or reduced to the maximum extent permitted by applicable law. </p>

              <h5 >Indemnification</h5>
              <p>The User agrees to indemnify and hold the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners and employees harmless from and against any claim or demand ⁠— including but not limited to lawyer&apos;s fees and costs ⁠— made by any third party due to or in relation with any culpable violation of these Terms, third-party rights or statutory provisions connected to the use of the Service by the User or its affiliates, officers, directors, agents, co-branders, partners and employees to the extent allowed by applicable law.</p>

              <h5 > Limitation of liability </h5>
              <p>Unless otherwise explicitly stated and without prejudice to applicable law, Users shall have no right to claim damages against the Owner (or any natural or legal person acting on its behalf).</p>
              <p>This does not apply to damages to life, health or physical integrity, damages resulting from the breach of material contractual obligations such as any obligation strictly necessary to achieve the purpose of the contract, and/or damages resulting from intent or gross negligence, as long as this Website has been appropriately and correctly used by the User.</p>
              <p>Unless damages have been caused by way of intent or gross negligence, or they affect life, health or physical integrity, the Owner shall only be liable to the extent of typical and foreseeable damages at the moment the contract was entered into.</p>
              <p>In any event of liability, the compensation may not exceed the total payments that have been, will be or would be received by the Owner from the User based on the contract over a period of 12 months, or the period of the duration of the Agreement, if shorter.</p>

              <h5 > Australian Users </h5>
              <h5 > Limitation of liability</h5>
              <p>Nothing in these Terms excludes, restricts or modifies any guarantee, condition, warranty, right or remedy which the User may have under the Competition and Consumer Act 2010 (Cth) or any similar State and Territory legislation and which cannot be excluded, restricted or modified (non-excludable right). To the fullest extent permitted by law, our liability to the User, including liability for a breach of a non-excludable right and liability which is not otherwise excluded under these Terms of Use, is limited, at the Owner’s sole discretion, to the re-performance of the services or the payment of the cost of having the services supplied again.</p>

              <h5 > US Users </h5>
              <h5 > Disclaimer of Warranties</h5>
              <p>This Website is provided strictly on an “as is” and “as available” basis. Use of the Service is at Users’ own risk. To the maximum extent permitted by applicable law, the Owner expressly disclaims all conditions, representations, and warranties — whether express, implied, statutory or otherwise, including, but not limited to, any implied warranty of merchantability, fitness for a particular purpose, or non-infringement of third-party rights. No advice or information, whether oral or written, obtained by the User from the Owner or through the Service will create any warranty not expressly stated herein.</p>
              <p>Without limiting the foregoing, the Owner, its subsidiaries, affiliates, licensors, officers, directors, agents, co-branders, partners, suppliers and employees do not warrant that the content is accurate, reliable or correct; that the Service will meet Users’ requirements; that the Service will be available at any particular time or location, uninterrupted or secure; that any defects or errors will be corrected; or that the Service is free of viruses or other harmful components. Any content downloaded or otherwise obtained through the use of the Service is downloaded at Users&apos; own risk and Users shall be solely responsible for any damage to Users’ computer system or mobile device or loss of data that results from such download or Users’ use of the Service.</p>
              <p>The Owner does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the Service or any hyperlinked website or service, and the Owner shall not be a party to or in any way monitor any transaction between Users and third-party providers of products or services.</p>
              <p>The Service may become inaccessible or it may not function properly with Users’ web browser, mobile device, and/or operating system. The owner cannot be held liable for any perceived or actual damages arising from Service content, operation, or use of this Service.</p>
              <p>Federal law, some states, and other jurisdictions, do not allow the exclusion and limitations of certain implied warranties. The above exclusions may not apply to Users. This Agreement gives Users specific legal rights, and Users may also have other rights which vary from state to state. The disclaimers and exclusions under this agreement shall not apply to the extent prohibited by applicable law.</p>

              <h5 > Limitations of liability</h5>
              <p>To the maximum extent permitted by applicable law, in no event shall the Owner, and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers and employees be liable for:</p>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item"> any indirect, punitive, incidental, special, consequential or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data or other intangible losses, arising out of or relating to the use of, or inability to use, the Service; and </li>
                <li className="list-item">any damage, loss or injury resulting from hacking, tampering or other unauthorised access or use of the Service or User account or the information contained therein;</li>
                <li className="list-item">any errors, mistakes, or inaccuracies of content;</li>
                <li className="list-item">personal injury or property damage, of any nature whatsoever, resulting from User access to or use of the Service;</li>
                <li className="list-item">any unauthorised access to or use of the Owner’s secure servers and/or any and all personal information stored therein;</li>
                <li className="list-item">any interruption or cessation of transmission to or from the Service;</li>
                <li className="list-item">any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service;</li>
                <li className="list-item">any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service; and/or</li>
                <li className="list-item">the defamatory, offensive, or illegal conduct of any User or third party. In no event shall the Owner, and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers and employees be liable for any claims, proceedings, liabilities, obligations, damages, losses or costs in an amount exceeding the amount paid by User to the Owner hereunder in the preceding 12 months, or the period of duration of this agreement between the Owner and User, whichever is shorte</li>                    
              </ul>
              <p>This limitation of liability section shall apply to the fullest extent permitted by law in the applicable jurisdiction whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if the User has been advised of the possibility of such damage.</p>
              <p>Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, therefore the above limitations or exclusions may not apply to the User. The terms give User specific legal rights, and User may also have other rights which vary from jurisdiction to jurisdiction. The disclaimers, exclusions, and limitations of liability under the terms shall not apply to the extent prohibited by applicable law.</p>
              {/* Small Title */}

              <h5 > Indemnification</h5>
              <p>The User agrees to defend, indemnify and hold the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers and employees harmless from and against any and all claims or demands, damages, obligations, losses, liabilities, costs or debt, and expenses, including, but not limited to, legal fees and expenses, arising from</p>
              {/* List */}
              <ul className="simple-list">
                <li className="list-item">User’s use of and access to the Service, including any data or content transmitted or received by User; </li>
                <li className="list-item">User’s violation of these terms, including, but not limited to, User’s breach of any of the representations and warranties set forth in these terms;</li>
                <li className="list-item">User’s violation of any third-party rights, including, but not limited to, any right of privacy or intellectual property rights;</li>
                <li className="list-item">User’s violation of any statutory law, rule, or regulation;</li>
                <li className="list-item">any content that is submitted from User’s account, including third party access with User’s unique username, password or other security measure, if applicable, including, but not limited to, misleading, false, or inaccurate information;</li>
                <li className="list-item">User’s willful misconduct; or</li>
                <li className="list-item">statutory provision by User or its affiliates, officers, directors, agents, co-branders, partners, suppliers and employees to the extent allowed by applicable law.</li>
              </ul>

              <h4 >Common provisions</h4>
              <h5 >No Waiver</h5>
              <p>The Owner’s failure to assert any right or provision under these Terms shall not constitute a waiver of any such right or provision. No waiver shall be considered a further or continuing waiver of such term or any other term.</p>

              <h5 >Service interruption</h5>
              <p>To ensure the best possible service level, the Owner reserves the right to interrupt the Service for maintenance, system updates or any other changes, informing the Users appropriately.</p>
              <p>Within the limits of law, the Owner may also decide to suspend or discontinue the Service altogether. If the Service is discontinued, the Owner will cooperate with Users to enable them to withdraw Personal Data or information and will respect Users&apos; rights relating to continued product use and/or compensation, as provided for by applicable law.</p>
              <p>Additionally, the Service might not be available due to reasons outside the Owner’s reasonable control, such as “force majeure” events (infrastructural breakdowns or blackouts etc.).</p>

              <h5 >Service reselling</h5>
              <p>Users may not reproduce, duplicate, copy, sell, resell or exploit any portion of this Website and of its Service without the Owner’s express prior written permission, granted either directly or through a legitimate reselling program</p>

              <h5 >Privacy policy</h5>
              <p>To learn more about the use of their Personal Data, Users may refer to the privacy policy of this Website.</p>
              
              <h5 >Intellectual property rights</h5>
              <p>Without prejudice to any more specific provision of these Terms, any intellectual property rights, such as copyrights, trademark rights, patent rights and design rights related to this Website are the exclusive property of the Owner or its licensors and are subject to the protection granted by applicable laws or international treaties relating to intellectual property.</p>
              <p>All trademarks — nominal or figurative — and all other marks, trade names, service marks, word marks, illustrations, images, or logos appearing in connection with this Website are, and remain, the exclusive property of the Owner or its licensors and are subject to the protection granted by applicable laws or international treaties related to intellectual property.</p>

              <h5 >Changes to these Terms</h5>
              <p>The Owner reserves the right to amend or otherwise modify these Terms at any time. In such cases, the Owner will appropriately inform the User of these changes</p>
              <p>Such changes will only affect the relationship with the User from the date communicated to Users onwards.</p>
              <p><b>The continued use of the Service will signify the User’s acceptance of the revised Terms.</b></p>
              <p>If Users do not wish to be bound by the changes, they must stop using the Service and may terminate the Agreement.</p>
              <p>The applicable previous version will govern the relationship prior to the User&apos;s acceptance. The User can obtain any previous version from the Owner.</p>
              <p>If legally required, the Owner will notify Users in advance of when the modified Terms will take effect.</p>

              <h4 >Assignment of contract</h4>
              {/* Text */}
              <p> The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these Terms, taking the User’s legitimate interests into account. Provisions regarding changes of these Terms will apply accordingly. </p>
              <p>Users may not assign or transfer their rights or obligations under these Terms in any way, without the written permission of the Owner.</p>

              <h4 >Contacts</h4>
              {/* Text */}
              <p>All communications relating to the use of this Website must be sent using the contact information stated in this document</p>

              <h4 >Severability</h4> 
              <p>Should any provision of these Terms be deemed or become invalid or unenforceable under applicable law, the invalidity or unenforceability of such provision shall not affect the validity of the remaining provisions, which shall remain in full force and effect.</p>
              <h5 >EU Users</h5>
              {/* Text */}
              <p>Should any provision of these Terms be or be deemed void, invalid or unenforceable, the parties shall do their best to find, in an amicable way, an agreement on valid and enforceable provisions thereby substituting the void, invalid or unenforceable parts. </p>
              {/* Text */}
              <p>In case of failure to do so, the void, invalid or unenforceable provisions shall be replaced by the applicable statutory provisions, if so permitted or stated under the applicable law.</p>
              <p>Without prejudice to the above, the nullity, invalidity or impossibility to enforce a particular provision of these Terms shall not nullify the entire Agreement, unless the severed provisions are essential to the Agreement, or of such importance that the parties would not have entered into the contract if they had known that the provision would not be valid, or in cases where the remaining provisions would translate into an unacceptable hardship on any of the parties.</p>
              {/* Small Title */}

              <h5 >US Users</h5>
              {/* Text */}
              <p>Any such invalid or unenforceable provision will be interpreted, construed and reformed to the extent reasonably required to render it valid, enforceable and consistent with its original intent. These Terms constitute the entire Agreement between Users and the Owner with respect to the subject matter hereof, and supersede all other communications, including but not limited to all prior agreements, between the parties with respect to such subject matter. These Terms will be enforced to the fullest extent permitted by law. </p>
              {/* Title */}
              <h4 >Governing law</h4>
              <p>These Terms are governed by the law of the place where the Owner is based, as disclosed in the relevant section of this document, without regard to conflict of laws principles.</p>

              <h5 >Prevalence of national law</h5>
              <p>However, regardless of the above, if the law of the country that the User is located in provides for higher applicable consumer protection standards, such higher standards shall prevail.</p>

              <h5 >Venue of jurisdiction</h5>
              <p> The exclusive competence to decide on any controversy resulting from or connected to these Terms lies with the courts of the place where the Owner is based, as displayed in the relevant section of this document. </p>

              <h5 >Exception for Consumers in Europe</h5>
              <p> The above does not apply to any Users that qualify as European Consumers, nor to Consumers based in the United Kingdom, Switzerland, Norway or Iceland. </p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsModel;
