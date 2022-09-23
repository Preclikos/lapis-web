import { MessageDescriptor } from 'react-intl';
import { ActivityType } from '../../../api/types/activityType';

export const getActivityMessage = (value: ActivityType) => {
  switch (value) {
    case ActivityType.Location:
      return activityMessages['location'];
    default:
      return activityMessages['default'];
  }
};

const activityMessages: { [name: string]: MessageDescriptor } = {
  location: {
    id: 'lapis-timeline.activity.location',
    defaultMessage: 'Reported new location',
  },
  default: {
    id: 'lapis-timeline.activity.default',
    defaultMessage: 'Unknown Activity',
  },
};

export const messages: { [name: string]: MessageDescriptor } = {
  like: {
    id: 'lapis-timeline.like',
    defaultMessage: 'Like',
  },
  comment: {
    id: 'lapis-timeline.comment',
    defaultMessage: 'Comment',
  },
};
