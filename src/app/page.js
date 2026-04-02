import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Home() {
  const recentProjects = [
    { title: 'Smart Bin', description: 'IoT based waste management system.', category: 'Website', icon: '🗑️' },
    { title: 'Techcare', description: 'Healthcare appointment booking platform.', category: 'Website', icon: '🩺' },
    { title: 'Jumpstart', description: 'Crowdfunding platform for startups.', category: 'Website', icon: '🚀' },
  ];

  return (
    <div className="container">
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.greeting}>HI I'M MARK</h1>
          <p className={styles.intro}>
            I am passionate about technology and continuous learning. This portfolio highlights my skills, projects, and experiences in Information Technology.
          </p>
          <div className={styles.actionButtons}>
            <Link href="/projects" className="btn btn-primary">View Project</Link>
            <Link href="/contact" className="btn btn-secondary">Contact</Link>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <div className={styles.silhouette}>
            <Image src="/images/profileremovebg.png" alt="Mark Echavia" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className={styles.recentProjectsSection}>
        <h2 className="section-title">Recent Projects</h2>
        <p className={styles.sectionSubtitle}>Check out my recent work</p>
        
        <div className={styles.projectsGrid}>
          {recentProjects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              category={project.category}
              placeholderIcon={project.icon}
            />
          ))}
        </div>

        <div className={styles.moreProjectsContainer}>
          <Link href="/projects" className={styles.moreProjectsLink}>
            More Projects <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
