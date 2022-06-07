import {
  modules,
  students,
  mentors,
  classes
} from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
// const possToTeach = (moduleName) => {
//   const possibleMentorToTeach = mentors.filter(mentor => mentor.canTeach.includes(moduleName))
//     .map(ment => ment.name);
//   return possibleMentorToTeach;
// }
const possibleMentorsForModule = (moduleName) => {
  const namesOfPossibleMentorsForModule = mentors
    .filter((mentor) => mentor.canTeach.includes(moduleName))
    .map((mentor) => mentor.name);

  return namesOfPossibleMentorsForModule;
};
console.log(possibleMentorsForModule("using-apis"));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
// const findMentorForModu = (moduleName) => {
//   const poss = possToTeach(moduleName);
//   const randomPoss = poss(Math.floor(Math.random() * poss).length);
//   return randomPoss;
// }
const findMentorForModule = (moduleName) => {
  const namesOfPossibleMentorsForModule = possibleMentorsForModule(moduleName);
  const randomPossibleMentorforModule =
    namesOfPossibleMentorsForModule[
      Math.floor(Math.random() * namesOfPossibleMentorsForModule.length)
    ];
  return randomPossibleMentorforModule;
};
// You can uncomment out this line to try your function
console.log(findMentorForModule("javascript"));