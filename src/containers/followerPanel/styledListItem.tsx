import { ListItem as MuiListItem, styled } from '@mui/material';

const ListItem = styled(MuiListItem)(({ theme }) => theme.unstable_sx({
  px: '16px',
  py: '2.4px',
}));

export default ListItem;
