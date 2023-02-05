<template>
    <div class="card">
        <div class="card-content">
            <div class="content" style="padding-right:5vw;">
                <div class="columns">
                    <svg fill="#fc6100" width="1.5rem" height="1.5rem" viewBox="0 0 416.979 416.979"
                    style="margin-top: 2vh;margin-left: 2vw;">
                        <g>
                            <path
                            d="M356.004,61.156c-81.37-81.47-213.377-81.551-294.848-0.182c-81.47,
                            81.371-81.552,213.379-0.181,294.85   c81.369,
                            81.47,213.378,81.551,294.849,0.181C437.293,274.636,437.375,
                            142.626,356.004,61.156z M237.6,340.786   c0,3.217-2.607,5.822-5.822,
                            5.822h-46.576c-3.215,0-5.822-2.605-5.822-5.822V167.885c0-3.217,
                            2.607-5.822,5.822-5.822h46.576   c3.215,0,5.822,2.604,5.822,
                            5.822V340.786z M208.49,137.901c-18.618,
                            0-33.766-15.146-33.766-33.765   c0-18.617,
                            15.147-33.766,33.766-33.766c18.619,0,33.766,
                            15.148,33.766,33.766C242.256,122.755,
                            227.107,137.901,208.49,137.901z"/>
                        </g>
                    </svg>
                    <div class="column">
                    <div
                    style="padding-right:1vw;padding-left:2vw;padding-bottom: 3vh;">
                        <p class="title is-5">
                            {{ member['email'] }} will not be able to<br/>access this site
                        </p>
                    </div>
                    <div class="is-pulled-right">
                        <b-button
                        type="button is-ghost has-text-grey"
                        @click="$emit('removeClose')">
                            Cancel
                        </b-button>
                        <b-button
                        type="button is-warning"
                        style="background-color:#fc6100"
                        @click="removeMember">
                            Remove Member
                        </b-button>
                    </div></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions(['removeMemberAction']),
  },
})
export default class RemoveMember extends Vue {
  @Prop() readonly member!: any;

  removeMemberAction!: (member: any) => void;

  removeMember() {
    this.removeMemberAction(this.member);
    this.$emit('removeClose');
  }
}
</script>
<style></style>
