// Central export file for all data
export { personalInfo } from './personal';
export { experiences } from './experiences';
export { education } from './education';
export { skills, getAllSkills, getSkillsByCategory, getSkillsByLevel } from './skills';

// Combined CV data object
export const cvData = {
  personal: personalInfo,
  experiences,
  education,
  skills
};
