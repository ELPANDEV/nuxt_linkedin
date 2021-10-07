import Vue from 'vue'
import UUID, { uuid } from 'vue-uuid'
import ClickOutside from 'vue-click-outside'
import mixin_uuid from '@/mixins/mixin_uuid';
import store from '../_store/store'
import methods from '~/methods/methods';

//#region plugins

Vue.use(UUID as any)
Vue.directive('click-outside', ClickOutside)
Vue.mixin(mixin_uuid)

//#endregion
//#region methods

const modal             = (key: null|string)          => store.modal       =  key
const modal_local       = (key: null|string)          => store.modal_local =  key
const check_modal       = (key: null|string): boolean => store.modal       == key
const check_modal_local = (key: null|string): boolean => store.modal_local == key

//#endregion
//#region proptotypes

Vue.prototype.store              = store
Vue.prototype.x                  = methods
Vue.prototype.$modal             = modal
Vue.prototype.$modal_local       = modal_local
Vue.prototype.$check_modal       = check_modal
Vue.prototype.$check_modal_local = check_modal_local

//#endregion
//#region types

declare module 'vue/types/vue' {
  interface Vue {
    uuid:               string
    store:              typeof store
    x:                  typeof methods
    $uuid:              typeof uuid
    $modal:             typeof modal
    $check_modal:       typeof modal_local
    $modal_local:       typeof check_modal
    $check_modal_local: typeof check_modal_local
  }
}

//#endregion