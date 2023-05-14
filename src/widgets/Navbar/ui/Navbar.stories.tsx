import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
    ThemeDecorator,
} from '../../../../shared/config/storybook/StyleDecorator/ThemeDecorator/ThemeDecorator';
import { Navbar } from './Navbar';
import { Theme } from '../../../../app/providers/ThemeProvider';

export default {
    title: 'widget/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
