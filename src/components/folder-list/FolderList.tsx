import * as React from 'react';
import {Folder} from './type'
import {List} from "semantic-ui-react";
import styles from './index.module.scss'
type Props = {
    folders: Array<Folder>
};
const FolderList = (props: Props) => {
    const {folders} = props
    return (
        <div className={styles.folderList}>
            {
                folders && folders.length > 0 ?
                    <List>
                        {
                            folders.map(
                                folder => (
                                    <List.Item>
                                        <List.Icon name="folder"/>
                                        <List.Content>
                                            <List.Header>{folder.title}</List.Header>
                                            <List.Description>{folder.desc}</List.Description>
                                        </List.Content>
                                    </List.Item>
                                )
                            )
                        }
                    </List> : null

            }
        </div>
    );
};
export default FolderList