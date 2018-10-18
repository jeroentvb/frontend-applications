import Component from '@ember/component';

export default Component.extend({
  actions: {
    resetForm() {
      var select = document.querySelectorAll('select')
      var htmlRisk = document.getElementById('risk')
      for (var i = 0; i < select.length; i++) {
        select[i].selectedIndex = 0
      }
      htmlRisk.textContent = 'Het risico op een uithuisplaatsing kon nog niet worden berekend.'
      localStorage.clear()
    }
  }
});
