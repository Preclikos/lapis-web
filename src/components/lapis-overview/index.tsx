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
          Navštívil <b>46</b> míst
        </p>
        <p className="mb-1">
          Podíval se do <b>2</b> států
        </p>
        <p className="mb-1">
          Procestoval <b>150</b> km
        </p>
      </CardBody>
    </Card>
  );
};

export default LapisOverview;
