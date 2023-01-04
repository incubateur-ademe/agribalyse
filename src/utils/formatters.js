export function formatNumber(value, noformat) {
  if (!value) {
    return 0
  }
  let tempTotal =
    value > 0.0000001 ? Math.round(value * 10000000) / 10000000 : value
  return value
    .toExponential()
    .split('e')
    .map((part, index) =>
      index === 0
        ? Number(part).toLocaleString('fr-fr', { maximumFractionDigits: 2 })
        : part === '+0'
        ? ''
        : 'e' + part
    )
    .join('')
}
