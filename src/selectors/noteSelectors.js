export const getAllNotes = state => state.noteReducer.allIds.map(id => state.noteReducer.byId[id]);

export const getAllTags = (state) => {
  const allTheNotes = getAllNotes(state);
  const tagsArr = allTheNotes.map(note => note.tags);
  const newArr = [].concat(...tagsArr);
  const uniq = a => [...new Set(a)];

  return uniq(newArr);
};

export const getTagsSuggestions = (state, ownTags = '') => {
  const allTags = getAllTags(state);
  return allTags.filter(tag => !ownTags.includes(tag));
};

export const getAllImages = (state) => {
  const allTheNotes = getAllNotes(state);
  const tagsArr = allTheNotes.map(note => note.images);
  const newArr = [].concat(...tagsArr);

  return newArr;
};

export const getQuery = state => state.noteReducer.query;
const getLoadedNote = state => state.noteReducer.note;
export const getNote = (state, noteId) => {
  if (state.noteReducer.byId[noteId]) {
    return state.noteReducer.byId[noteId];
  }
  return getLoadedNote(state);
};


export const getIsFetching = state => state.noteReducer.isFetching;
export const getErrorMessage = state => state.noteReducer.errorMessage;
export const getVisibleNotes = (state, tagText, color, images, query) => {
  const allTheNotes = getAllNotes(state).reverse();

  if (tagText) { return allTheNotes.filter(note => note.tags.includes(tagText)); }

  if (color) { return allTheNotes.filter(note => note.color === color); }

  if (images) { return allTheNotes.filter(note => note.images.length > 0); }

  if (query) {
    function checkTags(note, query) {
      for (let i = 0; i < note.tags.length; i++) {
        if (note.tags[i].toLowerCase().includes(query)) {
          return true;
        }
      }
      return false;
    }
    const queryTL = query.toLowerCase();
    const result = allTheNotes.filter(note =>
      note.body.toLowerCase().includes(queryTL) || note.title.toLowerCase().includes(queryTL) || checkTags(note, queryTL));
    return result;
  }

  return allTheNotes;
};
