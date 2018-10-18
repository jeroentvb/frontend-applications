window.onload = function () {
  if (localStorage.length != 0) {
    var selectedOptions = JSON.parse(localStorage.getItem('selectedOptions'))

    for (var i = 0; i < selectedOptions.id.length; i++) {
      var element = document.getElementById(selectedOptions.id[i])

      element.selectedIndex = selectedOptions.index[i]
    }
  }
}
