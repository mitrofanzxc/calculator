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
        case '%':
          previous = stack.pop();

          if (previous) {
            stack.push(previous % num);
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
  const str = value.replace(/\s/g, '');

  for (let i = 0; i < str.length; i += 1) {
    if (value[i] === '.' && value[i + 1] === '.') {
      throw new Error('too many dots in a row...');
    } else if (str.includes('/0')) {
      throw new Error(`can't divide by zero...`);
    } else if (
      str[str.length - 1] === '%' ||
      str[str.length - 1] === '+' ||
      str[str.length - 1] === '-' ||
      str[str.length - 1] === '*' ||
      str[str.length - 1] === '/'
    ) {
      throw new Error(`math sign cannot be in last place`);
    } else if (
      (value[i] === '%' ||
        value[i] === '+' ||
        value[i] === '-' ||
        value[i] === '*' ||
        value[i] === '/') &&
      (value[i + 1] === '%' ||
        value[i + 1] === '+' ||
        value[i + 1] === '-' ||
        value[i + 1] === '*' ||
        value[i + 1] === '/') &&
      (value[i + 2] === '%' ||
        value[i + 2] === '+' ||
        value[i + 2] === '-' ||
        value[i + 2] === '*' ||
        value[i + 2] === '/')
    ) {
      throw new Error(`too many math signs in a row...`);
    }
  }

  for (let j = 0; j < str.length; j += 1) {
    let leftParenthesis = 0;
    let rightParenthesis = 0;

    if (value[j] === '(') {
      leftParenthesis += 1;
    } else if (value[j] === ')') {
      rightParenthesis += 1;
    }

    if (leftParenthesis !== rightParenthesis) {
      throw new Error(`number of brackets does not match`);
    }
  }

  return calcTotal(Array.from(str), 0);
};

export { calcTotal, calcTotalMiddleware };
