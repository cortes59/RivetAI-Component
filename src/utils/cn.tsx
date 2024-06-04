export const cn = (classes: { [key: string]: boolean | null | undefined }) => {
  return Object.keys(classes)
    .filter((key) => classes[key])
    .join(" ");
};
