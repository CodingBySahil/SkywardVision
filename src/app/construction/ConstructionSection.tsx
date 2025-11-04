import ConstructionCarousel from "@/components/sections/ConstructionCarousel";
import OurTeam from "@/components/sections/OurTeam";
import ProjectsCompleted from "@/components/sections/ProjectsCompleted";
import RunningProjects from "@/components/sections/RunningProjects";
import React from "react";

const ConstructionSection = () => {
  return (
    <div>
      <ConstructionCarousel />
      <RunningProjects />
      <ProjectsCompleted />
      <OurTeam />
    </div>
  );
};

export default ConstructionSection;
