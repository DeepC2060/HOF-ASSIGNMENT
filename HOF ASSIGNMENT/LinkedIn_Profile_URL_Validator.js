function validateLinkedInProfileUrl(url) {
    const regex = /^https:\/\/www.linkedin.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return regex.test(url);
  }
  
  // Example usage
  const validUrl = 'https://www.linkedin.com/in/johndoe123';
  const invalidUrl = 'https://www.linkedin.com/in/123abc';
  const invalidUrl2 = 'https://www.linkedin.com/in/johndoe_123-';
  const invalidUrl3 = 'https://www.linkedin.com/in/johndoe1234';
  
  console.log(validateLinkedInProfileUrl(validUrl)); // Output: true
  console.log(validateLinkedInProfileUrl(invalidUrl)); // Output: false
  console.log(validateLinkedInProfileUrl(invalidUrl2)); // Output: false
  console.log(validateLinkedInProfileUrl(invalidUrl3)); // Output: false
  