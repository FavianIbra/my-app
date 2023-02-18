import React, { useState } from 'react'
import styles from './about.module.scss'
import Link from 'next/link'

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

      <SkillsBox title="Kesukaan">
          <h1>Playing Games</h1>
          <h1>Pemandangan Alam</h1>
          <h1>Renang</h1>
          <h1>Coding (maybe) </h1>
      </SkillsBox>


      <SkillsBox title="Fav Food">
      <h1>Nasi Goreng</h1>
      <h1>Mie Goreng</h1>
      <h1>Sate</h1>
      </SkillsBox>

      <SkillsBox title="Sosmed">
         <h1><a href="https://github.com/FavianIbra">Github</a></h1>
         <h1><a href="https://www.instagram.com/fvnibra">Instagram</a></h1>
         <h1><a href="https://www.linkedin.com/in/favian-ibra-572bb7266/">Linkedin</a></h1>
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