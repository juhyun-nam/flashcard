import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Flip from 'react-card-flip';

type FlashCardProp = {
  front: string,
  back: string
};

export default function FlashCard({ front, back }: FlashCardProp) {
  const [flipped, setFlip] = useState(false);
  const cardStyle = {
    width: '100%',
    height: '25vh',
  };
  const renderCard = (key: string, content: string, onClick: () => void) => (
    <Card style={cardStyle} elevation={24} key={key} onClick={onClick}>
      <CardContent>
        {content}
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Flip isFlipped={flipped} flipDirection="horizontal">
        {renderCard('front', front, () => { setFlip(true); })}
        {renderCard('back', back, () => { setFlip(false); })}
      </Flip>
    </Box>
  );
}
