import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, category, placeholderIcon }) {
  return (
    <div className={`glass-panel ${styles.card}`}>
      <div className={styles.imagePlaceholder}>
        <div className={styles.placeholderIcon}>{placeholderIcon || '🏔️'}</div>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>Description:<br/>{description}</p>
        <span className={styles.categoryBadge}>[{category}]</span>
      </div>
    </div>
  );
}
