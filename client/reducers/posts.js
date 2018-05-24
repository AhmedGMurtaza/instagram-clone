// a reducer takes in two things:

// 1 - action (info about what happened)

// 2 - copy of current state

export default function posts(state = [], action) {
  console.log(state, action);
  return state;
}
