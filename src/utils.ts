export const transformDate = (date: string) => {
  const tempDate = new Date(date);
  const day = tempDate.getDate();
  const month = tempDate.getMonth() + 1;
  const year = tempDate.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export function toPlainText(blocks: any[] = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== "block" || !block.children) {
          return "";
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child: any) => child.text).join("");
      })
      // join the paragraphs leaving split by two linebreaks
      .join("\n\n")
  );
}

export function toPlainTextAndSummarized(blocks: any[] = [], amount: number): string {
  return toPlainText(blocks).split(" ").slice(0, amount).join(" ") + "...";
}
