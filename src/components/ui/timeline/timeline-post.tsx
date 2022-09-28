import { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { ActivityType } from '../../../api/types/activityType';
import { useApiUserById } from '../../../api/use-api';
import Anchor from '../anchor';
import { messages, getActivityMessage } from './messages';
import { LapisActivityLocation } from '../../../api/types/lapisActivity';
import { useCountries } from '../../../hooks/use-countries';
import { Image as ImageType } from '../../../api/types/image';
import Image from '../../ui/image';
import Lightbox from 'yet-another-react-lightbox';

interface IProps {
  type: ActivityType;
  userId: number;
  excerpt: string;
  images?: ImageType[];
  location: LapisActivityLocation;
}

const TimelinePost: FC<IProps> = ({
  type,
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
  const userCountry = useCountries(
    author && author.country ? author.country : null
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
            <span
              title={userCountry}
              className={'fi  fi-' + author?.country.toLocaleLowerCase()}
            />{' '}
            {author.name}
          </Anchor>
        </p>
      )}
      <p className="mb-3.8">{excerpt}</p>
      <div className={`grid gap-2 mb-3.8 grid-cols-${images?.length}`}>
        {images && (
          <>
            {images.map((img, i) => (
              <div
                key={i}
                onClick={() => {
                  setImageIndex(i);
                  setOpenLightbox(true);
                }}
              >
                <Image
                  className="cursor-pointer object-scale-down w-[8rem]"
                  path={img.path}
                />
              </div>
            ))}
            <Lightbox
              open={isOpenLightbox}
              index={imageIndex}
              close={() => setOpenLightbox(false)}
              slides={images.map((m) => {
                return { src: process.env.REACT_APP_IMAGE_URI + m.path };
              })}
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
