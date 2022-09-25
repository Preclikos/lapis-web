import { MessageDescriptor } from 'react-intl';

export const messages: { [name: string]: MessageDescriptor } = {
  overview: {
    id: 'lapis-overview.overview',
    defaultMessage: 'Overview',
  },
  locations: {
    id: 'lapis-overview.locations',
    defaultMessage: 'Visited <b>{count}</b> places',
  },
  states: {
    id: 'lapis-overview.states',
    defaultMessage: 'Looked at {count} states',
  },
  travel: {
    id: 'lapis-overview.travel',
    defaultMessage: 'Traveled {distance} km',
  },
};
