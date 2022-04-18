import React from "react";
import SkillModel from "models/Skill";

type Props = { skill: SkillModel };

const Skill = ({ skill }: Props) => {
  return (
    <div key={skill.title} className="flex flex-col items-center">
      <div className="w-[5rem] h-[5rem] rounded-full flex justify-center items-center bg-white shadow-xl">
        <img
          src={skill.image}
          alt=""
          className="w-[4rem] h-[4rem] object-contain"
        />
      </div>
      <p className="mt-2 text-xs font-bold uppercase">{skill.title}</p>
    </div>
  );
};

export default Skill;
