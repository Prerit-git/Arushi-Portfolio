import Image from "next/image";

const Contact = () => {
  const logoUrl = "/ArushiLogo.svg";
  const mailLogo = "/mail.svg";
  const linkedinLogo = "/linkedin.svg";
  return (
    <>
      <section className="h-fit bg-[#FF0000] w-full flex flex-col px-[20px] md:px-[90px] pt-10 md:pt-20 pb-5 md:pb-15 gap-[24px]">
        <p className="uppercase text-[20px] md:text-[24px] font-medium">Let&apos;s Connect</p>
        <p className="font-extrabold text-[24px] md:text-[32px] leading-[110%]">
          Looking for a product designer? <br />Drop me a line.
        </p>
        <p className="text-[20px] md:text-[24px] font-medium underline">
          <a href="mailto:designedbyarushi@gmail.com">
            designedbyarushi@gmail.com
          </a>
        </p>

        <div className="flex justify-between items-baseline">
          <Image
            src={logoUrl}
            alt="Logo"
            width={92}
            height={92}
            priority
          />
          <div className="flex gap-2">
            <Image
            src={mailLogo}
            alt="mail-logo"
            width={32}
            height={32}
            />
            <Image
            src={linkedinLogo}
            alt="linkedin-logo"
            width={32}
            height={32}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
