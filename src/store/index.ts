import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexPersist = new VuexPersist({
  key: 'workshop',
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: {},
    role: Array<string>(),
  },
  mutations: {
    addMember: (state: {members: any, role: Array<string>}, member: any) => {
      Vue.set(state.members, member.email, member);
    },
    updateMember: (
      state: {members: any, role: Array<string>},
      member: any,
    ) => {
      Vue.set(state.members, member.email, member);
    },
    removeMember: (state: {members: any, role: Array<string>}, member: any) => {
      Vue.delete(state.members, member.email);
    },
    setRole: (state: {members: any, role: Array<string>}, role: Array<string>) => {
      state.role = role;
    },
  },
  getters: {
    allMembers: (state: {members: any, role: Array<string>}) => state.members,
    numberOfMembers: (
      state: {members: any, role: Array<string>},
    ) => Object.keys(state.members).length,
    getRoles: (state: {members: any, role: Array<string>}) => state.role,
  },
  actions: {
    addMemberAction: ({ commit }, member: any) => commit('addMember', member),
    editMemberAction: ({ commit }, member: any) => commit('updateMember', member),
    removeMemberAction: ({ commit }, member) => commit('removeMember', member),
    setRoleAction: ({ commit }, role: Array<string>) => commit('setRole', role),
  },
  modules: {},
  plugins: [vuexPersist.plugin],
});
