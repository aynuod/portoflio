import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello,my name is <b>Dounya Gourja</b> and I’m a
              <b> Junior Software Engineer</b> with a passion for <b>Data Science and Machine Learning</b> developer based
              in Rabat, Morocco.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              As a technologies enthusiast, I am highly passionate about
              building full-stack web applications. And I love learning new
              technologies, especially elegant code architectures and design
              patterns. I hope to leverage my technical skills to build valuable
              apps that can make a difference in people's lives.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
            Outside of programming, I am also a passionate writer. 
            My writing is not just a hobby, but a way to connect with others and share perspectives.
            Moreover, I have a deep love for volunteering and helping people. I believe in the power of community
            service and the positive impact it can have on both individuals and society.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.7}>
            <p>
              I am always looking for new opportunities to grow and learn. If you
              have a project that you would like to collaborate on, feel free to
              contact me. I would love to hear from you!
              {/* So welcome to subscribe to my social media channels above to see my works! */}
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo1.jpg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo1.jpg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
