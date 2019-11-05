import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../../../src/components/Button';

storiesOf('Button', module)
  .add('with primary', () => <Button label="Primary Button" />)
  .add('with outline', () => (
    <Button
      label="Ouline Button"
      style={{ background: 'transparent', border: '3px solid #fecd43' }}
    />
  ))
  .add('with rounder corners', () => (
    <Button label="Rounded Button" style={{ borderRadius: '15px' }} />
  ))
  .add('disabled', () => (
    <Button
      disabled
      label="Disabled Button"
      style={{ background: 'gray', border: 'gray', cursor: 'not-allowed' }}
    />
  ));
