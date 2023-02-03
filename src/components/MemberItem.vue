<template>
    <div>
    <div class="card">
        <div class="card-content columns is-vcentered">
            <div class="is-pulled-left">
                <svg viewBox="0 0 24 24" style="height: 2.5rem; width: 2.5rem;">
                    <path
                    fill="currentColor"
                    d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18
                    ,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3
                    ,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10
                    ,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z">
                    </path>
                </svg>
            </div>
            <div class="column">
                <strong>{{ member['email'] }}</strong>
                ({{ member['roles'][0]?member['roles'][0]:'Tech Support' }})
                <br/>
                {{ member['email'] }}
            </div>
            <b-dropdown aria-role="list" class="is-pulled-right" position="is-bottom-left"
            style="padding-right: 1vw;">
                <template #trigger>
                    <svg
                    width="16" height="16" fill="currentColor"
                    viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0
                         1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z">
                        </path>
                    </svg>
                </template>
                <b-dropdown-item aria-role="listitem"
                @click="isUpdateMemberModalActive = true">Edit Role</b-dropdown-item>
                <b-dropdown-item aria-role="listitem"
                @click="isRemoveMemberModalActive = true">Remove</b-dropdown-item>
            </b-dropdown>
        </div>
    </div>
    <b-modal
        v-model="isUpdateMemberModalActive"
        has-modal-card
        trap-focus
        aria-modal>
        <UpdateMember :member="member" @updateClose="isUpdateMemberModalActive = false">
        </UpdateMember>
    </b-modal>
    <b-modal
        v-model="isRemoveMemberModalActive"
        has-modal-card
        trap-focus
        aria-modal>
        <RemoveMember :member="member" @removeClose="isRemoveMemberModalActive = false">
        </RemoveMember>
    </b-modal>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import UpdateMember from './UpdateMember.vue';
import RemoveMember from './RemoveMember.vue';

@Component({
  components: {
    UpdateMember,
    RemoveMember,
  },
})
export default class MemberItem extends Vue {
  @Prop() readonly member!: any

  isUpdateMemberModalActive = false;

  isRemoveMemberModalActive = false;
}
</script>
<style></style>
