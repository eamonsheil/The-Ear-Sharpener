import * as React from 'react';

export interface IConfigMenuProps {
}

export const ConfigMenu = React.forwardRef((props: IConfigMenuProps, ref) => {
  return (
    <div className='config-menu' ref={ref}>
        
    </div>
  );
}
)