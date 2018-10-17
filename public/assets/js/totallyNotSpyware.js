function get_risk(X, Y) {
  var risk = Number((1 / (1 + Math.exp(-1 * (-8.57219 + X))) * 100000000).toFixed(Y));

  if (risk > 0) {
    animate_value('riskPlace', 0, risk, 1000);
  } else {
    animate_value('riskPlace', 0, 1, 1000);
  }

  return risk;
}
