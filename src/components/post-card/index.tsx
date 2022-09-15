import { FC, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import CommentModal from '../modals/comment-modal';
import Anchor from '../ui/anchor';
import Card from '../ui/card/card';
import CardBody from '../ui/card/card-body';
import CardTitle from '../ui/card/card-title';
import Media from '../ui/media/media';
import MediaBody from '../ui/media/media-body';
import { messages } from './messages';
import empty_user from '../images/empty_user.png';
import { useApiUserById } from '../../api/use-api';
import { FeedItem } from '../../api/types/feed';
import TimeAfter from '../time-after';
import { Country } from '../country/enum';

const PostCard: FC<FeedItem> = (activity: FeedItem) => {
  const [likes, setLikes] = useState(0);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const { data: user, error: userError } = useApiUserById(activity.userId);
  return (
    <>
      <Card className="activity-card mb-5">
        <CardBody className="p-[25px]">
          <CardTitle>
            <Anchor path={`/lapis/${activity.lapisId}`}>
              <FormattedMessage {...messages[activity.type]} />
            </Anchor>
          </CardTitle>

          <Media className="items-center my-[25px]">
            <Anchor path={`/profile/${user?.id}`}>
              <img
                src={user?.image?.src ?? empty_user}
                alt={'author'}
                className="rounded-full w-10"
                width={40}
                height={40}
              />
            </Anchor>

            <MediaBody className="ml-3.8">
              <h6 className="mb-[2px]">
                <Anchor path={`/profile/${user?.id}`}>{user?.name}</Anchor>
              </h6>
              <p className="mb-0">
                {user && (
                  <>
                    <span
                      className={'fi  fi-' + user?.country.toLocaleLowerCase()}
                    />
                  </>
                )}
              </p>
            </MediaBody>
            <span className="text-sm">
              <TimeAfter utcTimeStamp={activity.timeStamp} />
            </span>
          </Media>
          <div className="">
            {activity.image.src && (
              <Anchor path={`/lapis/${activity.lapisId}`}>
                <img
                  src={activity.image.src}
                  className="w-full h-full-aspect object-cover"
                  alt={activity.image?.alt || 'Banner'}
                  width={activity.image.width}
                  height={activity.image.height}
                />
              </Anchor>
            )}
            <div className="bg-gray-200 p-[15px]">
              <p>{activity.description}</p>
            </div>
          </div>
        </CardBody>
        <div className="p-0 bg-black/5 border-t border-t-geyser card-footer relative">
          <button
            onClick={() => setShowCommentModal(true)}
            className="inline-block border-r border-r-geyser py-3 px-3.8 md:px-[25px] text-primary"
          >
            Comment
          </button>
          <button
            className="inline-block border-r border-r-geyser py-3 px-3.8 md:px-[25px] text-primary"
            onClick={() => setLikes((prev) => prev + 1)}
          >
            Likes ({likes})
          </button>
        </div>
      </Card>

      <CommentModal
        show={showCommentModal}
        onClose={() => setShowCommentModal(false)}
      />
    </>
  );
};

export default PostCard;
