var assert = {
  isTrue: function(assertionToCheck) {
    if (assertionToCheck) {
      console.log('test passed w00t');
    } else {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }
};
