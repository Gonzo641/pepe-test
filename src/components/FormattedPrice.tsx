interface Amount {
    amount: number;
}

const FormattedPrice = ({ amount }: Amount) => {
    const formattedAmount = new Number(amount).toLocaleString
    ("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 2,
    });
  return (
    <span>{formattedAmount}</span>
  )
}
export default FormattedPrice