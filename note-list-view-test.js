function testViewNotesList() {
  var notes = new NoteList();
  notes.createNote("Hello");
  notes.createNote("WAZZZAP");

  var viewNotes = new NoteListView(notes);
  var outputString = '<ul><li><div>Hello</div></li><li><div>WAZZZAP</div></li></ul>';
  assert.isTrue(viewNotes.output() === outputString);
}

testViewNotesList();

function testViewNotesList2() {
  var notes = new NoteList();
  notes.createNote("Hello");
  notes.createNote("WAZZZAP");
  notes.createNote("yo");

  var viewNotes = new NoteListView(notes);
  var outputString = '<ul><li><div>Hello</div></li><li><div>WAZZZAP</div></li><li><div>yo</div></li></ul>';
  assert.isTrue(viewNotes.output() === outputString);
}

testViewNotesList2();

function testViewNotesList2() {
  var notes = new NoteList();
  var viewNotes = new NoteListView(notes);
  assert.isTrue(viewNotes.output() === '');
}

testViewNotesList2();
