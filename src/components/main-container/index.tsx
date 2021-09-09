import React from 'react';
import styles from './index.module.scss';
import folders from '../../data/folders';
import FolderList from '../folder-list/FolderList';
import FlashCard from '../cards/flash-card';

type Props = {

};
const MainContainer: React.FC<Props> = (props: Props) => (
  <div className={styles.container}>
    <div className={styles.left}>
      <FolderList folders={folders} />
    </div>
    <div className={styles.right}>
      <FlashCard />
    </div>
  </div>
);
export default MainContainer;
