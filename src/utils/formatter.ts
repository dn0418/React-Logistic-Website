export const formatMoney = (amount: number, currecy: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currecy,
  }).format(amount);
};
