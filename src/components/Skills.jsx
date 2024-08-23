import React from "react";

const skillsData = [
  {
    id: 1,
    name: "HTML5",
    icon: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
  },
  {
    id: 2,
    name: "CSS3",
    icon: "https://img.icons8.com/?size=100&id=3BTBsJs5myRy&format=png&color=000000",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000",
  },
  {
    id: 4,
    name: "React",
    icon: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
  },
  {
    id: 5,
    name: "Node.js",
    icon: "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
  },
  {
    id: 6,
    name: "Git",
    icon: "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
  },
  {
    id: 7,
    name: "MongoDB",
    icon: "https://img.icons8.com/?size=100&id=jD-fJzVguBmw&format=png&color=000000",
  },
];

const Skills = () => {
  return (
    <section className=" text-center " id="skills">
      <div className="mb-9 text-center text-3xl lg:text-4xl font-extrabold">
        Skills
      </div>
      <div className="flex flex-row flex-wrap gap-6 md:w-[600px] justify-center mx-auto">
        {skillsData.map((skill) => (
          <div
            key={skill.id}
            className="rounded-lg border border-stone-50/30 bg-black/20 backdrop-blur-lg flex gap-2 items-center "
          >
            <img src={skill.icon} alt={skill.name} className="w-14 h-14" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
