//a way to add extra functionality
//logs everytime the action changes
export const logger = store => next => action => {
  console.log('INCOMING ACTION', action);

  const prevState = store.getState();
  next(action);
  const nextState = store.getState();

  if(prevState !== nextState) {
    console.log('STATE UPDATED', nextState);
  }

};



