const evalExpression = (input: string): number => {
  if (!input) return 0;

  if (input && input.includes(",")) {
    return input.split(",").reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
  }

  return +input;
};

export default evalExpression;
