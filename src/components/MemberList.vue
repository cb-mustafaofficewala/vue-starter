<template>
    <div class="container">
        <div class="section" style="padding-top:5vh;">
            <div class="is-pulled-left">
                <div class="title is-4 is-inline">Team Members&nbsp;</div>
                <p class="title is-4 has-text-grey is-inline"> ({{ numberOfMembers }})</p>
            </div>
            <div class="is-pulled-right">
                <button
                class="button is-primary"
                @click="isAddMemberModalActive = true">
                    + Invite Members
                </button>
            </div>
        </div>
        <b-modal
            v-model="isAddMemberModalActive"
            has-modal-card
            trap-focus
            aria-modal>
            <AddMember @addClose="isAddMemberModalActive = false"></AddMember>
        </b-modal>
        <div class="section">
            <MemberItem
            v-for="member in allMembers"
            :key="member.email"
            :member="member">

            </MemberItem>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import MemberItem from './MemberItem.vue';
import AddMember from './AddMember.vue';

@Component({
  computed: {
    ...mapGetters(['numberOfMembers', 'allMembers']),
  },
  components: {
    MemberItem,
    AddMember,
  },
})
export default class MemberList extends Vue {
    isAddMemberModalActive = false;
}

</script>
<style>
</style>
