import ContactList from "@/components/contact-list";
import MotionText from "@/components/motion-text";
import MotionDiv from "@/components/motion-div";

export default function hero() {
  return (
    <section className="my-8 flex flex-col items-center justify-center">
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>Hi, I'm GOURJA DOUNYA! 👋</MotionText>
      </h1>
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <video
            className="h-[170px] w-[170px] md:h-[190px] md:w-[190px]"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={"/animoji.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MotionDiv>
      </div>
      <h1>
        <MotionDiv delayOffset={0.8}>Junior Software Engineer🧑🏻‍💻</MotionDiv>
      </h1>
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={1.2}>
          <p>Welcome to my personal page!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1.4}>
          <p>
            Just an indie <b>✨ Junior Software Engineer</b> with a passion for Data Science and Machine Learning,
            who loves to build innovative solutions that solve real-world problems.
          </p>
        </MotionDiv>
      </div>
      <div className="my-1"> {/* Change my-4 to my-2 to reduce the vertical margin */}
  <MotionDiv delayOffset={1.5}>
    <a
      href="/path/to/your/CV.pdf"
      download
      className="inline-block rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-900 transition"
    >
      View my Resume
    </a>
  </MotionDiv>
</div>

      {/* <div className="my-4">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div> */}
    </section>
  );
}
