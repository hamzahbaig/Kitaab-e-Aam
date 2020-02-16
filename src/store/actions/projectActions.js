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
        lentTo: null,
        lentToId: null,
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
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection('notifications')
      .doc(bookUpdate.book.authorId)
      .set({
        bookName: bookUpdate.book.bookName,
        from:
          bookUpdate.book.authorFirstName +
          ' ' +
          bookUpdate.book.authorLastName,
        toId: bookUpdate.book.authorId,
        bookId: bookUpdate.book.bookId,
        fromId: authorId,
        result: null,
        lentDuration: Number(bookUpdate.lentDuration),
        lentTo: profile.firstName + ' ' + profile.lastName,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({type: 'BOOK_UPDATED', bookUpdate});
      })
      .catch(err => {
        dispatch({type: 'BOOK_UPDATE_FAILED', err});
      });
  };
};

export const updateLend = result => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    console.log(result.item.bookId)
    firestore
      .collection('books')
      .doc(result.item.bookId)
      .update({
        available: result.result,
        lentTo: result.item.lentTo,
        lentToId: result.item.fromId,
        lentDuration: Number(result.item.lentDuration),
      })
      .then(() => {
        dispatch({type: 'LEND_DONE', result});
      })
      .catch(err => {
        console.log(err)
        dispatch({type: 'LEND_REJECTED', err});
      });
  };
};
