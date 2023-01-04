export function formatNumber(value, noformat) {
  if (!value) {
    return 0
  }
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
