function testNoteListCreatesNewNote() {
  var noteList = new NoteList();
  noteList.createNote('Fav drink: Tonic Water')
  var note1 = noteList.all()[0]
  assert.isTrue(note1.returnText() === 'Fav drink: Tonic Water');
};

testNoteListCreatesNewNote();

function testNoteListHas2Notes() {
  var noteList = new NoteList();
  noteList.createNote('Fav drink: Tonic Water')
  noteList.createNote('Fav drink: Beer!!!')
  var note2 = noteList.all()[1]
  assert.isTrue(note2.returnText() === 'Fav drink: Beer!!!');
};

testNoteListHas2Notes();
