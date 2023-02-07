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
    label: "About",
    page: "/about",
  },
  {
    label: "Contact",
    page: "/contact",
  },
  {
    label: "Profile",
    page: "/login",
  },
];

export { pages };
