import { useTranslations } from 'next-intl';

export default function Terms() {
  const t = useTranslations();

  return <main>{t('terms.title')}</main>;
}
