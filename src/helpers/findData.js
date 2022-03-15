const findData = (array, value) => {
  for (let i = 0; i < array.length; i += 1) {
    const entries = Object.entries(array[i]);
    for (let j = 0; j < entries.length; j += 1) {
      if (entries[j][1].toLowerCase() === value.toLowerCase()) {
        return true;
      }
    }
  }

  return false;
};

export default findData;
