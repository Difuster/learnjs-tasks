function getSecondsToTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

  let mls = tomorrow - now;

  return Math.round(mls / 1000);
}
