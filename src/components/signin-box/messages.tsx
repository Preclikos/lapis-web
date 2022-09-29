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
  terms: {
    id: 'signin.terms',
    defaultMessage:
      'Please read terms and policies, by continuing you agree them.',
  },
  facebook: {
    id: 'signin.facebook',
    defaultMessage: 'Facebook',
  },
  google: {
    id: 'signin.google',
    defaultMessage: 'Google',
  },
  microsoft: {
    id: 'signin.microsoft',
    defaultMessage: 'Microsoft',
  },
};
