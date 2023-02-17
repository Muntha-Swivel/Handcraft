interface IPages {
  label: string;
  page: string;
}

const pages: IPages[] = [
  {
    label: "Home",
    page: "/",
  },

  {
    label: "Login",
    page: "/login",
  },
];

export { pages };
