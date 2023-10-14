import Style from './service.module.scss';

function Service (){
    return(
        <section className={`${Style.service} ${Style.section}`} id={Style.services} id="Service">
        <div className={Style.container}>
            <div className={Style.row}>
                <div className={`${Style.sectionTitle} ${Style.padd}`}>
                    <h2>service</h2>
                </div>
            </div>
            <div className={Style.row}>
                <div className={`${Style.serviceitem} ${Style.padd}`}>
                    <div className={Style.serviceiteminner}>
                        <div className={Style.icon}>
                            <i className={`Style.fa fa-mobile-alt`}></i>
                        </div>
                        <h4>html & html5</h4>
                        <p>ok, this is the first one in learning programming and developing a web So i this im good at in</p>

                    </div>
                </div>
                <div className={`${Style.serviceitem} ${Style.padd}`}>
                    <div className={Style.serviceiteminner}>
                        <div className={Style.icon}>
                            <i className={`Style.fa fa-laptop-code`}></i>
                        </div>
                        <h4>css & sass</h4>
                        <p>if you wanna have a greate design for your websites and apps you have to learn css and for better results you hav eto know about sass </p>
                        
                    </div>
                </div>  
                <div className={`${Style.serviceitem} ${Style.padd}`}>
                    <div className={Style.serviceiteminner}>
                        <div className={Style.icon}>
                            <i className={`Style.fa fa-pallet`}></i>
                        </div>
                        <h4>bootstrap</h4>
                        <p>bootstrap is a free css framework for better developing and i know it good</p>
                        
                    </div>
                </div>
                <div className={`${Style.serviceitem} ${Style.padd}`}>
                    <div className={Style.serviceiteminner}>
                        <div className={Style.icon}>
                            <i className={`Style.fa fa-code`}></i>
                        </div>
                        <h4>javascript</h4>
                        <p>and now its time to introduce one of the front-end developers programming and coding language,i think im not bad at it</p>
                        
                    </div>
                </div>
                <div className={`${Style.serviceitem} ${Style.padd}`}>
                    <div className={Style.serviceiteminner}>
                        <div className={Style.icon}>
                            <i className={`Style.fa fa-search`}></i>
                        </div>
                        <h4>vue.js</h4>
                        <p>this is a framework for front-end developers and it can improve your ability and you must learn it at well if you wanna </p>
                        
                    </div>
                </div>
                <div className={`${Style.serviceitem} ${Style.padd}`}>
                    <div className={Style.serviceiteminner}>
                        <div className={Style.icon}>
                            <i className={`Style.fa fa-bullhorn`}></i>
                        </div>
                        <h4>web design</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, nisi?</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Service;