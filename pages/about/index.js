import React, { useState } from 'react'
import styles from './about.module.scss'

export default function About() {

  return (
    <div className="page-container">
      <div className={styles.about}>
        <p>Hello!</p>
        <p>Nama saya adalah Favian dan saya tinggal di Kota Malang, Jawa Timur, Indonesia.
          Saya adalah Software Engineer yang sedang menempuh pendidikan di SMK Telkom Malang.
          Saya duduk di bangku kelas 11 dengan pengambilan jurusan RPL
        </p>
      </div>

      <SkillsBox title="Dev">
          <Icon className="icon-html5" name="HTML5" />
          <Icon className="icon-css3" name="CSS3" />
          <Icon style={{ color: "#CC6699" }} className="icon-sass" name="SCSS" />
          <Icon className="icon-javascript" name="Javascript" />
          <Icon className="icon-typescript" name="Typescript" />
          <Icon className="icon-jquery" name="jQuery" />
          <Icon className="icon-react" name="React" />
          {/* <Icon className="icon-redux" name="Redux" /> */}
          <Icon className="icon-next-js" name="Next.js" />
          <Icon className="icon-node-js" name="Node.js" />
          <Icon className="icon-php" name="PHP" />
          <Icon className="icon-mysql" name="MySQL" />
          <Icon className="icon-mongodb" name="MongoDB" />
      </SkillsBox>

      {/* <SkillsBox title="Data">
          <Icon className="icon-mysql" name="MySQL" />
          <Icon className="icon-mongodb" name="MongoDB" />
          <Icon className="icon-firebase" name="Firebase" />
          <Icon className="icon-postgre" name="PostgreSQL" />
          <Icon className="icon-auth0" name="Auth0" />
          algolia
      </SkillsBox> */}

      <SkillsBox title="Design">
      <Icon className="icon-photoshop" name="Photoshop" />
          <Icon className="icon-lightroom" name="Lightroom" />
          <Icon className="icon-illustrator" name="Illustrator" />
          <Icon className="icon-xd" name="Experience Design" />
          <Icon className="icon-sketch" name="Sketch" style={{ color: "#F7B500" }} />
          <Icon className="icon-figma" name="Figma" />
      </SkillsBox>

      <SkillsBox title="Deploy">
        <Icon className="icon-netlify" name="Netlify" />
        <Icon className="icon-vercel" name="Vercel" style={{ color: '#fff' }} />
        <Icon className="icon-digitalocean" name="DigitalOcean" />
        <Icon className="icon-aws" name="AWS" />
        <Icon className="icon-heroku" name="Heroku" />
        <Icon className="icon-wpengine" name="WPEngine" />
      </SkillsBox>
    </div>
  );
}

function SkillsBox(props) {
  return (
    <div className={styles.skillsBox}>
      <h2>{props.title}</h2>
      <div>
        {props.children}
      </div>
    </div>
  )
}

function Icon(props) {

  const [iconText, setIconText] = useState(false);

  return (
    <div className={styles.icon_wrapper}>
      <i
        className={`${props.className} ${styles.icon}} ${iconText ? styles.icon_active : null}`}
        name={props.name}
        // onClick={() => setIconText(!iconText)}
        onMouseEnter={() => setIconText(true)}
        onMouseLeave={() => setIconText(false)}
      >
      </i>
      <span className={`${styles.icon_text} ${iconText ? styles.icon_text__active : null}`}>{props.name}</span>
    </div>
  )
}