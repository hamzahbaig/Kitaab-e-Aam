const initState = {
  projects: [
    {id: '1', title: 'Help me find Peach', content: 'blah blah blah'},
    {id: '2', title: 'Help me find Mango', content: 'blah blah blah'},
    {id: '3', title: 'Help me find Orange', content: 'blah blah blah'},
  ],
};

// reducer passed into store which manipulates the state
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    case 'BOOK_UPDATED':
      console.log('Book Updated');
      return state;
    case 'BOOK_UPDATE_FAILED':
      console.log('Book Update Fail');
      return state;
    default:
      return state;
  }
};

export default projectReducer;
