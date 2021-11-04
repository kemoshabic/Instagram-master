import { format } from "date-fns";
import { isThisYear, formatDistanceStrict, formatDistanceToNow } from "date-fns/esm";

export function formatPostDate(date) {
  // MARCH 23
  const formatShort = format(new Date(date), "MMMM d").toUpperCase();
  // FEBRUARY 2, 2019
  const formatLong = format(new Date(date), "MMMM d, yyy").toUpperCase();

  return isThisYear(new Date(date)) ? formatShort : formatLong;
}

export function formatDateToNowShort(date) {
  // 5 days ago -> 5d
  // 7 week ago -> 7d
  return formatDistanceStrict(new Date(date), new Date(Date.now()))
    .split(" ")
    .map((s, i) => (i === 1 ? s[0] : s))
    .join("");
}

export function formatDateToNow(date){
  return formatDistanceToNow(new Date(date), { addSuffix: true }).toUpperCase();
}