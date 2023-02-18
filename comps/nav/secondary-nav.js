import styles from './secondary-nav.module.scss'
import {useEffect, useState} from 'react'

const SecondaryNav = () => {

    //set crt theme
    const [crt, setCrt] = useState(false)
    useEffect(() => {
      document.body.classList.toggle('crt', crt);
    },[crt])


    return ( 
        <div className={styles.secondary_nav}>
            <p>click me</p>
            <i className="icon-terminal" title="CRT mode" onClick={()=> setCrt(!crt)}></i>
        </div>
     );
}
 
export default SecondaryNav;