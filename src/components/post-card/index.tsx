import { FC, useState } from 'react';
import CommentModal from '../modals/comment-modal';
import Anchor from '../ui/anchor';
import Card from '../ui/card/card';
import CardBody from '../ui/card/card-body';
import CardTitle from '../ui/card/card-title';
import Media from '../ui/media/media';
import MediaBody from '../ui/media/media-body';

export interface IProps {
  id: number;
  title: string;
  user: {
    image: {
      src: string;
      alt?: string;
    };
    name: string;
    path: string;
    designation: string;
    lastActivity: string;
  };
  activity: {
    image: {
      src: string;
      alt?: string;
      width?: number;
      height?: number;
    };
    title: string;
    path: string;
    excerpt: string;
  };
  author?: {
    name: string;
    path: string;
    designation: string;
  };
}

const PostCard: FC<IProps> = ({ title, user, activity, author }) => {
  const [likes, setLikes] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showShareModal, setShowShareModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  return (
    <>
      <Card className="activity-card mb-5">
        <CardBody className="p-[25px]">
          <CardTitle>{title}</CardTitle>

          <Media className="items-center my-[25px]">
            {user?.image?.src && (
              <img
                src={user.image.src}
                alt={user.image?.alt || 'author'}
                className="rounded-full w-10"
                width={40}
                height={40}
              />
            )}

            <MediaBody className="ml-3.8">
              <h6 className="mb-[2px]">
                <Anchor path={user.path}>{user.name}</Anchor>
              </h6>
              <p className="mb-0">{user.designation}</p>
            </MediaBody>
            <span className="text-sm">{user.lastActivity}</span>
          </Media>
          <div className="">
            {activity?.image?.src && (
              <Anchor path="#!">
                <img
                  src={activity.image.src}
                  className="w-full h-full-aspect object-cover"
                  alt={activity.image?.alt || 'Banner'}
                  width={activity.image.width}
                  height={activity.image.height}
                />
              </Anchor>
            )}

            <div className="bg-gray-200 p-[25px]">
              <Anchor
                path={activity.path}
                className="block text-2xl text-heading mb-5 leading-snug"
              >
                {activity.title}
              </Anchor>
              <p>{activity.excerpt}</p>
              {author && (
                <p className="mb-0">
                  <Anchor path={author.path} className="block">
                    {author.name}
                  </Anchor>
                  <span className="block">{author.designation}</span>
                </p>
              )}
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
          <button
            onClick={() => setShowShareModal(true)}
            className="inline-block border-r border-r-geyser py-3 px-3.8 md:px-[25px] text-primary"
          >
            Share
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
