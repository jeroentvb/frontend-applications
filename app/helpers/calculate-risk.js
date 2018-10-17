import { helper } from '@ember/component/helper';

export function calculateRisk(x) {
  var risk = Number((1 / (1 + Math.exp(-1 * (-8.57219 + x))) * 100000000).toFixed(0));

  return risk;
}

export default helper(calculateRisk);
