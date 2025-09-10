'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type SignInFormValues = {
  email: string;
  password: string;
};

export default function SignIn() {
  const t = useTranslations('signin');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>();

  const onSubmit = (data: SignInFormValues) => {
    // TODO: handle sign in

    console.log(data);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-accent-foreground">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6 p-8">
          <h1 className="mb-6 text-center text-2xl font-bold">{t('title')}</h1>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Label htmlFor="email">{t('email')}</Label>
              <Input
                autoComplete="email"
                id="email"
                type="email"
                {...register('email', { required: true })}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span className="text-xs text-red-500">
                  {t('email')} <span className="sr-only">{t('isRequired')}</span>
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="password">{t('password')}</Label>
              <Input
                autoComplete="current-password"
                id="password"
                type="password"
                {...register('password', { required: true })}
                aria-invalid={!!errors.password}
              />
              {errors.password && (
                <span className="text-xs text-red-500">
                  {t('password')} <span className="sr-only">{t('isRequired')}</span>
                </span>
              )}
            </div>
            <div className="flex justify-end">
              <a className="text-primary underline hover:text-primary/80 text-xs" href="/forgot">
                {t('forgot')}
              </a>
            </div>
            <Button className="w-full" disabled={isSubmitting} type="submit">
              {t('submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
