<template>
    <section>
        <strong class="has-text-grey">Select user acess level</strong>
        <br/><br/>
        <div class="block">
            <b-checkbox name="Role" v-model="role"
                native-value="Admin">
                <span>Admin</span>
            </b-checkbox>
            <p class="has-text-grey">
                Access everything in Chargebee
            </p>
            <b-checkbox v-model="role" name="Role"
                native-value="Tech Support">
                Tech Support
            </b-checkbox>
            <p class="has-text-grey">
                User can view "Subscriptions"
                and "Product Catalog" tabs.
                Can also view, add comments to, send,
                download individual Invoices/Credit Notes.
            </p>
            <b-checkbox v-model="role" name="Role"
                native-value="Analyst">
                Analyst
            </b-checkbox>
            <p class="has-text-grey">
                In addition to Tech Support level access,
                user will have access to the SaaS metrics report.
            </p>
        </div>
    </section>
</template>
<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions(['setRoleAction']),
  },
})
export default class RoleSelector extends Vue {
    role = Array<string>();

    setRoleAction!: (role: Array<string>) => void;

    @Watch('role')
    roleChanged(value: Array<string>, oldValue: Array<string>) {
      this.setRoleAction(value);
    }
}
</script>
<style></style>
