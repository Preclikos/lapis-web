import { FC } from 'react';
import { FormattedDate, FormattedMessage } from 'react-intl';
import { Image as ImageType } from '../../api/types/image';
import { useApiUserById } from '../../api/use-api';
import { useCountries } from '../../hooks/use-countries';
import Anchor from '../ui/anchor';
import Button from '../ui/button';
import Card from '../ui/card/card';
import CardBody from '../ui/card/card-body';
import Image from '../ui/image';
import Media from '../ui/media/media';
import MediaBody from '../ui/media/media-body';
import { messages } from './messages';

interface IProps {
  id: number;
  code: string;
  name: string;
  description: string;
  timeStamp: number;
  userId?: number;
  image: ImageType;
}

const convertToLocalTime = (timeStamp: number) => new Date(timeStamp * 1000);

const LapisCard: FC<IProps> = ({
  id,
  code,
  name,
  description,
  timeStamp,
  userId,
  image,
}) => {
  const { data: author } = useApiUserById(userId ?? null);
  const country = useCountries(author?.country ?? null);

  return (
    <>
      <Card className="card-profile">
        <CardBody className="p-[30px]">
          <Media className="flex-col md:flex-row">
            {image?.path && (
              <Image
                path={image.path}
                alt={image?.alt || 'profile'}
                className="mt-2 w-[120px]"
                width={120}
                height={120}
              />
            )}
            <MediaBody className="mt-[20px] md:mt-30 md:ml-[30px]">
              <h3 className="font-normal">{name}</h3>
              <h6>{code}</h6>
              <p className="mb-[5px] text-[15px] text-heading leading-relaxed">
                <FormattedMessage {...messages.createdBy} />{' '}
                <Anchor
                  className="text-primary"
                  path={'/profile/' + author?.id}
                >
                  {author?.name}
                </Anchor>{' '}
                <FormattedMessage {...messages.from} /> {country}
              </p>
              <p className="mb-0.5 pb-1">
                <FormattedDate value={convertToLocalTime(timeStamp)} />
              </p>
              <p className="mb-0">{description}</p>
            </MediaBody>
            <Anchor path={`/lapis/${id}/report`}>
              <Button className="mt-[5px]">
                <FormattedMessage {...messages.reportLocation} />
              </Button>
            </Anchor>
          </Media>
        </CardBody>
      </Card>
    </>
  );
};

export default LapisCard;
