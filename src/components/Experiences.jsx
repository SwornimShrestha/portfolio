import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
const Experiences = () => {
  return (
    <div className="text-[#f5f4f4]" id="work">
      <h1 className=" text-center text-3xl lg:text-4xl font-extrabold  mb-16">
        <span className=" "> Work Experiences </span>
      </h1>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <div className="">
              <h1 className="text-lg underline  decoration-[#6e40f9bf] underline-offset-8 decoration-1 font-extralight">
                ReactJs Developer Intern{" "}
                <span className="text-blue-400">
                  {" "}
                  @Sastra Network Solution Ltd
                </span>
              </h1>
              <h3 className="text-xs text-[#f5f4f4af] my-3 font-semibold">
                May 2024
              </h3>
              <ul className="list-disc list-disc-red  pl-6 text-[#f5f4f488] leading-8  text-sm">
                <li>Developed dynamic front-end layouts using React.js.</li>
                <li>
                  Collaborated with back-end developers to integrate APIs and
                  ensure seamless functionality.
                </li>
                <li>
                  Utilized Tailwind CSS and Material-UI for designing responsive
                  and visually appealing user interfaces.
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            {" "}
            <div className="">
              <h1 className="text-lg underline  decoration-[rgb(56,93,215)] underline-offset-8 decoration-1 font-extralight">
                Technical Support Assistant{" "}
                <span className="text-blue-400 font-extralight">
                  {" "}
                  @Vianet Communication Telecommunication
                </span>
              </h1>
              <h3 className="text-xs text-[#f5f4f488] my-3 font-bold">
                May 2024
              </h3>
              <ul className="list-disc list-disc-red  pl-6 text-[#f5f4f488] leading-8 text-sm ">
                <li>
                  As a Technical Support Assistant at Vianet Communication, my
                  primary responsibility was to assist clients in resolving
                  technical issues via phone calls.
                </li>
                <li>
                  My duties likely included troubleshooting various issues
                  related to internet connectivity, software configurations, and
                  network setups.
                </li>
              </ul>
            </div>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Experiences;
