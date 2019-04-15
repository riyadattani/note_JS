(function(exports) {

  function NoteListView(notes) {
    this.notes = notes;
  }

  NoteListView.prototype.output = function () {
    var notes = this.notes.all();
    var output;

    if (notes.length === 0) {
      return '';
    }

    output = '<ul>';
      notes.forEach(function(note){
        output += '<li><div>';
        output += note.returnText();
        output += '</div></li>'
      })
    output += '</ul>';

    return output;
  }

  exports.NoteListView = NoteListView;

})(this);
