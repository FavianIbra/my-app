import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
	return ( 
		<div className={styles.footer}>
			<Link href="https://github.com/AceGK">
				<i className="icon-github" title="Github"></i>
			</Link>
			<Link href="https://www.linkedin.com/in/acekisch/">
				<i className="icon-linkedin" title="Linkedin"></i>
			</Link>
		</div>
	);
}
 
export default Footer;