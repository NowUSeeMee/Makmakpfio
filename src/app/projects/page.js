'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import styles from './page.module.css';

export default function Projects() {
  const allProjects = [
    { title: 'Smart Bin', description: 'IoT based waste management system.', category: 'Websites', icon: '🗑️' },
    { title: 'Techcare', description: 'Healthcare appointment booking platform.', category: 'Websites', icon: '🩺' },
    { title: 'Jumpstart', description: 'Crowdfunding platform for startups.', category: 'Websites', icon: '🚀' },
    { title: 'Quiz App', description: 'Interactive learning application for students.', category: 'Web Apps', icon: '📝' },
    { title: 'Monkey', description: 'E-commerce website for clothing brand.', category: 'Websites', icon: '👕' },
    { title: 'Jovet Kulafu', description: 'Web application for inventory management.', category: 'Web Apps', icon: '📦' },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Websites', 'Web Apps'];

  const filteredProjects = allProjects.filter(project => {
    const matchesFilter = activeFilter === 'All' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className={`container ${styles.projectsPage}`}>
      <section className={styles.headerSection}>
        <h1 className={styles.pageTitle}>MY PROJECTS</h1>
        <p className={styles.pageDescription}>
          My projects showcase the skills and knowledge I have developed in Information Technology and reflect my ability to create practical solutions.
        </p>
      </section>

      <section className={styles.controlsSection}>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>🔍</span>
          <input 
            type="text" 
            placeholder="Search Projects..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchInput}
          />
        </div>
        <div className={styles.filterGroup}>
          {filters.map(filter => (
            <button 
              key={filter} 
              className={`${styles.filterBtn} ${activeFilter === filter ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.gridSection}>
        {filteredProjects.length > 0 ? (
          <div className={styles.projectsGrid}>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                title={project.title}
                description={project.description}
                category={project.category}
                placeholderIcon={project.icon}
              />
            ))}
          </div>
        ) : (
          <div className={styles.noResults}>
            No projects found matching your search.
          </div>
        )}
      </section>

      <div className={styles.moreProjectsContainer}>
        <span className={styles.moreProjectsText}>More Projects →</span>
      </div>
    </div>
  );
}
