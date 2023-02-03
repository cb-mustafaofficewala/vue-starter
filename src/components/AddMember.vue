<template>
    <div class="card">
        <div class="card-content">
            <div class="content" style="padding-right:5vw;">
                <div class="columns">
                    <div
                    class="column is-three-quarters"
                    style="padding-right:5vw;padding-left:2vw;">
                        <p class="title is-5">Invite a team member to use Chargebee</p>
                        You can either let your team members access everything on
                        this site or assign specific roles to them
                        <section>
                            <b-field label="Email" custom-class="has-text-grey">
                                <b-input
                                type="email"
                                placeholder="user@example.com"
                                v-model="email">
                            </b-input>
                            </b-field>
                            <RoleSelector></RoleSelector>
                        </section>
                    </div>
                    <div class="column">
                        <b-button
                        type="button is-primary"
                        @click="addMember"
                        expanded>
                            Invite
                        </b-button><p/>
                        <b-button
                        type="button is-ghost has-text-grey"
                        @click="$emit('addClose')"
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
import { Vue, Component } from 'vue-property-decorator';
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
    ...mapActions(['addMemberAction']),
  },
})
export default class AddMember extends Vue {
  email = '';

  getRoles!: () => Array<string>;

  addMemberAction!: (member: any) => void;

  addMember() {
    const roles = this.getRoles;
    const member = { email: this.email, roles };
    this.addMemberAction(member);
    this.$emit('addClose');
  }
}
</script>
<style></style>
