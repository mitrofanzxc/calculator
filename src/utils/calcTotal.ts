const calcTotal = (inputValue: string[], index: number): number => {
  const stack: number[] = [];
  let sign = '+';
  let num = 0;

  for (let i = index; i < inputValue.length; i += 1) {
    const current = inputValue[i];

    if (current >= '0' && current <= '9') {
      num = num * 10 + (+current - 0);
    }

    if (!(current >= '0' && current <= '9') || i === inputValue.length - 1) {
      if (current === '(') {
        num = calcTotal(inputValue, i + 1);
        let left = 1;
        let right = 0;

        for (let j = i + 1; j < inputValue.length; j += 1) {
          if (inputValue[j] === ')') {
            right += 1;

            if (right === left) {
              i = j;
              break;
            }
          }

          if (inputValue[j] === '(') {
            left += 1;
          }
        }
      }

      let previous: number | undefined = -1;

      switch (sign) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(num * -1);
          break;
        case '*':
          previous = stack.pop();

          if (previous) {
            stack.push(previous * num);
          }

          break;
        case '/':
          previous = stack.pop();

          if (previous) {
            stack.push(previous / num);
          }

          break;
        default:
          break;
      }

      sign = current;
      num = 0;

      if (current === ')') {
        break;
      }
    }
  }

  let total = 0;

  while (stack.length) {
    const lastElement = stack.pop();

    if (lastElement) {
      total += lastElement;
    }
  }

  return total;
};

const calcTotalMiddleware = (value: string) => {
  value = value.replace(/\s/g, '');
  return calcTotal(Array.from(value), 0);
};

export { calcTotal, calcTotalMiddleware };
