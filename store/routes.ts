// @ts-expect-error
import { IRoute } from "../typings/routes.d.ts";
import {} from "vuex";

export const state = () => ({
  list: [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Media", path: "/media" },
  ] as IRoute[],
});
