import { styled } from '@mui/material';
import StyledButton from './StyledButton';

const StyledChipButton = styled(StyledButton)(() => ({
  height: '28px',
  borderRadius: '20px',
  textTransform: 'none',
  fontSize: '12px',
  fontWeight: 600,
  padding: '8px 10px',
  fontFamily: "'Open Sans', sans-serif",
  lineHeight: '100%',
  width: 'fit-content',
}));

export default StyledChipButton;
