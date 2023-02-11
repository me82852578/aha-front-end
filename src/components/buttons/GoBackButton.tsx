import React, { ReactEventHandler, ReactNode } from 'react';
import {
  IconButton,
  IconButtonProps,
  Stack,
  StackProps,
  SvgIcon,
  SvgIconProps,
  Typography,
  TypographyProps,
} from '@mui/material';

interface GoBackButtonProps extends StackProps {
  label?: ReactNode;
  icon?: ReactNode;
  onClick?:ReactEventHandler;
  slotsProp?: {
    typography?: TypographyProps;
    iconButton?: IconButtonProps;
    icon?: SvgIconProps;
  };
}

function GoBackButton({
  label, icon, slotsProp, onClick, ...other
}: GoBackButtonProps) {
  return (
    <Stack direction="row" alignItems="center" {...other}>
      <IconButton
        onClick={onClick}
        {...slotsProp?.iconButton}
      >
        {icon || (
        <SvgIcon {...slotsProp?.icon}>
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_6_483)">
              <path d="M19.2702 4.10349L17.3333 2.16663L6.5 13L17.3333 23.8333L19.2702 21.8964L10.3737 13L19.2702 4.10349Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_6_483">
                <rect width="26" height="26" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </SvgIcon>
        )}
      </IconButton>
      {label && (
        <Typography fontSize="1.5rem" fontWeight={400} paddingLeft="5.16px" {...slotsProp?.typography}>
          {label}
        </Typography>
      )}
    </Stack>
  );
}

export default GoBackButton;
