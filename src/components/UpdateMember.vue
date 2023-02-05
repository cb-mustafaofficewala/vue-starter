<template>
    <div class="card">
        <div class="card-content">
            <div class="content" style="padding-right:5vw;">
                <div class="columns">
                    <div
                    class="column is-three-quarters"
                    style="padding-right:5vw;padding-left:2vw;">
                        <p class="title is-5">Change role for {{ member['email'] }}</p>
                        <section>
                            <RoleSelector :preselectedRoles="member.roles"></RoleSelector>
                        </section>
                    </div>
                    <div class="column">
                        <b-button
                        type="button is-primary"
                        @click="updateMember"
                        expanded>
                            Update
                        </b-button><p/>
                        <b-button
                        type="button is-ghost has-text-grey"
                        @click="$emit('updateClose')"
                        expanded>
                            Cancel
                        </b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import RoleSelector from './RoleSelector.vue';

@Component({
  components: {
    RoleSelector,
  },
  computed: {
    ...mapGetters(['getRoles']),
  },
  methods: {
    ...mapActions(['editMemberAction']),
  },
})
export default class UpdateMember extends Vue {
  @Prop() readonly member!: any;

  getRoles!: () => Array<string>;

  editMemberAction!: (member: any) => void;

  updateMember() {
    const roles = this.getRoles;
    const mem = { email: this.member.email, roles };
    this.editMemberAction(mem);
    this.$emit('updateClose');
  }
}
</script>
<style></style>
