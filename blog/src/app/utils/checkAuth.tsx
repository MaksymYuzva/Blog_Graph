"use server";
import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import axios from "@/app/core/axios";
import * as Api from "@/app/api/index";

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  try {
    const { _token } = nookies.get(ctx);

    axios.defaults.headers.Authorization = "Bearer " + _token;
    return {};
  } catch (err) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
};
