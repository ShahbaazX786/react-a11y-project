const evalExpression = (input: string): number => {
  if (!input) return 0;

  const sanitizedInput = input.replace(/\n/g, ",");

  return sanitizedInput
    .split(",")
    .map((x) => x.trim())
    .reduce((acc, curr) => {
      const tempNumber = Number(curr);
      const currNumber = isNaN(tempNumber) ? 0 : tempNumber;
      return acc + currNumber;
    }, 0);
};

export default evalExpression;
