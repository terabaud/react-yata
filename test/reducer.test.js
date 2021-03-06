import rootReducer from '../src/redux/reducers';
import initialState from '../src/redux/initial-state';
import {
  addTodo,
  deleteTodo,
  toggleTodo,
  changeInput,
  clearInput,
  setFilter
} from '../src/redux/actions';

describe('reducer tests', () => {
  test('Undefined action does no changes to the state', () => {
    const state = { ...initialState };
    const result = rootReducer(state);
    expect(result).toEqual(state);
  });

  test('ADD_TODO adds a todo element and resets the input field', () => {
    let input = 'foo bar';
    const state = {
      todos: []
    };
    const result = rootReducer(state, addTodo(input));
    expect(result.todos.length).toBe(1);
    expect(result.todos[0].task).toBe(input);
  });

  test('DELETE_TODO deletes a todo element.', () => {
    const state = {
      todos: [{ task: 'test todo', id: 1, done: false }]
    };
    const id = state.todos[0].id;
    const result = rootReducer(state, deleteTodo(id));
    expect(result.todos.length).toBe(0);
  });

  test('TOGGLE_TODO toggles a todo element.', () => {
    const state = {
      ...initialState,
      todos: [
        { task: 'foo todo', id: 1, done: false },
        { task: 'bar todo', id: 2, done: false }
      ]
    };
    const id = state.todos[0].id;
    const result = rootReducer(state, toggleTodo(id));
    expect(result.todos[0].done).toBe(true);
    expect(result.todos[1].done).toBe(false);
  });
});
