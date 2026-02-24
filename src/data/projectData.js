// src/data/projectData.js

import erpData from "./projects/erpProjectData";
import efsRebrandData from "./projects/efsRebrandData";
import kulukiProjectData from "./projects/kulukiData";
import loyalxProjectData from "./projects/loyalxData";

export const projectData = {
  label: "My Projects",

  projects: [
    {
      slug: "erp-system",
      data: erpData,
      skills: [ "Software Development"],
    },
    {
      slug: "kuluki",
      data: kulukiProjectData,
      skills: ["Web Design & Development"],
    },
    {
      slug: "loyalty-app",
      data: loyalxProjectData,
      skills: ["UI/UX"],
    },
    {
      slug: "efs-rebrand",
      data: efsRebrandData,
      skills: ["Other"],
    },
  ],
};