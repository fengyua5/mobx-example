import {observable, action, computed} from 'mobx';

class Store {
  shared = 0;
  @observable title = 'this is ats';

  @action changeTodoTitle({index, done}) {
    this.todos[index].done = done
  }

  @computed get unfinishedTodos() {
    return this.todos.filter((todo) => todo.done)
  }

  @computed get total() {
    return this.todos.filter((todo) => todo.done).length
  }

  @action.bound
  changeAtsTitle(title) {
    this.title = title;
  }
}

export default new Store();