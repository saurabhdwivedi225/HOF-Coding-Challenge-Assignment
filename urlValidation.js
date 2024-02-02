/*5. URL validation.
Write a program using a regex that matches valid URLs. Valid URLs should start with either http:// or https://,followed by one or more letters, digits, or special characters, followed by a dot, followed by one or more letters. Print a message indicating if the input matches the conditions or not.*/
// Solution:- 
const regexPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+[.][a-zA-Z]+$/;
// Function for pattern testing 
function validateURL(url) {
  if (regexPattern.test(url)) {
    console.log(`The URL ${url} is valid.`);
  } else {
    console.log(`The URL ${url} is invalid.`);
  }
}

// Test cases
validateURL("https://www.example.com"); // Valid
validateURL("http://www.google.co.in"); // Valid
validateURL("www.example.com"); // Invalid (missing protocol)
validateURL("https://example.com/path"); // Invalid (path not allowed)
validateURL("https://www.123example.com"); // Valid (digits allowed)
validateURL("https://-example.com"); // Valid (hyphen allowed)
validateURL("https://example._com"); // Invalid (invalid character underscore)
