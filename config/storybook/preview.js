import { addDecorator } from '@storybook/react';
import { Theme } from '../app/providers/ThemeProvider';
import { RouterDecorator } from '../shared/config/storybook/RouterDecorator/RouterDecorator';
import { StyleDecorator } from '../shared/config/storybook/StyleDecorator/StyleDecorator';
import {
    ThemeDecorator,
} from '../../src/shared/config/storybook/StyleDecorator/ThemeDecorator/ThemeDecorator';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(Theme.DARK));
addDecorator(RouterDecorator);
