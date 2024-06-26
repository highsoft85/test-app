"use client";

import { useSession, getSession } from "next-auth/react"

export default function Page() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  } else {
    return (
      <>
        <p>This is secured page.</p>
      </>
    )
    }
}