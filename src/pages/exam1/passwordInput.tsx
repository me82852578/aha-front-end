import {
  CheckCircleOutlineRounded,
  CheckCircleRounded,
} from '@mui/icons-material';
import {
  Typography,
  Stack,
  TextField,
  styled,
  List,
  ListItem,
  Fade,
  Paper,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';

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
        width: '65px',
      },
    },
    '&.Mui-focused fieldset': {
      borderColor: '#00A3FF',
      borderWidth: '3px',
    },
  },
});

interface FormProps {
  password: string;
}

const errorsMapping = {
  uppercase: 'Have at least one uppercase letter',
  lowercase: 'Have at least one lowercase letter',
  number: 'Have at least one number',
  special: 'Have at least one special character \n(!@#$...etc)',
  minLength: 'Longer than 8 characters',
};

function PasswordInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ criteriaMode: 'all', mode: 'onChange' });

  const onSubmit = useCallback(
    (data: FormProps) => console.log(data),
    [],
  );

  return (
    <Stack spacing={10} pt={{ xs: '20px', md: '68px' }}>
      <Typography component="h2" fontSize={{ xs: '1.2rem', md: '1.5rem' }}>
        Password Input
      </Typography>
      <Stack component="form" spacing="20px" onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          label="Password"
          type="password"
          placeholder="Password"
          InputLabelProps={{ shrink: true }}
          {...register('password', {
            required: true,
            validate: {
              minLength: (v) => v.length > 7,
              uppercase: (v) => /[A-Z]/.test(v),
              lowercase: (v) => /[a-z]/.test(v),
              number: (v) => /\d/.test(v),
              special: (v) => /[!@#$%^&*(),.?":{}|<>]/.test(v),
            },
          })}
        />
        <Fade in={!!errors.password} unmountOnExit>
          <Paper
            sx={{
              height: '226px',
              maxWidth: '335px',
              backgroundColor: '#242424',
            }}
          >
            <List
              dense
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '2px',
                pt: '10px',
                pb: '10px',
              }}
            >
              {Object.keys(errorsMapping).map((errorKey) => (
                <ListItem key={errorKey} sx={{ pl: '10px' }}>
                  <ListItemIcon sx={{ minWidth: '0px', pr: '10px' }}>
                    {errors.password?.types
                    && errors.password?.types[errorKey as keyof typeof errorsMapping]
                      ? <CheckCircleOutlineRounded color="disabled" />
                      : <CheckCircleRounded sx={{ color: '#00D1FF' }} />}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      errorsMapping[errorKey as keyof typeof errorsMapping]
                    }
                    primaryTypographyProps={{ fontSize: '0.875rem' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Fade>
      </Stack>
    </Stack>
  );
}

export default PasswordInput;
