import cookie from "js-cookie";
import Router from "next/router";
import fetch from "isomorphic-unfetch";
import useSWR from "swr";
import useUser from "../data/use-user";
import { useEffect } from "react";

export default function LogoutButton() {

    const {loggedOut, mutate } = useUser();

  return (
    <div>
      <button
        onClick={() => {
          cookie.remove("token");
          mutate();
          Router.replace("/");
        }}
      >
        Logout
      </button>
    </div>
  );
}
