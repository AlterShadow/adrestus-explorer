import SocialLink from "../utils/constants/SocialLink";

const Footer = () => {
  return (
    <div className="w-full h-[110px]">
      <div className="bg-white dark:bg-darkPrimary p-6 flex items-center justify-center">
        <div className="flex flex-col">
          <div className="w-80 flex flex-row justify-center items-center max-w-full gap-7">
            {SocialLink.map((item, index) => (
              <a key={index} href={item.link}>
                <div className="rounded-full p-2 bg-fontPrimary dark:border-darkColorSeparator dark:bg-transparent border-[1px] hover:scale-[1.2] transition-all duration-200">
                  {item.container}
                </div>
              </a>
            ))}
          </div>
          <div className="h-[12px] self-stretch"></div>
          <div className="w-80 flex flex-row justify-center items-center max-w-full text-center">
            <span className="text-[12px] text-font text-fontPrimary">
              © Harmony 2023 . hello@harmony.one
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
