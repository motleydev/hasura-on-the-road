import create from "zustand";
import { devtools, persist } from "zustand/middleware";

import Cookies from "js-cookie";
import Router from "next/router";
import { Workshop } from "contentlayer/generated";

type LocalUser = {
  first_name?: string | null;
  last_name?: string | null;
  company?: string | null;
  email?: string | null;
  permissions: boolean | null;
};

interface WorkshopStore {
  user: LocalUser;
  activeWorkshop: Workshop | null;
  setActiveWorkshop: (activeWorkshop: Workshop) => void;
  signup: (user: LocalUser) => void;
  logout: () => void;
  formOpen: boolean;
  setFormOpen: () => void;
}

const useStore = create<WorkshopStore>()(
  devtools(
    persist(
      (set, get) => ({
        activeWorkshop: null,
        setActiveWorkshop: (activeWorkshop: Workshop) => {
          set({ activeWorkshop });
        },
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
