import { Typography, styled } from '@mui/material';

const TagsPageTitle = styled(Typography)(({ theme }) => theme.unstable_sx({
  fontSize: { xs: '1.5rem', sm: '1.875rem' },
  fontWeight: 400,
  position: 'absolute',
  top: { xs: '-48px', sm: '-50px' },
  left: { xs: '5px', sm: '12px' },
}));

export default TagsPageTitle;
