const urlRegex = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-\._]+(\.[a-zA-Z]+)+$/;

function validateUrl(url) {
  if (urlRegex.test(url)) {
    console.log(`${url} is a valid URL`);
  } else {
    console.log(`${url} is not a valid URL`);
  }
}

// Examples
validateUrl("https://www.google.com"); // Valid URL
validateUrl("http://example.com"); // Valid URL
validateUrl("https://example.co.uk"); // Valid URL
validateUrl("http://123.45.67.89"); // Valid URL
validateUrl("http://example"); // Invalid URL
validateUrl("ftp://example.com"); // Invalid URL
