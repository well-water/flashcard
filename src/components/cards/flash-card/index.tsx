import React from 'react';
import { Button } from 'semantic-ui-react';
import styles from './index.module.scss';

type Props = {

};
const FlashCard: React.FC<Props> = (props: Props) => (
  <div className={styles.flashCard}>
    <div className={styles.front}>
      <div>
        <div>
          UseEffect
        </div>
      </div>
    </div>
    <Button primary>Check!</Button>
  </div>
);
export default FlashCard;
