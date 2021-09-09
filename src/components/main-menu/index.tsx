import React from 'react';
import { Menu } from 'semantic-ui-react';
import styles from './index.module.scss';

type Props = {

};
const MainMenu: React.FC<Props> = (props: Props) => (
  <div className={styles.mainMenu}>
    <Menu>
      <Menu.Item header>Flash Card</Menu.Item>
    </Menu>
  </div>
);
export default MainMenu;
