import { FC } from 'react';
import { FormattedRelativeTime } from 'react-intl';
import { RelativeTimeFormatSingularUnit } from '@formatjs/ecma402-abstract';
interface IProps {
  utcTimeStamp: number;
}

const TimeAfter: FC<IProps> = ({ utcTimeStamp }) => {
  let selectedFormat: RelativeTimeFormatSingularUnit = 'year';
  let timeDiff = Math.abs(utcTimeStamp - Date.now() / 1000);

  if (timeDiff < 60) {
    selectedFormat = 'second';
  } else if (timeDiff < 3600) {
    selectedFormat = 'minute';
    timeDiff /= 60;
  } else if (timeDiff < 86400) {
    selectedFormat = 'hour';
    timeDiff /= 3600;
  } else if (timeDiff < 2592000) {
    selectedFormat = 'day';
    timeDiff /= 86400;
  } else if (timeDiff < 31536000) {
    selectedFormat = 'month';
    timeDiff /= 2592000;
  } else {
    timeDiff /= 31536000;
  }

  return (
    <FormattedRelativeTime
      value={Math.round(-timeDiff)}
      unit={selectedFormat}
    />
  );
};

export default TimeAfter;
