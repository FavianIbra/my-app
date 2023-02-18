import React, { Component } from 'react';
import Toggle from "../Toggle";
import styles from "./project.module.scss"

export default class Projects extends Component {
	render() {
		const { projects } = this.props;
		const projectList = projects.map(project => {
			return (
				<Toggle key={project.id}
					render={({ on, toggle }) => (
						<div className={styles.project} >
							<div onClick={toggle} className={styles.link}>
								<div className={styles.summary}>
									{project.logo}
									<div className={styles.title}>
										<h4>
											{project.title}
										</h4>
									</div>
									<div className={styles.arrow}>
										<i className={on ? "icon-keyboard_arrow_up" : "icon-keyboard_arrow_down"}></i>
									</div>
								</div>
							</div>
							{on &&
								<div className={styles.info}>
									<div className={styles.icons}>
										{project.icons}
									</div>
									<p>
										{project.description}
									</p>
									<div className={styles.buttons}>
										{project.buttons}
									</div>
								</div>
							}
						</div>
					)}
				/> //end Toggle
			)
		});



		return (
			<div className={styles.list}>
				{projectList}
			</div>
		)
	}
}
