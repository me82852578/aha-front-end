import React from 'react';
import { Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { path } from '../../configs';

function Logo() {
  return (
    <MuiLink
      underline="none"
      unselectable="on"
      component={Link}
      to={path.home}
      fontWeight={700}
      sx={{
        background: (theme) => theme.palette.gradient.main,
        backgroundClip: 'text',
        textFillColor: 'transparent',
      }}
    >
      LOGO
    </MuiLink>
  );
}

export default Logo;
