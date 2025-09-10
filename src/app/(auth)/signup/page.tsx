import { useTranslations } from 'next-intl';

export default function SignUp() {
  const t = useTranslations();

  return <main>{t('signup.title')}</main>;
}
