function getSecondsToday() {
  let now = new Date();

  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let mls = now - today;

  return Math.round(mls / 1000);
}
