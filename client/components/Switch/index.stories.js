import React from 'react';
import { storiesOf } from '@storybook/react';
import Switch from './switch.js';

storiesOf('Switch', module)
	.add('default', () => {
		return <Switch value={true} onChange={(v) => alert(v)} />;
	});
