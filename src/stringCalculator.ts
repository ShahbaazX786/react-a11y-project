const evalExpression = (input: string): number => {
  if (!input) return 0;

  if (input && input.includes(",")) {
    return input.split(",").reduce((acc, curr) => {
      const tempNumber = Number(curr);
      const currNumber = isNaN(tempNumber) ? 0 : tempNumber;
      return acc + currNumber;
    }, 0);
  }

  return +input;
};

export default evalExpression;
