const breakpoints = [20, 40, 48, 64, 80, 86, 120, 240];

/*
export const from = breakpoints.map(
  (bp) => `@media screen and (min-width: ${bp}rem)`,
);
*/

export const from = (bp) => `@media screen and (min-width: ${bp}rem)`;

export const within = (minScreen, maxScreen) =>
  `@media screen and (min-width: ${minScreen}rem) and
  (max-width: ${maxScreen - 0.0001}rem)`;

export const until = (bp) => `@media screen and (max-width: ${bp}rem)`;

export const screens = {
  mobile: breakpoints[1],
  minitablet: breakpoints[2],
  tablet: breakpoints[3],
  laptop: breakpoints[4],
  desktop: breakpoints[5],
  fullhd: breakpoints[6],
  ultrahd: breakpoints[7],
};

export const mobile = `@media screen and (max-width: ${breakpoints[1]}rem)`;

export const minitablet = `@media screen and
(min-width: ${breakpoints[2]}rem) and
(max-width: ${breakpoints[3] - 0.0001}rem)`;

export const tablet = `@media screen and
(min-width: ${breakpoints[3]}rem) and
(max-width: ${breakpoints[4] - 0.0001}rem)`;

export const laptop = `@media screen and
(min-width: ${breakpoints[4]}rem) and
(max-width: ${breakpoints[5] - 0.0001}rem)`;

export const desktop = `@media screen and
(min-width: ${breakpoints[5]}rem) and
(max-width: ${breakpoints[6] - 0.0001}rem)`;

export const fullhd = `@media screen and
(min-width: ${breakpoints[6]}rem) and
(max-width: ${breakpoints[7] - 0.0001}rem)`;
