            import Style from './portfolio.module.scss';
            import img1 from '../../../assets/imgs/1.png';
            import img2 from '../../../assets/imgs/2.png';
            import img3 from '../../../assets/imgs/3.png';
            import img4 from '../../../assets/imgs/4.png';
            import img5 from '../../../assets/imgs/5.png';
            import img6 from '../../../assets/imgs/6.png';

            function Portfolio (){
                return(
                    <section className={`${Style.portfolio} ${Style.section}`} id={Style.portfolio} id="Portfolio">
                    <div className={Style.container}>
                        <div className={Style.row}>
                            <div className={`${Style.sectionTitle} ${Style.padd}`}>
                                <h2>portfolio</h2>
                            </div>
                        </div>
                        <div className={Style.row}>
                            <div className={`${Style.portfolioHeading} ${Style.padd}`}>
                                <h2>my last projects:</h2>
                            </div>
                        </div>
                        <div className={Style.row}>
                            <div className={`${Style.portfolioItem} ${Style.padd}`}>
                                <div className={`${Style.portfolioItemInner} ${Style.shadowdark}`}>
                                    <div className={Style.portfolioImg}>
                                        <div>clock</div>
                                        <img src={img1}/>
                                    </div>
        
                                </div>
                            </div>
        
                            <div className={`${Style.portfolioItem} ${Style.padd}`}>
                                <div className={`${Style.portfolioItemInner} ${Style.shadowdark}`}>
                                    <div className={Style.portfolioImg}>
                                        <div>photo editor</div>
                                        <img src={img2}/>
                                    </div>
        
                                </div>
                            </div>
                            <div className={`${Style.portfolioItem} ${Style.padd}`}>
                                <div className={`${Style.portfolioItemInner} ${Style.shadowdark}`}>
                                    <div className={Style.portfolioImg}>
                                        <div>weather</div>
                                        <img src={img3}/>
                                    </div>
        
                                </div>
                            </div>
        
                            <div className={`${Style.portfolioItem} ${Style.padd}`}>
                                <div className={`${Style.portfolioItemInner} ${Style.shadowdark}`}>
                                    <div className={Style.portfolioImg}>
                                        <div>visa card</div>
                                        <img src={img4}/>
                                    </div>
        
                                </div>
                            </div>
        
                            <div className={`${Style.portfolioItem} ${Style.padd}`}>
                                <div className={`${Style.portfolioItemInner} ${Style.shadowdark}`}>
                                    <div className={Style.portfolioImg}>
                                        <div>music player</div>
                                        <img src={img5}/>
                                    </div>
        
                                </div>
                            </div>
        
                            <div className={`${Style.portfolioItem} ${Style.padd}`}>
                                <div className={`${Style.portfolioItemInner} ${Style.shadowdark}`}>
                                    <div className={Style.portfolioImg}>
                                       <div>ninja</div>
                                        <img src={img6}/>
                                    </div>
        
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                )
            }

        export default Portfolio;