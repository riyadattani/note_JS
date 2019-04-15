(function(exports) {

  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.createNote = function (text) {
    var note1 = new Note(text);
    this.notes.push(note1);
  }

  NoteList.prototype.all = function () {
    return this.notes;
  }

  exports.NoteList = NoteList;

})(this)
