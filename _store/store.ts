import Vue from "vue"

class Store {
  public modal:       any      = null
  public modal_local: any      = null
  public loader:      any      = null
  public posts = []
  
  constructor() {

  }
}

const store = Vue.observable(new Store())

export default store