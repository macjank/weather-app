import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();

  return <div>{t('test')}</div>;
};

export default App;