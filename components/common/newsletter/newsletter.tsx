import * as React from 'react';

import styles from './newsletter.module.scss';
import typeStyles from '../typography/typography.module.scss';
import { NewsletterForm } from './newsletter-form';

export const Newsletter: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={typeStyles.h1}>Stay tuned</h3>
        <p className={typeStyles.p}>
          Subscribe to our newsletter and never miss updates, announcements and opportunities.{' '}
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
};
