import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import Flip from 'react-card-flip';

type FlipCardProp = {
  title: string,
  subtitle: string,
  content: string,
};

function FlipCard({ title, subtitle, content }: FlipCardProp) {
  const cardStyle = {
    width: '100%',
    minHeight: '100%',
  };
  // const renderCard = (key: string, content: string) => 
  return (
    <Card style={cardStyle} elevation={24}>
      <CardHeader title={title} subheader={subtitle} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}

type FlashCardProp = {
  title: string,
  front: string,
  back: string,
};

export default function FlashCard({ title, front, back }: FlashCardProp) {
  const [flipped, setFlip] = useState(false);
  useEffect(() => {
    setFlip(false);
  }, [front]);
  const frontCard = { title, subtitle: 'front', content: front };
  const backCard = { title, subtitle: 'back', content: back };

  return (
    <Box height="100%" onClick={() => { setFlip(!flipped) }}>
      {flipped ? FlipCard(backCard) : FlipCard(frontCard)}
    </Box>
  );
}
