import { useState } from 'react'
import styles from './header.module.scss';

function Header() {
  return (
      <header className={styles.root}>
        <div className={styles.logo}>
            <img src='./kindpng_7541878.png' />
        </div>
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Info</li>
            </ul>
        </nav>
      </header>
  );
}
export default Header;
