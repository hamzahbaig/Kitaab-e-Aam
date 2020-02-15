export const createProject = project => {
  // returning a function which is halting a dispatch
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    const ref = firestore.collection('books').doc();
    ref
      .set({
        ...project,
        available: true,
        lentDuration: null,
        lentBy: null,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
        bookId: ref.id,
      })
      .then(() => {
        dispatch({type: 'CREATE_PROJECT', project});
      })
      .catch(err => {
        dispatch({type: 'CREATE_PROJECT_ERROR', err});
      });
  };
};

export const lendBook = bookUpdate => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    firestore
      .collection('books')
      .doc(bookUpdate.book.bookId)
      .update({
        available: false,
        lentBy: profile.firstName + ' ' + profile.lastName,
        lentDuration: Number(bookUpdate.lentDuration),
      })
      .then(() => {
        dispatch({type: 'BOOK_UPDATED', bookUpdate});
      })
      .catch(err => {
        dispatch({type: 'BOOK_UPDATE_FAILED', err});
      });
  };
};
