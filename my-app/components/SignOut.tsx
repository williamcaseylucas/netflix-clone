"use client";
import { signOut } from "next-auth/react";

type Props = {};

const SignOut = (props: Props) => {
  return (
    <button className="h-10 bg-white w-full" onClick={() => signOut()}>
      Logout!
    </button>
  );
};

export default SignOut;
