const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function printCookies() {
  // Progression 2: using setTimeout() - use 1000 units for time parameter
  setTimeout(() => {
    let result = '';
    cookies.forEach((cookie) => {
      result += `<li>${cookie.name}</li>`;
    });
    document.body.innerHTML = result;
  }, 1000);
}

//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookies(newCookie) {
  return new Promise((resolve, reject) => {
    // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
    setTimeout(() => {
      // Progression 5: handling errors and adding new cookie to the list
      cookies.push(newCookie);
      const error = false;
      if (error) {
        reject('No cookies.');
      } else {
        resolve('Cookie');
      }
    }, 2000);
  });
}
// Progression 6: call function using `.then`
createCookies(newCookie).then(printCookies);
