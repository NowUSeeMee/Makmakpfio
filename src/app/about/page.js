import Image from 'next/image';
import styles from './page.module.css';

export default function About() {
  const technicalSkills = [
    "Basic Programming (HTML, CSS, JavaScript)",
    "Database Basics (MySQL)",
    "Microsoft Office (Word, Excel, PowerPoint)",
    "UI/UX Design Basics"
  ];

  const softSkills = [
    "Problem Solving",
    "Time Management",
    "Teamwork",
    "Communication",
    "Adaptability"
  ];

  const experiences = [
    {
      company: "Feeder Apparel Inc.",
      location: "FIT-LapuLapu, Ibo",
      period: "2020 - 2023"
    },
    {
      company: "Onsemi",
      location: "LapuLapu, Ibo",
      period: "2024 - 2025"
    },
    {
      company: "Metro Wear Inc.",
      location: "LapuLapu, Ibo",
      period: "2025 - 2026"
    }
  ];

  return (
    <div className="container">
      <section className={styles.profileHeader}>
        <div className={styles.headerBackground}>
          <Image src="/images/award_background.png" alt="Award Background" fill style={{ objectFit: 'cover', zIndex: 0 }} priority />
          <div className={styles.decorativeWave} style={{ zIndex: 1 }}></div>
        </div>
        <div className={styles.profileInfo}>
          <div className={styles.profileImage}>
            <Image src="/images/profile.jpg" alt="Profile" fill style={{ objectFit: 'cover' }} />
          </div>
          <h1 className={styles.name}>MARK ECHAVIA</h1>
          <p className={styles.role}>STUDENT</p>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <h2 className={styles.sectionHeading}>ABOUT ME</h2>
        <div className={`glass-panel ${styles.aboutContent}`}>
          <p>
            I am a dedicated IT student with a strong passion for web development and technology. I enjoy problem-solving and exploring new ideas to build practical and efficient solutions. Throughout my academic journey, I have built a foundation in front-end technologies and database management. 
          </p>
          <p style={{marginTop: '1rem'}}>
            Beyond writing code, I value collaboration and effective communication. I am constantly seeking opportunities to enhance my technical mindset, learn industry best practices, and contribute meaningfully to a team environment.
          </p>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className={styles.skillsSilhouette}>
          <Image src="/images/profileremovebg.png" alt="Skills Profile" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={styles.skillsContainer}>
          <h2 className={styles.sectionHeading}>SKILLS</h2>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3>Technical Skills</h3>
              <ul>
                {technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className={styles.skillCategory}>
              <h3>Soft Skills</h3>
              <ul>
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h2 className={styles.sectionHeading}>Experience:</h2>
        <div className={`glass-panel ${styles.experienceList}`}>
          {experiences.map((exp, index) => (
            <div className={styles.experienceItem} key={index}>
              <div className={styles.expDot}></div>
              <div className={styles.expContent}>
                <h3 className={styles.company}>{exp.company}</h3>
                <span className={styles.location}>- {exp.location}</span>
              </div>
              <div className={styles.period}>{exp.period}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
