'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Check system preference or stored value
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || (!savedTheme && window.matchMedia('(prefers-color-scheme: light)').matches)) {
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoGroup} onClick={closeMobileMenu}>
          <div className={styles.logoIcon}>M</div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>MARK ECHAVIA</span>
            <span className={styles.logoRole}>STUDENT</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className={styles.navRight}>
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>HOME</Link>
            <Link href="/about" className={styles.navLink}>ABOUT</Link>
            <Link href="/projects" className={styles.navLink}>PROJECTS</Link>
            <Link href="/contact" className={styles.navLink}>CONTACT</Link>
          </nav>
          
          <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>

          {/* Hamburger Menu Button */}
          <button 
            className={styles.hamburgerBtn} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen1 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen2 : ''}`}></span>
            <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.lineOpen3 : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNavLinks}>
          <Link href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>HOME</Link>
          <Link href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>ABOUT</Link>
          <Link href="/projects" className={styles.mobileNavLink} onClick={closeMobileMenu}>PROJECTS</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
