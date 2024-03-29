import {format, formatISO, formatDistance, parseISO, sub} from 'date-fns';
export {startOfDay, endOfDay} from 'date-fns';

/** Date to a machine-readable string */
export const dateToISO = (date: Date|number) => formatISO(date, {representation: "date"});

/** Date from a machine-readable string */
export const dateFromISO = parseISO;

/** Format the date (without time) into a human-readable string */
export const humanDateString = (date: Date) => format(date, "L MMM yyyy") // 13 Oct 2020

/** Format the distance into a human-readable string */
export const dateDistance = (from: Date, to: Date) => formatDistance(from, to);

/** Subtract time from the date */
export const subtractDate = sub;

/** Name of the day */
export const dayOfWeek = (date: Date, short = false) => format(date, short ? "EEE" : "EEEE");
