import * as React from 'react';
import { Button} from "semantic-ui-react";

type Props = {
    text: string
};
const Notice = (props: Props) => {
    const { text } = props
    return (
        <div>
            {text}
        </div>
    );
};
export default Notice