import Styles from './content.module.scss';

function Content ({children}){
    return(
        <div className={Styles.container}>{children}</div>
    )
}
export default Content;