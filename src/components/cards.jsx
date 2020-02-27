import React from 'react';

import { Card as _Card, Elevation as _Elevation } from '@blueprintjs/core';

const CardContainer = ({ children }) => {
  return <div className="card-container">{children}</div>;
};

export const CardTitle = ({ children }) => {
  return <div className="card-title">{children}</div>;
};

export const CardBody = ({ children }) => {
  return <div className="card-body">{children}</div>;
};

export const CardActions = ({ children }) => {
  return <div className="card-actions">{children}</div>;
};

export const Card = ({ children, elevation }) => {
  let vation = elevation ? _Elevation[elevation] : undefined;

  return (
    <CardContainer>
      <_Card className="card" elevation={vation}>
        {children}
      </_Card>
    </CardContainer>
  );
};
