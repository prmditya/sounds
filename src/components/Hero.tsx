import TextLogo from "../assets/text-logo.svg";

function Hero() {
  return (
    <>
      <div className="container-padding px-[15px] xl:px-0">
        <div className="hero-bg shadow-slate-[hsl(0, 100%, 23%)] mx-auto mt-[47px] flex h-[340px]  max-w-[965px] items-center justify-center rounded-[20px] border border-slate-500 px-[15px] transition ease-in-out hover:shadow-[0_2px_42.5px_3px_rgba(255,255,255,0.23)] md:h-[562px]">
          <img
            src={TextLogo}
            alt=""
            className="mt-[-15px] w-[300px] md:w-[652px]"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
