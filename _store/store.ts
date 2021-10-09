import Vue from "vue"

class Store {
  public modal:       any      = null
  public modal_local: any      = null
  public loader:      any      = null
  public posts = []
  public alert_copyright_enabled = true
  public profile = {
    enabled: false
  }
  
  constructor() {

  }
}

const store = Vue.observable(new Store())

export default store