import {observable, action, computed} from 'mobx';

class Store {
  @observable title = 'this is archives';

  @action changeTodoTitle({index, done}) {
    this.todos[index].done = done
  }

  @computed get unfinishedTodos() {
    return this.todos.filter((todo) => todo.done)
  }

  @computed get total() {
    return this.todos.filter((todo) => todo.done).length
  }
}

export default new Store();