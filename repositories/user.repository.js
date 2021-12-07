const saveData = data => {
  if (data) {
    console.log(`${data} is saved`);
    return true;
  } else {
    return false;
  }
}

module.exports = { saveData };