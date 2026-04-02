import styles from './page.module.css';

export default function Contact() {
  return (
    <div className={`container ${styles.contactPage}`}>
      <section className={styles.headerSection}>
        <h1 className={styles.pageTitle}>Let's get in touch!</h1>
        <p className={styles.pageSubtitle}>You can reach me at the following</p>
      </section>

      <section className={styles.contactSection}>
        <div className={`glass-panel ${styles.contactCard}`}>
          <h2 className={styles.cardTitle}>Contact Me</h2>
          <p className={styles.cardDescription}>
            If you would like to get in touch with me for opportunities, collaborations, or inquiries, feel free to contact me using the information below.
          </p>

          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Name:</span>
              <span className={styles.infoValue}>Mark Echavia</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Email:</span>
              <a href="mailto:echaviamark29@gmail.com" className={styles.infoValueLink}>echaviamark29@gmail.com</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Phone:</span>
              <a href="tel:+639955544331" className={styles.infoValueLink}>+63 995 554 4331</a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Location:</span>
              <span className={styles.infoValue}>Cordova, Cebu, Philippines</span>
            </div>
          </div>

          <div className={styles.socialSection}>
            <p className={styles.socialText}>
              You can also connect with me through my social media or professional platforms.
            </p>
            <div className={styles.socialIcons}>
              {/* Using emojis as placeholders for sleek icons */}
              <a href="#" className={styles.iconLink} aria-label="LinkedIn">💼</a>
              <a href="#" className={styles.iconLink} aria-label="Github">🐙</a>
              <a href="#" className={styles.iconLink} aria-label="X (Twitter)">𝕏</a>
              <a href="#" className={styles.iconLink} aria-label="Facebook">📘</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
