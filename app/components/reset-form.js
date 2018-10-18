import Component from '@ember/component';

export default Component.extend({
  actions: {
    resetForm() {
      var select = document.querySelectorAll('select')
      for (var i = 0; i < select.length; i++) {
        select[i].selectedIndex = 0
      }
      localStorage.clear()
    }
  }
});
