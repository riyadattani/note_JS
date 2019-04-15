(function(exports){

  function NoteController(notelist) {
    this.notes = notelist;
    this.notesView = new NoteListView (this.notes);
  };

  NoteController.prototype.insertNoteList = function () {
    var app = document.getElementById("app");
    app.innerHTML = this.notesView.output();
  }

  exports.NoteController = NoteController;

})(this);

var notelist = new NoteList ();
notelist.createNote("my note");
var noteController = new NoteController (notelist);
noteController.insertNoteList();
