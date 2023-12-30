"use client";
import SectionDivider from "@/components/section-divider";
import Intro from "../components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Snowfall from "react-snowfall";
import Whale from "@/components/whale";

export default function Home() {
  let images: any = [];

  if (typeof document !== "undefined") {
    const createSnowflake = (src: any) => {
      const snowflake = document.createElement("img");
      snowflake.src = src;
      return snowflake;
    };

    const snowflake1 = createSnowflake("/flower2.png");
    const snowflake2 = createSnowflake("/flower2.png");

    images = [snowflake1, snowflake2];
  }
  return (
    <>
      <Snowfall
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
        }}
        images={images}
        radius={[18, 18]}
        snowflakeCount={10}
        speed={[0.01, 0.05]}
        wind={[0.01, 0.05]}
      />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <div className="flex md:flex-wrap lg:flex-nowrap justify-center items-center gap-10">
          <Contact />
          <Whale />
        </div>
      </main>
    </>
  );
}
