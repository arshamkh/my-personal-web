import Intro from '../intro/intro';
import About from '../about/about';
import Service from '../service/service';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
import Style from './home.module.scss';
import Daynight from '../../layouts/components/content/switcher/switcher';

function Home () {
    return (  
        <div className={Style.fragment}>
            <div className={Style.container}>
            <Intro/>
            <About/>
            <Service/>
            <Portfolio/>
            <Contact/>
            <Daynight/>
            
            </div>
        </div>
    )
}
 
export default Home;