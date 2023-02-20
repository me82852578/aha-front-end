import React, { useState } from 'react';
import {
  DatePicker, LocalizationProvider, PickersDay,
} from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  Paper,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';

const StyledDays = styled(PickersDay)(({ theme }) => theme.unstable_sx({
  backgroundColor: 'background.light',
  '&:hover': {
    backgroundColor: 'background.contrastText',
    color: 'background.main',
  },
  '&.MuiPickersDay-today': {
    '&[tabindex = "0"]': {
      backgroundColor: '#00A3FF',
    },
    '&:not(.Mui-selected)': {
      borderColor: '#00A3FF !important',
    },
    ':hover': {
      backgroundColor: 'background.contrastText',
    },
  },
  '&.Mui-selected': {
    backgroundColor: '#00A3FF',
    color: 'background.contrastText',
    ':hover': {
      backgroundColor: 'background.contrastText',
      color: 'background.main',
    },
  },
}));

const StyledDatePaper = styled(Paper)(({ theme }) => theme.unstable_sx({
  backgroundColor: 'background.light',
  backgroundImage: 'none',
}));

const StyledTextField = styled(TextField)({
  maxWidth: '335px',
  '.MuiInputLabel-root': {
    transform: 'translate(14px, -9px) scale(0.8)',
  },
  '& label.Mui-focused': {
    color: '#FFFFFF',
  },
  '& .MuiOutlinedInput-root': {
    fieldset: {
      borderRadius: '8px',
      borderWidth: '3px',
      legend: {
        width: 'auto',
      },
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FFFFFF',
      borderWidth: '3px',
    },
  },
  input: {
    textTransform: 'lowercase',
  },
});

const StyledLayout = {
  '.MuiPickersCalendarHeader-root': {
    position: 'relative',
    justifyContent: 'center',
    '.MuiIconButton-root': {
      position: 'absolute',
      top: 0,
      '&[title="Previous month"]': {
        left: 10,
      },
      '&[title="Next month"]': {
        right: 10,
      },
    },
    '.MuiPickersCalendarHeader-labelContainer': {
      margin: 0,
      '.MuiPickersCalendarHeader-label': {
        mr: 0,
      },
    },
  },
  '.MuiPickersToolbar-root > span': {
    textTransform: 'none',
  },
  '.MuiPickersSlideTransition-root': {
    minHeight: '221px',
  },
  '.MuiDialogActions-root': {
    paddingRight: '25px',
    gap: '30px',
    button: {
      color: '#FFFFFF',
      textTransform: 'none',
    },
  },
  '.MuiYearCalendar-root': {
    '.MuiPickersYear-root button': {
      borderRadius: '2px',
      '&.Mui-selected': {
        backgroundColor: '#00A3FF',
        color: 'background.contrastText',
      },
      ':hover': {
        backgroundColor: 'background.contrastText',
        color: 'background.main',
      },
    },
  },
};

function Calendar() {
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <Stack spacing={5} pt={{ xs: '20px', md: '68px' }}>
      <Typography component="h2" fontSize={{ xs: '1.3rem', md: '1.5rem' }}>
        Calendar && Advanced Effects
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Birthday"
          open={openPicker}
          slots={{
            day: StyledDays,
            mobilePaper: StyledDatePaper,
            desktopPaper: StyledDatePaper,
            textField: StyledTextField,
          }}
          slotProps={{
            layout: {
              wrapperVariant: 'mobile',
              sx: StyledLayout,
            },
            field: { readOnly: true },
            toolbar: { hidden: false },
            textField: {
              onClick: () => { setOpenPicker((prev) => !prev); },
              focused: openPicker,
            },
            openPickerButton: { sx: { display: 'none' } },
            popper: { disablePortal: true },
            actionBar: { sx: { color: '#FFFFFF' } },
          }}
          orientation="portrait"
          onClose={() => setOpenPicker((prev) => !prev)}
          closeOnSelect={false}
          showDaysOutsideCurrentMonth
          localeText={{ toolbarTitle: 'Text' }}
        />
      </LocalizationProvider>
    </Stack>
  );
}

export default Calendar;
