"use client";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import useCurrentUser from "@/hooks/useCurrentUser";

export default function Home() {
  const { data, error, isLoading, mutate } = useCurrentUser();
  console.log("data", data);
  return (
    <>
      <h1 className="text-2xl text-green-500">Netflix clone</h1>
    </>
  );
}
