import Link from 'next/link'
import styles from './footer.module.scss'

const Footer = () => {
	return ( 
		<div className={styles.footer}>
			<Link href="https://github.com/FavianIbra">
				<i className="icon-github" title="Github"></i>
			</Link>
			<Link href="https://www.linkedin.com/in/favian-ibra-572bb7266/">
				<i className="icon-linkedin" title="Linkedin"></i>
			</Link>
		</div>
	);
}
 
export default Footer;