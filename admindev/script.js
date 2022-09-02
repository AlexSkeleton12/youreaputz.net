function submit() {
  let response = fetch('https://backend.youreaputz.net:3000/getURL', {
      headers: {
        'auth': document.getElementById('token').value.toString()
      }
    }
  ).then(response => response.text()).then(response => window.location.replace(response)
  );
}
