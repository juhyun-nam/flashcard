import React, { useState } from 'react';
// import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Flip from 'react-card-flip';

type FlashCardProp = {
  title: string,
  front: string,
  back: string
};

export default function FlashCard({ title, front, back }: FlashCardProp) {
  const [flipped, setFlip]  = useState(false);
  const cardStyle = {
    width: '100%',
    minHeight: '100%',
  };
  const renderCard = (key: string, content: string) => (
    <Card style={cardStyle} elevation={24} key={key} onClick={() => { setFlip(!flipped) }}>
      <CardHeader title={title} subheader={key} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Flip containerStyle={{ height: '100%' }} isFlipped={flipped} flipDirection="horizontal">
      {renderCard('front', front)}
      {renderCard('back', back)}
    </Flip>
  );
}
