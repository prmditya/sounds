import image1 from "../assets/section-3_1.png";
import image2 from "../assets/section-3_2.png";
import image3 from "../assets/section-4_1.png";
import image4 from "../assets/section-4_2.png";

function Content() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-[30px]  xl:flex-row">
        <img
          src={image1}
          alt="man in studio"
          className="image w-[90%] sm:w-max"
        />
        <img src={image2} alt="dijee" className="image w-[90%] sm:w-max" />
      </section>

      <section className="mx-auto my-[50px] max-w-[331px] sm:max-w-[688px] md:my-[131px]">
        <p className="font-bold">
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </p>
        <p className="mt-[21px]">
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </section>

      <section className="flex flex-col items-center justify-center gap-[30px] xl:flex-row">
        <img
          src={image3}
          alt="man in studio"
          className="image w-[90%] sepia-[.75] sm:w-max"
        />
        <img
          src={image4}
          alt="dijee"
          className="image w-[90%] sepia-[.75] sm:w-[490px]"
        />
      </section>
    </>
  );
}

export default Content;
