export const formatDate = (date: Date) => {
  return Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
  }).format(date);
};

export const clearObject = (obj: object) => {
  for (const [key, value] of Object.entries(obj)) {
    if (!value) delete obj[key as keyof typeof obj];
  }
  return obj;
};

export const formatMoney = (amount: number) => {
  const fixedAmount = amount.toFixed(2);

  return `R$ ${fixedAmount.replace(".", ",")}`;
};

export const capitalize = (str: string | null) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};
