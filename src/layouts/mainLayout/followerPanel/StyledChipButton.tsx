import { Chip, styled } from '@mui/material';

const filled = {
  backgroundColor: 'background.contrastText',
  color: 'background.dark',
  borderColor: 'background.contrastText',
};
const outlined = {
  backgroundColor: 'background.dark',
  color: 'background.contrastText',
  borderColor: 'background.contrastText',
};

const StyledChipButton = styled(Chip)(({ theme, variant }) => (theme.unstable_sx({
  ...(variant === 'filled' ? {
    ...filled,
    '&.MuiChip-clickable:hover': {
      ...outlined,
      transition: 'linear 0.1s',
    },
  } : {
    ...outlined,
    '&.MuiChip-clickable:hover': {
      ...filled,
      transition: 'linear 0.1s',
    },
  }),
  transition: 'linear 0.1s',
  borderWidth: '1px',
  borderStyle: 'solid',
  height: '28px',
  padding: '8px 10px',
  '.MuiChip-label': {
    fontSize: '12px',
    fontWeight: 600,
    padding: 0,
    fontFamily: "'Open Sans', sans-serif",
  },
})));

export default StyledChipButton;
