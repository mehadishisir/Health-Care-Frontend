"use client";

import { getMe, googleOAuth, userLogin, userLogOut } from "@/api";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useLogin() {
  return useMutation({
    mutationFn: userLogin,
  });
}

export function useLogOut() {
  return useMutation({
    mutationFn: userLogOut,
  });
}
export function useGoogleOAuth() {
  return useMutation({
    mutationFn: googleOAuth,
  });
}

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getMe,
    retry: false
  });
}