'use client';

import { useState, useEffect } from 'react';
import Spinner from './elements/Spinner';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) return <Spinner />;
  return <>{children}</>;
};

export default ClientOnly;
