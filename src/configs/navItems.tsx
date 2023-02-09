import React from 'react';
import { SvgIcon, SvgIconProps } from '@mui/material';
import path from './path';

function TempIcon(props:SvgIconProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.58365 2.00006C7.75522 2.00006 7.08365 2.67163 7.08365 3.50006C7.08365 4.32849 7.75522 5.00006 8.58365 5.00006H19V14.4234C19 15.2518 19.6716 15.9234 20.5 15.9234C21.3285 15.9234 22 15.2518 22 14.4234V4.50006C22 3.11935 20.8807 2.00006 19.5 2.00006H8.58365ZM4.24219 6.9147H15.3641C16.4687 6.9147 17.3641 7.81013 17.3641 8.9147V20.0366C17.3641 21.1412 16.4687 22.0366 15.3641 22.0366H4.24219C3.13762 22.0366 2.24219 21.1412 2.24219 20.0366V8.9147C2.24219 7.81013 3.13762 6.9147 4.24219 6.9147Z"
        />
      </svg>
    </SvgIcon>
  );
}

const { home, tags, componentsDemo } = path;

export default [
  {
    id: home,
    title: 'Home',
    url: home,
    icon: TempIcon,
  },
  {
    id: tags,
    title: 'Tags',
    url: tags,
    icon: TempIcon,
  },
  {
    id: componentsDemo,
    title: 'Components',
    url: componentsDemo,
    icon: TempIcon,
  },
];
