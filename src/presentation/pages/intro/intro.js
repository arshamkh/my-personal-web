import Style from './intro.module.scss';
import Arsham from '../../../assets/imgs/me.jpeg'
function Intro (){
    return(
        <section className={Style.home} id="home">
        <div className={Style.container}>
            <div className={Style.row}>
                <div className={`${Style.homeInfo} ${Style.padd}`}>
                    <h3 className={Style.hello}>Hello,my name is <span className="name">ARSHAM</span></h3>
                    <h3 className={Style.myProfession}>Im a <span className="typing">WEB DEVELOPER</span></h3>
                    <p>Im here to make your dreams come true </p>
                    <a href="#contact" className={`${Style.btn} ${Style.hireMe}`}>Hire me</a>
                </div>
                <div className={`${Style.homeImg} ${Style.padd}`}>
                    <img src={Arsham}/>
                </div>
            </div>
        </div>
    </section>
    )
}


export default Intro