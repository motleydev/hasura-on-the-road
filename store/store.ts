import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import Cookies from "js-cookie";
import Router from "next/router";

type LocalUser = {
  first_name?: string | null;
  last_name?: string | null;
  company?: string | null;
  email?: string | null;
  permissions: boolean | null;
};

interface Workshop {
  user: LocalUser;
  signup: (user: LocalUser) => void;
  logout: () => void;
  formOpen: boolean;
  setFormOpen: () => void;
}

const useStore = create<Workshop>()(
  devtools(
    persist(
      (set, get) => ({
        user: { permissions: false },
        signup: (user: LocalUser) => {
          console.log("Signing up user ", user.first_name);
        },
        logout: () => {
          set({ user: { permissions: false } });
          Router.push("/");
        },
        formOpen: false,
        setFormOpen: () => {
          let formState = get().formOpen;
          set({ formOpen: !formState });
        },
      }),
      {
        name: "hasura-workshop",
        getStorage: () => localStorage,
      }
    )
  )
);

export { useStore };
