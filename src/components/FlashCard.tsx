import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import './FlashCard.css';

type FlipCardProp = {
  title: string,
  subtitle: string | Array<string>,
  content: string | Array<string>,
};

function FlipCard({ title, subtitle, content }: FlipCardProp) {
  const cardStyle = {
    width: '100%',
    minHeight: '100%',
  };
  const renderContent = (content: string | Array<string>) => {
    if (typeof content == "string") {
      return (
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      );
    } else {
      return content.map((value, index) => (
        <Typography key={`card${index}`} variant="body2" color="textSecondary" component="p">
          {value}
        </Typography>
      )
      );
    }
  }
  return (
    <Card style={cardStyle} elevation={24}>
      <CardHeader title={title} subheader={subtitle} />
      <CardContent>
        {renderContent(content)}
      </CardContent>
    </Card>
  );
}

type FlashCardProp = {
  title: string,
  front: string | Array<string>,
  back: string | Array<string>,
};

export default function FlashCard({ title, front, back }: FlashCardProp) {
  const [flipped, setFlip] = useState(false);
  useEffect(() => {
    setFlip(false);
  }, [front]);
  const [animate, setAnimate] = useState('');
  const onClick = () => {
    setAnimate('flipOutY');
    setTimeout(() => {
      setAnimate('flipInY');
      setFlip(!flipped);
    }, 300);
  };

  const frontCard = { title, subtitle: 'front', content: front };
  const backCard = { title, subtitle: 'back', content: back };

  return (
    <Box
      className={`animated ${animate}`}
      height="100%"
      onClick={onClick}
    >
      {flipped ? FlipCard(backCard) : FlipCard(frontCard)}
    </Box>
  );
}
