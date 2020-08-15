import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

export default function Header() {
  return (
    <AppBar position="static">
      <Typography>
        FlashCard
      </Typography>
    </AppBar>
  );
}
