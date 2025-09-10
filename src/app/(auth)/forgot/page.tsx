import { useTranslations } from 'next-intl';

export default function Forgot() {
  const t = useTranslations();

  return <main>{t('forgot.title')}</main>;
}
