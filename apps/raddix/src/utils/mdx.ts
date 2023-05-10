type Meta = Record<string, string>;

export const getMeta = (meta: Meta) => {
  return {
    title: `${meta.title!} | Raddix`
  };
};
