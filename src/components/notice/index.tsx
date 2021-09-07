import * as React from 'react';

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