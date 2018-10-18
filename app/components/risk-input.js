import Component from '@ember/component';

export default Component.extend({
  actions: {
    updateRisk(event) {
      var htmlRisk = document.getElementById('risk')

      if (localStorage.length != 0) {
        var selectedOptions = JSON.parse(localStorage.getItem('selectedOptions'))
      } else {
        var selectedOptions = {
          id: new Array,
          index: new Array,
          value: new Array
        }
      }

      function pushValues() {
        selectedOptions.id.push(event.target.id)
        selectedOptions.index.push(event.target.selectedIndex)
        selectedOptions.value.push(event.target.value)
      }

      function putValues(i) {
        selectedOptions.id[i] = event.target.id
        selectedOptions.index[i] = event.target.selectedIndex
        selectedOptions.value[i] = event.target.value
      }

      var check = true

      if (selectedOptions.id.length == 0) {
        pushValues()
      } else {
        for (var i = 0; i < selectedOptions.id.length; i++) {
          if (selectedOptions.id[i] == event.target.id) {
            check = false
            putValues(i)
          }
        }

        if (check) {
          pushValues()
        }
      }

      localStorage.setItem('selectedOptions', JSON.stringify(selectedOptions))
    }
  }
});
