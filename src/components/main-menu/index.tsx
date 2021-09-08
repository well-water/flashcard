import React from 'react';
import { Menu } from 'semantic-ui-react';

type Props = {

};
const MainMenu: React.FC<Props> = (props: Props) => (
  <div>
    <Menu>
      <Menu.Item header>Flash Card</Menu.Item>
    </Menu>
  </div>
);
export default MainMenu;
