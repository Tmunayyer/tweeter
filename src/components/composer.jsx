import React, { useState } from 'react';

import { Button, Card, Elevation } from '@blueprintjs/core';

export function Composer() {
  const [twit, setTwit] = useState('');

  return (
    <Card interactive={false} elevation={Elevation.TWO}>
      <h5>
        <a href="#">Card heading</a>
      </h5>
      <p>Card content</p>
      <Button>Submit</Button>
    </Card>
  );
}
