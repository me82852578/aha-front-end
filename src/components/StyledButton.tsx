import { Button, styled } from '@mui/material';

const contained = {
  backgroundColor: 'background.contrastText',
  color: 'background.dark',
  borderColor: 'background.contrastText',
};
const outlined = {
  backgroundColor: 'background.dark',
  color: 'background.contrastText',
  borderColor: 'background.contrastText',
};

const StyledButton = styled(Button)(({ theme, variant = 'outlined' }) => theme.unstable_sx({
  ...(variant === 'contained' && {
    ...contained,
    ':hover': {
      ...outlined,
    },
  }),
  ...(variant === 'outlined' && {
    ...outlined,
    ':hover': {
      ...contained,
    },
  }),
  borderWidth: '1px',
  borderStyle: 'solid',
  width: '335px',
}));

export default StyledButton;
