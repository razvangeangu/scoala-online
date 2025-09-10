import { useTranslations } from 'next-intl';

export default function Privacy() {
  const t = useTranslations();

  return <main>{t('privacy.title')}</main>;
}
