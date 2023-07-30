import { create } from "zustand";
import getUser from "./getUser";

interface UsersStore {
  user: object;
  setuser: (listofuser: object) => void;
}
const UserStore = create<UsersStore>((set) => ({
  user: {},
  setuser: (listofuser: object) => set((state) => ({ user: listofuser })),
}));

export default UserStore;
