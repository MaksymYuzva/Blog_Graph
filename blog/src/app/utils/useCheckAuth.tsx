"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation"; // Import your router library here
import { AuthContext } from "@/app/context/authContext";

const useCheckAuth = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redirect to the "/auth" route
    router.push("/auth");
    return true; // Indicate that redirection occurred
  }

  return false; // Indicate that no redirection occurred
};

export default useCheckAuth;
