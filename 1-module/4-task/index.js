function checkSpam(str) {
  let uppStr = str.toUpperCase()
  let Bet = '1xBet'
  let XXX = 'XXX'
  let upp1xBet = Bet.toUpperCase()
  let uppXXX = XXX.toUpperCase()

  return (uppStr.indexOf(uppXXX) !== -1 || uppStr.indexOf(upp1xBet) !== -1)

}
