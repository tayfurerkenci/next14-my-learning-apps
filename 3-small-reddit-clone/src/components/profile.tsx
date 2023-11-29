'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>Logged in as {session.data.user.email}</div>;
  }

  return <div>Not logged in</div>;
}
