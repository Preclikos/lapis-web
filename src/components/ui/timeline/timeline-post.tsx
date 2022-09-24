import clsx from 'clsx';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { ActivityType } from '../../../api/types/activityType';
import { useApiUserById } from '../../../api/use-api';
import Anchor from '../anchor';
import { messages, getActivityMessage } from './messages';

interface IProps {
  type: ActivityType;
  path: string;
  userId: number;
  excerpt: string;
  images?: Array<{
    src: string;
    alt?: string;
  }>;
}

const TimelinePost: FC<IProps> = ({ type, path, userId, excerpt, images }) => {
  const { data: author } = useApiUserById(userId);

  return (
    <>
      <p className="ont-medium mb-0">
        <Anchor
          className="timeline-date font-bold text-heading text-sm uppercase tracking-wider mb-0"
          path={path}
        >
          <FormattedMessage {...getActivityMessage(type)} />
        </Anchor>
      </p>
      {author && (
        <p className="text-xs mb-3.7">
          <Anchor path={'/profile/' + author.id}>
            <span className={'fi  fi-' + author?.country.toLocaleLowerCase()} />{' '}
            {author.name}
          </Anchor>
        </p>
      )}
      <p className="mb-3.8">{excerpt}</p>
      {images && (
        <div className="grid sm:grid-cols-2 gap-2.5 mb-3.8">
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img?.alt} width={100} height={70} />
          ))}
        </div>
      )}
      {
        <div className="text-xs">
          <Anchor path="/timeline">
            <FormattedMessage {...messages.like} />
          </Anchor>
          &nbsp;&nbsp;
          <Anchor path="/timeline">
            <FormattedMessage {...messages.comment} />
          </Anchor>
        </div>
      }
    </>
  );
};

export default TimelinePost;
