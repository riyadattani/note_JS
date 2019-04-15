function testNoteReturnsInstantiationText() {
  var note = new Note('My fav language is JS');
  assert.isTrue(note.returnText() === 'My fav language is JS');
};

testNoteReturnsInstantiationText();

function testNoteReturnsInstantiationText2() {
  var note = new Note('My fav language is not JS');
  assert.isTrue(note.returnText() === 'My fav language is not JS');
};

testNoteReturnsInstantiationText2();
