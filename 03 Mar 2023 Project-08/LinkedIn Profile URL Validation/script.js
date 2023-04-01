function validate() {

  const urlInput = document.getElementById('url-input');
  const url = urlInput.value.trim();
  const regex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

  if (regex.test(url)) {
    document.getElementById('result').innerHTML = '<p class="valid">Valid LinkedIn profile URL!</p>';
  } else {
    document.getElementById('result').innerHTML = '<p class="invalid">Invalid LinkedIn profile URL!</p>';
  };

};