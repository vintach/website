interface Meta {
  [key: string]: any;
}

export const getMeta = (meta: Meta) => {
  return {
    title: `${meta.title} | Raddix`
  };
};
