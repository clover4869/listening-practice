const convertTimeString = (seconds: number) => {
  const m = parseInt(((seconds % (60 * 60)) / 60).toString());
  const s = parseInt((seconds % 60).toString());

  return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
};

export {convertTimeString}