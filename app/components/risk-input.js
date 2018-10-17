import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateRisk() {
      var select = document.querySelectorAll('select')
      var htmlRisk = document.getElementById('risk')

      var array = new Array
      for (var i = 0; i < select.length; i++) {
        if (select[i].value != 'Selecteer') {
          array.push(parseFloat((select[i].value).replace(',', '.')))
        }
      }

      var riskFactor = 0
      for (var x = 0; x < array.length; x++) {
        riskFactor += array[x]
      }

      var risk = Number( ( 1 / ( 1 + Math.exp( -1 * ( -8.57219 + riskFactor ) ) ) * 100 ).toFixed( 2 ) );
      htmlRisk.textContent = risk
    }
  }
});
