import { useKeycloak } from '@react-keycloak/web';
import { useParams } from 'react-router-dom';
import { useApiUserByIdOrSub } from '../../../api/use-api';
import ProfileCard from '../../../components/profile-card';

interface IProfileProps {
  id: string;
}

const MainContent = () => {
  const { keycloak } = useKeycloak();
  const { id } = useParams<IProfileProps>();
  const subOrId = id !== undefined ? Number(id) : keycloak.subject;
  const { data: user, error } = useApiUserByIdOrSub(subOrId ?? null);

  return (
    <>
      <ProfileCard
        name={user?.name ?? ''}
        designation={''}
        country={user?.country}
        motto={user?.motto ?? ''}
        path={'https://' + window.location.host + '/profile/' + user?.id}
        image={{ src: user?.image.path ?? '', alt: user?.name }}
      />
    </>
  );
};

export default MainContent;
