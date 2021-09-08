import * as React from 'react';
import {Menu} from "semantic-ui-react";

type Props = {

};
const MainMenu = (props: Props) => {
    return (
        <div>
            <Menu>
                <Menu.Item header>Flash Card</Menu.Item>
            </Menu>
        </div>
    );
};
export default MainMenu