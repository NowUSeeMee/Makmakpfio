import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.brandCol}>
          <h3 className={styles.name}>Mark Echavia</h3>
          <p className={styles.role}>Student</p>
          <div className={styles.location}>
            <span className={styles.locationIcon}>📍</span>
            <span>Cordova, Cebu, Philippines</span>
          </div>
        </div>

        <div className={styles.linksRow}>
          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Pages</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Connect</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>

          <div className={styles.linkGroup}>
            <h4 className={styles.linkTitle}>Resources</h4>
            <a href="#" target="_blank" rel="noopener noreferrer">Github Boilerplates</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2026 MARK ECHAVIA. All rights reserved.</p>
      </div>
    </footer>
  );
}
