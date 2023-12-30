"use client";
import SectionDivider from "@/components/section-divider";
import Intro from "../components/intro";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import Snowfall from "react-snowfall";
import Whale from "@/components/whale";

const steps = [
  {
    id: "1",
    message: "What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you!",
    end: true,
  },
];

const theme = {
  background: "#f5f8fb",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#EF6C00",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#EF6C00",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const config = {
  floating: true,
  bubbleStyle: { top: 0 },
};

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
        {/* <ThemeProvider theme={theme}>
          <ChatBot {...config} steps={steps} />
        </ThemeProvider> */}

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
