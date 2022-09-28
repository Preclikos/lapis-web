import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
import { useApiLapisOverviewById } from '../../api/use-api';
import Button from '../ui/button';
import Card from '../ui/card/card';
import CardBody from '../ui/card/card-body';
import CardHeader from '../ui/card/card-header';
import SpinnerPuzzle from '../ui/spinner/spinner-puzzle';
import { messages } from './messages';

interface IProps {
  id: number;
}

const LapisOverview: FC<IProps> = ({ id }) => {
  const { data } = useApiLapisOverviewById(id);

  return data ? (
    <Card className="p-3.8 mb-5">
      <CardHeader className="pb-0">
        <h3>
          <FormattedMessage {...messages.overview} />
        </h3>
      </CardHeader>
      <Button
        disabled={true}
        color={'success'}
        className="opacity-100 align-middle	mx-4"
      >
        Aktivní
      </Button>
      <CardBody>
        <p className="mb-1">
          <FormattedMessage
            {...messages.locations}
            values={{ count: <b>{data.locations}</b> }}
          />
        </p>
        <p className="mb-1">
          <FormattedMessage
            {...messages.states}
            values={{ count: <b>{data.states}</b> }}
          />
        </p>
        <p className="mb-1">
          <FormattedMessage
            {...messages.travel}
            values={{ distance: <b>{data.distance}</b> }}
          />
        </p>
      </CardBody>
    </Card>
  ) : (
    <SpinnerPuzzle />
  );
};

export default LapisOverview;
