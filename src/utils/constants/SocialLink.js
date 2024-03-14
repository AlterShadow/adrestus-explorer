import { Icon } from "@iconify/react";

const SocialLink = [
  {
    link: "/",
    container: (
      <Icon
        icon="heroicons:users-solid"
        width="18"
        height="18"
        className="text-white dark:text-darkIconColor"
      />
    ),
  },
  {
    link: "/",
    container: (
      <Icon
        icon="ic:round-discord"
        className="text-white dark:text-darkIconColor"
        width="18"
        height="18"
      />
    ),
  },
  {
    link: "/",
    container: (
      <Icon
        icon="solar:bookmark-bold"
        className="text-white dark:text-darkIconColor"
        width="18"
        height="18"
      />
    ),
  },
  {
    link: "/dashboard",
    container: (
      <Icon
        icon="file-icons:telegram"
        className="text-white dark:text-darkIconColor pr-[2px]"
        width="18"
        height="18"
      />
    ),
  },
  {
    link: "/",
    container: (
      <Icon
        icon="ri:twitter-x-fill"
        className="text-white dark:text-darkIconColor"
        width="18"
        height="18"
      />
    ),
  },
];

export default SocialLink;
