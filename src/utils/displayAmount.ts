const displayAmount = (amountAsInt: number) => {
  const decimals = (amountAsInt / 100).toFixed(2);

  const string = decimals.toString();

  return '$ ' + string;
};

export default displayAmount;
