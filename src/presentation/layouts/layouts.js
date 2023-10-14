import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import Content from "./components/content/content";
import Switcher from './components/content/switcher/switcher'
import styles from "./layout.module.scss";


function Layout ({children}){
    return(
        <div className={styles.container}>
        <Sidebar/>
        <Content>{children}</Content>
        <Switcher/>

        </div>
    )
}
export default Layout;