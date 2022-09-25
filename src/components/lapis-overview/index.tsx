import { FC } from 'react';
import { FormattedMessage } from 'react-intl';
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
  return (
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
          <FormattedMessage {...messages.locations} values={{ count: 46 }} />
        </p>
        <p className="mb-1">
          <FormattedMessage {...messages.states} values={{ count: 2 }} />
        </p>
        <p className="mb-1">
          <FormattedMessage {...messages.travel} values={{ distance: 150 }} />
        </p>
      </CardBody>
    </Card>
  );
};

export default LapisOverview;
