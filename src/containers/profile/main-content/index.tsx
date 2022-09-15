import { useKeycloak } from '@react-keycloak/web';
import { useParams } from 'react-router-dom';
import { useApiUserById } from '../../../api/use-api';
import ProfileCard from '../../../components/profile-card';

interface IProfileProps {
  id: string;
}

const MainContent = () => {
  const { id } = useParams<IProfileProps>();
  console.log(id);
  const { data: user, error } = useApiUserById(Number(id));

  return (
    <>
      <ProfileCard
        name={user?.name ?? ''}
        designation={''}
        countryId={user?.countryId ?? 0}
        motto={user?.motto ?? ''}
        path={'https://' + window.location.host + '/profile/' + id}
        image={{ src: user?.image.src ?? '', alt: user?.name }}
      />
    </>
  );
};

export default MainContent;
