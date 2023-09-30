import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import { FaDiscord, FaTwitter, FaGlobeAmericas} from 'react-icons/fa';

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink className={styles.logo} to="/">
            <img alt="WOLF" src="/logo.png" />
          </NavLink>
        </div>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div className={styles.iconContainer}>
            <a href="https://discord.gg/mXmPtZykJK" target="_blank" rel="noreferrer" className={styles.icon}>
              <FaDiscord />
            </a>
            <a href="https://twitter.com/WolfSolanaNFT" target="_blank" rel="noreferrer" className={styles.icon}>
              <FaTwitter />
            </a>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
          {children}
        </div>
        </div>
      </div>
    </div>
  )
}



// export const Header: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
//   return (
//     <div className={styles.wrapper}>
//       <div>
//         <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
//           <NavButton variant="ghost" className={styles.logo} to="/">
//             <img src="/logo.png" height="20px" alt="Logo" />
//             <span className={styles.title}>PEPESOLANA CASINO</span>
//           </NavButton>
          
//         </div>
        // <div style={{ display: 'flex', gap: '10px' }}>
        //   {children}
        // </div>
//       </div>
//     </div>
//   );
// };
