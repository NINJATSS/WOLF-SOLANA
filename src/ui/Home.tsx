import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          WOLF SOLANA CASINO
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An open source, decentralized casino built on Gamba.
        </p>
      </Section>
    </div>
  )
}
