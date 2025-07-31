function checkSpam(str) {
  const lowStr = str.toLowerCase()
  const low1xBet = '1xBet'.toLowerCase()
  const lowXXX = 'XXX'.toLowerCase()
  return lowStr.includes(lowXXX) || lowStr.includes(low1xBet);
}