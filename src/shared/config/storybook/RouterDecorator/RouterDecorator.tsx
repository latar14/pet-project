import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
