'use client';

import Button from '@/app/components/core/button/button';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

export default function ButtonCreate( { children }: { children: ReactNode }) {
  const router = useRouter();

  const onClick = () => {
    router.push('/games/create');
  }

  return(
    <Button
      handler={onClick}
    >
      {children}
    </Button>
  )
}
