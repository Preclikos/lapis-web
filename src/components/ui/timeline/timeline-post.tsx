import { FC, Fragment, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { FormattedMessage } from 'react-intl';
import { ActivityType } from '../../../api/types/activityType';
import { useApiUserById } from '../../../api/use-api';
import Anchor from '../anchor';
import { messages, getActivityMessage } from './messages';
import { LapisActivityLocation } from '../../../api/types/lapisActivity';
import { useCountries } from '../../../hooks/use-countries';

interface IProps {
  type: ActivityType;
  path: string;
  userId: number;
  excerpt: string;
  images?: Array<{
    src: string;
    alt?: string;
  }>;
  location: LapisActivityLocation;
}

const TimelinePost: FC<IProps> = ({
  type,
  path,
  userId,
  excerpt,
  images,
  location,
}) => {
  const [isOpenLightbox, setOpenLightbox] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const { data: author } = useApiUserById(userId);
  const country = useCountries(
    location && location.countryCode ? location.countryCode : null
  );

  return (
    <>
      <p className="font-medium mb-0 timeline-date font-bold text-heading text-sm uppercase tracking-wider mb-0">
        <FormattedMessage {...getActivityMessage(type)} />
        {location && (
          <Anchor path={'#'} onClick={() => console.log('test')}>
            {' '}
            - {location.city}, {country}
          </Anchor>
        )}
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
      <div className={`grid gap-2 mb-3.8 grid-cols-${images?.length}`}>
        {images && (
          <>
            {images.map((img, i) => (
              <Anchor
                path="#"
                key={i}
                onClick={() => {
                  setImageIndex(i);
                  setOpenLightbox(!isOpenLightbox);
                }}
              >
                <img className="object-scale-down w-[8rem]" src={img.src} />
              </Anchor>
            ))}
            <FsLightbox
              sourceIndex={imageIndex}
              toggler={isOpenLightbox}
              sources={images.map((m) => m.src)}
            />
          </>
        )}
      </div>

      {
        <div className="text-xs">
          <Anchor path="#">
            <FormattedMessage {...messages.like} />
          </Anchor>
          &nbsp;&nbsp;
          <Anchor path="#">
            <FormattedMessage {...messages.comment} />
          </Anchor>
        </div>
      }
    </>
  );
};

export default TimelinePost;
