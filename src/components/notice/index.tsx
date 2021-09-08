import React from 'react';

type Props = {
    text: string
};
const Notice: React.FC<Props> = (props: Props) => {
  const { text } = props;
  return (
    <div>
      {text}
    </div>
  );
};
export default Notice;
