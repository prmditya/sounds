import TextLogo from "../assets/text-logo.svg";

function Hero() {
  return (
    <>
      <div className="hero-bg shadow-slate-[hsl(0, 100%, 23%)] image mx-auto mt-[47px] flex  h-[340px] max-w-[965px] items-center justify-center rounded-[20px] px-[15px]  md:h-[562px]">
        <img
          src={TextLogo}
          alt=""
          className="mt-[-15px] w-[300px] md:w-[652px]"
        />
      </div>
    </>
  );
}

export default Hero;
