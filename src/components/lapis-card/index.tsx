import { FC } from 'react';
import { useApiUserById } from '../../api/use-api';
import Anchor from '../ui/anchor';
import Card from '../ui/card/card';
import CardBody from '../ui/card/card-body';
import Media from '../ui/media/media';
import MediaBody from '../ui/media/media-body';

interface IProps {
  id: number;
  code: string;
  name: string;
  description: string;
  country?: string;
  userId?: number;
  image: { src: string; alt?: string };
}

const LapisCard: FC<IProps> = ({
  id,
  code,
  name,
  description,
  country,
  userId,
  image,
}) => {
  const { data: author } = useApiUserById(userId ?? null);

  console.log(name);

  return (
    <>
      <Card className="card-profile">
        <CardBody className="p-[30px]">
          <Media className="flex-col md:flex-row">
            {image?.src && (
              <img
                src={image.src}
                alt={image?.alt || 'profile'}
                className="mt-5 w-[120px]"
                width={120}
                height={120}
              />
            )}

            <MediaBody className="mt-[25px] md:mt-0 md:ml-[30px]">
              <h3 className="font-normal">{name}</h3>
              <h6>{code}</h6>
              <p className="mb-[5px] text-[15px] text-heading leading-relaxed">
                Created by{' '}
                <Anchor
                  className="text-primary"
                  path={'/profile/' + author?.id}
                >
                  {author?.name}
                </Anchor>{' '}
                from {author?.country}
              </p>
              <p className="mb-0">{description}</p>
            </MediaBody>
          </Media>
        </CardBody>
      </Card>
    </>
  );
};

export default LapisCard;
