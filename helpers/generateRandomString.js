const generateRandomString = () => {
  const possibleCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_";
  let randomString = "";
  for (let i = 0; i < 6; i++) {
    randomString += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }
  return randomString;
};

module.exports = generateRandomString;
