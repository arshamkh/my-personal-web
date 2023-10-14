
import { useState } from 'react';
import Style from './contact.module.scss';

function Contact(){
    const [inpot , setinpot] =useState("")

    function send(){
        
    
    }


    return(
        <section className={`${Style.contact} ${Style.section}`} id={Style.contact} id="Contact">
        <div className={Style.container}>
            <div className={Style.row}>
                <div className={`${Style.sectionTitle} ${Style.padd}`}>
                    <h2>contact me</h2>
                </div>
            </div>
            <h3 className={`${Style.contactTitle} ${Style.padd}`}>Have you any Questions?</h3>
            <h4 className={`${Style.contactSubTitle} ${Style.padd}`}>im at your services</h4>
            <div className={Style.row}>
                <div className={`${Style.contactInfoItem} ${Style.padd}`}>
                    <div className={Style.icon}><i className={`Style.fa fa-phone`}></i></div>
                    <h4>call us on</h4>
                    <p>+98 9371661389</p>

                </div>
                    <div className={`${Style.contactInfoItem} ${Style.padd}`}>
                        <div className={Style.icon}><i className={`Style.fa fa-map-marker-alt`}></i></div>
                        <h4>office</h4>
                        <p>jordan</p>
                    </div>
                        <div className={`${Style.contactInfoItem} ${Style.padd}`}>
                            <div className={Style.icon}><i className={`Style.fa fa-envelope`}></i></div>
                            <h4>email</h4>
                            <p>arshamkhkh@yahoo.com</p>
                        </div>
                            <div className={`${Style.contactInfoItem} ${Style.padd}`}>
                                <div className={Style.icon}><i className={`Style.fa fa-globe-europe`}></i></div>
                                <h4>website</h4>
                                <p>www.domain.com</p>
                            </div>

                     
            </div>
            <h3 className={`${Style.contactTitle} ${Style.padd}`}>send me an email</h3>
            <h4 className={`${Style.contactSubTitle} ${Style.padd}`}>im very resposive to massages</h4>
            <div className={Style.row}>
                <div className={`${Style.contactForm} ${Style.padd}`}>
                    <div className={Style.row}>
                        <div className={`${Style.formItem} ${Style.col6} ${Style.padd}`}>
                            <div className={Style.formGroup}>
                                <input type="text" className={Style.formControl} placeholder="name"/>
                            </div>
                        </div>
                        
                        <div className={`${Style.formItem} ${Style.col6} ${Style.padd}`}>
                            <div className={Style.formGroup}>
                                <input type="email" className={Style.formControl} placeholder="email"/>
                            </div>
                        </div>
                    </div>
                    <div className={Style.row}>
                        <div className={`${Style.formItem} ${Style.col12} ${Style.padd}`}>
                            <div className={Style.formGroup}>
                                <input type="text" className={Style.formControl} placeholder="subject"/>
                            </div>
                        </div>
                    </div>
                    <div className={Style.row}>
                        <div className={`${Style.formItem} ${Style.col12} ${Style.padd}`}>
                            <div className={Style.formGroup}>
                                <textarea name="" className={Style.formControl} id="" placeholder="massage"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className={Style.row}>
                        <div className={`${Style.formItem} ${Style.col12} ${Style.padd}`}>
                            <button type="submit" className={Style.btn} onClick={send}> send message </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Contact;