import Vue from 'vue'
import Vuex, {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
} from 'vuex'
import { State, state } from './state'
import { Actions, actions } from './actions'
import { Getters, getters } from './getters'
import { Mutations, mutations } from './mutations'

Vue.use(Vuex)

export const store = new VuexStore({
  state,
  actions,
  getters,
  mutations
})

type AppState     = State
type AppMutations = Mutations

export type Store = Omit<
  VuexStore<AppState>,
  'commit'|'getters'|'dispatch'
> &
{
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>
} & {
  commit<K extends keyof AppMutations, P extends Parameters<AppMutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<AppMutations[K]>
} &
{
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>
  }
}

export const strict = false