const links = [
  {
    rel: "stylesheet",
    href: "/css/app-wa-a60ddbceb7292f11c9e430d067b1eb9f.css?vsn=d",
    attributes: {
      "data-purpose": "Layout StyleSheet",
      title: "Web Awesome",
    },
  },
  {
    rel: "stylesheet",
    href: "https://site-assets.fontawesome.com/releases/v6.5.2/css/all.css",
  },
  {
    rel: "stylesheet",
    href: "https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-thin.css",
  },
  {
    rel: "stylesheet",
    href: "https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-solid.css",
  },
  {
    rel: "stylesheet",
    href: "https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-regular.css",
  },
  {
    rel: "stylesheet",
    href: "https://site-assets.fontawesome.com/releases/v6.5.2/css/sharp-light.css",
  },
];

links.forEach((link) => {
  const linkElement = document.createElement("link");
  linkElement.rel = link.rel;
  linkElement.href = link.href;
  for (const [key, value] of Object.entries(link.attributes || {})) {
    linkElement.setAttribute(key, value);
  }
  document.head.appendChild(linkElement);
});
