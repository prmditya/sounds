import TeaserImg from "../assets/section-5.png";
function Teaser() {
  return (
    <section className="mx-auto mt-[131px] ">
      <img src={TeaserImg} alt="" className="inline-block w-[40vw]" />
      <div className="py-auto inline-block h-[420px] w-[40vw] bg-secondary-color p-[100px] ">
        <p>
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
        </p>
        <a href="#">See latest jobs</a>
      </div>
    </section>
  );
}

export default Teaser;
