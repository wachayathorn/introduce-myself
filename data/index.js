// Central export file for all data
export { personalInfo } from './personal';
export { experiences } from './experiences';
export { education } from './education';
export { skills, getAllSkills, getSkillsByCategory, getSkillsByLevel } from './skills';

// Import for cvData object
import { personalInfo } from './personal';
import { experiences } from './experiences';
import { education } from './education';
import { skills } from './skills';

// Combined CV data object
export const cvData = {
  personal: personalInfo,
  experiences,
  education,
  skills
};
