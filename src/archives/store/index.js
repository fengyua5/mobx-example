import {observable, action, computed, runInAction, flow} from 'mobx';
import axios from 'axios';

class Store {
  @observable title = 'this is archives';
  @observable todos = [];

  @observable type = 1;


  @action changeTodoTitle({index, done}) {
    this.todos[index].done = done
  }

  @computed get unfinishedTodos() {
    return this.todos.filter((todo) => todo.done)
  }

  @computed get total() {
    return this.todos.filter((todo) => todo.done).length
  }

  @action
  getFolderListAsync = async () => {
    const response = await axios.get('/api/archives.json');
    runInAction("getFolderList", () => {
      this.todos = response.data.results;
      console.log('-------', this.todos)
    })
  };

  getFolderListAsync1 = flow(function* () {
    const response = yield axios.get('/api/archives.json');
    this.todos = response.data.results;
  })

  @action changeType(type) {
    this.type = type;
  }
}

export default new Store();