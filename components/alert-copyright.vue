<template>
  <div class="v-alert-copyright">
    <div class="container">
      <h3>- - - - - important - - - - -</h3>
      <p>I created this copy of Linkedin to <b>show my skills to IT recruiters</b>, if you need to watch the code of this page, let me know <b>¿Who are you?</b> and <b>¿Why you need the code?</b>.</p>
      <p>If you are not an IT recruiter leaves this page.</p>
      <div class="buttons">
        <v-button @click.native="store.alert_copyright_enabled = false">I'm IT Recruiter</v-button>
        <v-button @click.native="leave()">exit</v-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  methods: {
    leave() {
      window.open('about:blank', '_self')
    }
  }
})
</script>

<style lang="scss">
.v-alert-copyright {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.24);
  > .container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 24px;
    border-radius: 12px;
    width: 100%;
    max-width: calc(420px - 24px);
    text-align: center;
    display: grid;
    gap: 8px 0;
    h3 {
      text-transform: uppercase;
      color: red;
    }
    p {
      font-size: 14px;
      b {
        font-size: 14px;
      }
      &:last-of-type {
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 500;
        color: red;
      }
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: center;
      gap: 0 12px;
      margin-top: 12px;
      .v-button {
        font-size: 12px;
        color: white;
        border-radius: 12px;
        padding: 8px 18px;
        font-weight: 500;
        text-transform: uppercase;
        &:first-of-type {
          background-color: limegreen;
        }
        &:last-of-type {
          background-color: red;
        }
      }
    }
  }
}
</style>