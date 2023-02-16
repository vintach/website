export const getFileExtension = (filename: string) => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename)?.[0] : undefined;
};
