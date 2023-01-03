export const milToNormalTime = (duration) => {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  let days = Math.floor(duration / (1000 * 60 * 60 * 24));
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  days = days < 10 ? "0" + days : days;

  return " D:" + days + " H:" + hours + " M:" + minutes + " S:" + seconds + ".";
};
