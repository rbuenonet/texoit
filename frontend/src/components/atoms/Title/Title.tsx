import React, { ReactNode } from 'react';

const Title: React.FC<{children: ReactNode}> = ({children}) => {

  return (
    <h3>{children}</h3>
  );
};

export default Title;
