function submit() {
  let response = fetch('http://3.140.129.44:3000/getURL', {
      headers: {
        'auth': document.getElementById('token').value.toString()
      }
    }
  ).then(response => response.text()).then(response => window.location.replace(response)
  );
}
