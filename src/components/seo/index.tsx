import { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MessageDescriptor, useIntl } from 'react-intl';
import { messages } from './messages';

interface IProps {
  title?: MessageDescriptor;
  titleTemplate?: MessageDescriptor;
  description?: MessageDescriptor;
}

const SEO: FC<IProps> = ({ title, titleTemplate, description }) => {
  const t = useIntl();

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          {t.formatMessage({ ...title })} -{' '}
          {t.formatMessage({ ...titleTemplate })}
        </title>
        <meta
          name="description"
          content={t.formatMessage({ ...description })}
        />
      </Helmet>
    </HelmetProvider>
  );
};

SEO.defaultProps = {
  title: messages['title'],
  titleTemplate: messages['titleTemplate'],
  description: messages['description'],
};

export default SEO;
