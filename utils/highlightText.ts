type ModifyTextProps = {
  text: string;
  highlight: boolean;
};

export const highlightQueryText = (
  text: string,
  query: string
): ModifyTextProps[] => {
  const slashIndex = text.indexOf("/");
  if (slashIndex === -1) {
    return [{ text, highlight: false }];
  }

  const beforeSlash = text.slice(0, slashIndex + 1);
  const afterSlash = text.slice(slashIndex + 1);

  if (!query) {
    return [
      { text: beforeSlash, highlight: false },
      { text: afterSlash, highlight: false },
    ];
  }

  const regex = new RegExp(`(${query})`, "gi");
  const parts = afterSlash.split(regex);

  return [
    { text: beforeSlash, highlight: false },
    ...parts.map((part) => ({
      text: part,
      highlight: regex.test(part),
    })),
  ];
};
