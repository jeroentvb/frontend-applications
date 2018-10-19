import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateRisk(event) {
      var htmlRisk = document.getElementById('risk');

      if (localStorage.length != 0) {
        var selectedOptions = JSON.parse(
          localStorage.getItem('selectedOptions')
        );
      } else {
        selectedOptions = {
          id: new Array(),
          index: new Array(),
          value: new Array(),
          risk: Number
        };
      }

      function pushValues() {
        selectedOptions.id.push(event.target.id);
        selectedOptions.index.push(event.target.selectedIndex);
        selectedOptions.value.push(event.target.value);
      }

      function putValues(i) {
        selectedOptions.id[i] = event.target.id;
        selectedOptions.index[i] = event.target.selectedIndex;
        selectedOptions.value[i] = event.target.value;
      }

      var check = true;

      if (selectedOptions.id.length == 0) {
        pushValues();
      } else {
        for (var i = 0; i < selectedOptions.id.length; i++) {
          if (selectedOptions.id[i] == event.target.id) {
            check = false;
            putValues(i);
          }
        }

        if (check) {
          pushValues();
        }
      }

      var riskFactor = 0;
      for (var x = 0; x < selectedOptions.value.length; x++) {
        riskFactor += parseFloat(selectedOptions.value[x].replace(',', '.'));
      }

      var risk = Number(
        ((1 / (1 + Math.exp(-1 * (-8.57219 + riskFactor)))) * 100).toFixed(2)
      );

      var riskHeight = '';
      if (risk <= 2) {
        riskHeight = 'laag risico.';
      } else if (risk > 2 && risk <= 4) {
        riskHeight = 'gemiddeld risico.';
      } else if (risk > 5 && risk <= 10) {
        riskHeight = 'hoog risico.';
      } else if (risk > 10) {
        riskHeight = 'zeer hoog risico.';
      }

      var riskString = `Het risico op een uithuisplaatsing is ${risk}%. Dat is een ${riskHeight}`;

      htmlRisk.textContent = riskString;
      selectedOptions.risk = riskString;

      localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions));
    }
  }
});
