import Vue from "vue"
import users from "~/assets/ts/users"

class Store {
  public modal:       any      = null
  public modal_local: any      = null
  public loader:      any      = null
  public posts = []
  public alert_copyright_enabled = true

  public users: interface_user[] = users

  public profile = {
    enabled: false
  }
  
  constructor() {

  }
}

const store = Vue.observable(new Store())

export default store