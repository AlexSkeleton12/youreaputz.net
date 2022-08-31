/*
Xj9ZMHqGR9HqhgDblEE4 - Weston Sleeman
*/
function submit() {
  if (document.getElementById('token').value == "Xj9ZMHqGR9HqhgDblEE4") {
    document.write("Redirecting...")
    setTimeout(() => {  window.location.replace('http://3.12.12.129:8000'); }, 1000);
  } else {
    document.write("Token invalid. Please refresh this page and try again.")
  }

}
