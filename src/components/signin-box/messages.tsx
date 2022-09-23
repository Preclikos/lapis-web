import { MessageDescriptor } from 'react-intl';

export const messages: { [name: string]: MessageDescriptor } = {
  title: {
    id: 'signin.title',
    defaultMessage: 'Get Started!',
  },
  content: {
    id: 'signin.content',
    defaultMessage: "It's free to signin and only takes a minute.",
  },
  facebook: {
    id: 'signin.facebook',
    defaultMessage: 'Sign In Using Facebook',
  },
  google: {
    id: 'signin.google',
    defaultMessage: 'Sign In Using Google',
  },
};
