import Style from './about.module.scss';

function About (){
    return(
        <section className={`${Style.about} ${Style.section}`} id="about">
        <div className={Style.container}>
            <div className={Style.row}>
                <div className={`${Style.sectionTitle} ${Style.padd}`}>
                    <h2>About me</h2>
                </div>
            </div>
            <div className={Style.row}>
                <div className={`${Style.aboutContent} ${Style.padd}`}>
                    <div className={Style.row}>
                        <div className={`${Style.aboutText} ${Style.padd}`}>
                            <h3>Im Arsham <span>Web Developer</span></h3>
                            <p>I'm a front-end developer. interested in code and programming.
                                Although my field of study was civil engineering, but after passing the
                                programming units, I became very interested in this field and started
                                learning. I am interested in learning and wanting to progress. I feel that
                                programming can be a good way for me to achieve my goals</p>
                        </div>
                    </div>
                    <div className={Style.row}>
                        <div className={`${Style.personalInfo} ${Style.padd}`}>
                            <div className={Style.row}>
                                <div className={`${Style.infoItem} ${Style.padd}`}>
                                    <p>birthday: <span>14 march 2002</span></p>
                                </div>
                                <div className={`${Style.infoItem} ${Style.padd}`}>
                                    <p>age: <span> 21 </span></p>
                                </div>
                                <div className={`${Style.infoItem} ${Style.padd}`}>
                                    <p>website: <span>www.me.ir</span></p>
                                </div>
                                <div className={`${Style.infoItem} ${Style.padd}`}>
                                    <p>email: <span>www.arshamkhkh@yahoo.com</span></p>
                                </div>
                                <div className={`${Style.infoItem} ${Style.padd}`}>
                                    <p>phone: <span>+98 9371661389</span></p>
                                </div>
                                <div className={`${Style.infoItem} ${Style.padd}`}>
                                    <p>city: <span>tehran</span></p>
                                </div>
                            </div>
                            <div className={Style.row}>
                                <div className={`${Style.buttons} ${Style.padd}`}>
                                    <a href="#" className={Style.btn}>download cv</a>
                                    <a href="#contact" className={Style.btn}>HIre me</a>
                                </div>
                            </div>
                        </div>
                        <div className={`${Style.skills} ${Style.padd}`}>
                            <div className={Style.row}>
                                <div className={`${Style.skillItem} ${Style.padd}`}>
                                    <h5>CSS</h5>
                                    <div className={Style.progress}>
                                        <div className={Style.progressIn}></div>
                                        <div className={Style.skillpercent}>93%</div>
                                    </div>
                                </div>
                                <div className={`${Style.skillItem} ${Style.padd}`}>
                                    <h5>js</h5>
                                    <div className={Style.progress}>
                                        <div className={Style.progressIn2}></div>
                                        <div className={Style.skillpercent}>80%</div>
                                    </div>
                                </div>
                                <div className={`${Style.skillItem} ${Style.padd}`}>
                                    <h5>vue.js</h5>
                                    <div className={Style.progress}>
                                        <div className={Style.progressIn3}></div>
                                        <div className={Style.skillpercent}>65%</div>
                                    </div>
                                </div>
                                <div className={`${Style.skillItem} ${Style.padd}`}>
                                    <h5>HTML</h5>
                                    <div className={Style.progress}>
                                        <div className={Style.progressIn4} ></div>
                                        <div className={Style.skillpercent}>98%</div>
                                    </div>
                                </div>
                                <div className={`${Style.skillItem} ${Style.padd}`}>
                                    <h5>bootstrap</h5>
                                    <div className={Style.progress}>
                                        <div className={Style.progressIn5} ></div>
                                        <div className={Style.skillpercent}>85%</div>
                                    </div>
                                </div>
                                <div className={`${Style.skillItem} ${Style.padd}`}>
                                    <h5>react.js</h5>
                                    <div className={Style.progress}>
                                        <div className={Style.progressIn6} ></div>
                                        <div className={Style.skillpercent}>65%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${Style.row} ${Style.rows}`}>
                        <div className={`${Style.education} ${Style.padd}`}>
                            <h3 className={Style.title}>EDUCATION</h3>
                            <div className={Style.row}>
                                <div className={`${Style.timelinebox} ${Style.padd}`}>
                                    <div className={`${Style.timeline} ${Style.shadowdark}`}>
                                        <div className={Style.timelineitem}>
                                            <div className={Style.circledot}></div>
                                                <h3 className={Style.timelinedate}>
                                                    <i className={`Style.fa fa-calendar`}></i>
                                                    2013-2015
                                                </h3>
                                                <h4 className={Style.timelineTitle}>
                                                    master in computer science
                                                </h4>
                                                <p className={Style.timelineText}>
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus laboriosam beatae odit dolor obcaecati labore ea rerum? Saepe ipsa ullam, autem sed quas aliquid quod facilis, pariatur ipsum enim explicabo.
                                                </p>
                                            </div>
                                            <div className={Style.timelineitem}>
                                                <div className={Style.circledot}></div>
                                                    <h3 className={Style.timelinedate}>
                                                        <i className={`Style.fa fa-calendar`}></i>
                                                        2013-2015
                                                    </h3>
                                                    <h4 className={Style.timelineTitle}>
                                                        master in computer science
                                                    </h4>
                                                    <p className={Style.timelineText}>
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus laboriosam beatae odit dolor obcaecati labore ea rerum? Saepe ipsa ullam, autem sed quas aliquid quod facilis, pariatur ipsum enim explicabo.
                                                    </p>
                                                </div>
                                                <div className={Style.timelineitem}>
                                                    <div className={Style.circledot}></div>
                                                        <h3 className={Style.timelinedate}>
                                                            <i className={`Style.fa fa-calendar`}></i>
                                                            2013-2015
                                                        </h3>
                                                        <h4 className={Style.timelineTitle}>
                                                            master in computer science
                                                        </h4>
                                                        <p className={Style.timelinTtext}>
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus laboriosam beatae odit dolor obcaecati labore ea rerum? Saepe ipsa ullam, autem sed quas aliquid quod facilis, pariatur ipsum enim explicabo.
                                                        </p>
                                                    </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`${Style.experience} ${Style.padd}`}>
                                <h3 className={Style.title}>EXPERIENCE</h3>
                                <div className={Style.row}>
                                    <div className={`${Style.timelinebox} ${Style.padd}`}>
                                        <div className={`${Style.timeline} ${Style.shadowdark}`}>
                                            <div className={Style.timelineitem}>
                                                <div className={Style.circledot}></div>
                                                    <h3 className={Style.timelinedate}>
                                                        <i className={`Style.fa fa-calendar`}></i>
                                                        2013-2015
                                                    </h3>
                                                    <h4 className={Style.timelineTitle}>
                                                        master in computer science
                                                    </h4>
                                                    <p className={Style.timelineText}>
                                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus laboriosam beatae odit dolor obcaecati labore ea rerum? Saepe ipsa ullam, autem sed quas aliquid quod facilis, pariatur ipsum enim explicabo.
                                                    </p>
                                                </div>
                                                <div className={Style.timelineitem}>
                                                    <div className={Style.circledot}></div>
                                                        <h3 className={Style.timelinedate}>
                                                            <i className={`Style.fa fa-calendar`}></i>
                                                            2013-2015
                                                        </h3>
                                                        <h4 className={Style.timelineTitle}>
                                                            master in computer science
                                                        </h4>
                                                        <p className={Style.timelineText}>
                                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus laboriosam beatae odit dolor obcaecati labore ea rerum? Saepe ipsa ullam, autem sed quas aliquid quod facilis, pariatur ipsum enim explicabo.
                                                        </p>
                                                    </div>
                                                    <div className={Style.timelineitem}>
                                                        <div className={Style.circledot}></div>
                                                            <h3 className={Style.timelinedate}>
                                                                <i className={`Style.fa fa-calendar`}></i>
                                                                2013-2015
                                                            </h3>
                                                            <h4 className={Style.timelineTitle}>
                                                                master in computer science
                                                            </h4>
                                                            <p className={Style.timelineText}>
                                                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus laboriosam beatae odit dolor obcaecati labore ea rerum? Saepe ipsa ullam, autem sed quas aliquid quod facilis, pariatur ipsum enim explicabo.
                                                            </p>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            
            </div>
    </section>
    )
}

export default About;