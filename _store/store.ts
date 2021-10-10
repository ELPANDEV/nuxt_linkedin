import Vue from "vue"
import posts from "~/assets/ts/posts"
import users from "~/assets/ts/users"

class Store {
  public modal:                   any     = null
  public modal_local:             any     = null
  public loader:                  any     = null
  public alert_copyright_enabled: boolean = true
  
  public posts: interface_post[] = posts
  public users: interface_user[] = users

  public profile = {
    enabled: false
  }
  
  constructor() {

  }
}

const store = Vue.observable(new Store())

export default store