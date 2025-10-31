const evalExpression = (input: string): number => {
  if (!input) return 0;

  const sanitizedInput = input.replace(/\n/g, ",").replace(/\s+/g, "");
  const sanitizedExpressions = sanitizedInput.split(",");

  return sanitizedExpressions.reduce(
    (acc, curr) => acc + evalArithmetic(curr),
    0
  );
};

const evalArithmetic = (expression: string) => {
  const numberStack: number[] = [];
  let currentOperator: string = "+";

  if (!expression) return 0;

  const tokens = expression.match(/(\d+\.?\d*|[+\-*/])/g);
  if (!tokens) return 0;

  for (const token of tokens) {
    if (/[+\-*/]/.test(token)) {
      currentOperator = token;
    } else {
      const num = Number(token);
      switch (currentOperator) {
        case "+":
          numberStack.push(num);
          break;
        case "-":
          numberStack.push(-num);
          break;
        case "*":
          numberStack.push(numberStack.pop()! * num);
          break;
        case "/":
          numberStack.push(numberStack.pop()! / num);
          break;
      }
    }
  }
  return numberStack.reduce((a, b) => a + b, 0);
};

export default evalExpression;
