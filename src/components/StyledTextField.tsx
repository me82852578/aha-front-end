import { TextField, styled } from '@mui/material';

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '60px',
    fontSize: '0.875rem',
    fieldset: {
      borderWidth: '3px',
    },
    '&.Mui-focused fieldset': {
      borderWidth: '3px',
      borderColor: '#FF9B33',
    },
  },
});

export default StyledTextField;
