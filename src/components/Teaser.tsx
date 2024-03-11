import TeaserImg from "../assets/section-5.png";
function Teaser() {
  return (
    <section className="mx-[15px] my-[50px] max-w-[700px] gap-x-0 gap-y-0 md:mx-auto  md:my-[131px] xl:grid xl:max-w-[958px] xl:grid-cols-2 xl:grid-rows-1">
      <div className="aspect-w-1 aspect-h-1  overflow-hidden">
        <img
          src={TeaserImg}
          alt=""
          className="transition-300 h-[250px] w-full object-cover transition ease-in-out hover:scale-110 xl:h-full"
        />
      </div>
      <div className="py-auto p-auto flex flex-col justify-center bg-secondary-color px-[50px] py-[30px] text-[18px] xl:col-start-2 xl:row-start-1 xl:p-[90px]">
        <p className="text-[18px]">
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
        </p>
        <a href="#" className="mt-[35px] font-bold text-primary-color">
          See latest jobs
        </a>
      </div>
    </section>
  );
}

export default Teaser;
