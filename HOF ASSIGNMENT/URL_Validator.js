
const urlPattern = /^https?:\/\/[\w\d\S]+.[\w]+$/;

// Test cases
const testUrls = [
  "http://www.example.com",
  "https://www.example.com",
  "https://example.com",
  "http://example.com",
  "https://www.example.com/page.html",
  "ftp://www.example.com",
  "http://www_example_com"
];

testUrls.forEach(url => {
  if (urlPattern.test(url)) {
    console.log(`${url} is a valid URL`);
  } else {
    console.log(`${url} is not a valid URL`);
  }
});
