<template>
  <div>
    <h1>Invoices</h1>
  </div>
</template>

<script>
import {onBeforeRouteLeave} from 'vue-router'
export default {
  setup() {
    onBeforeRouteLeave((to, from) => {
      const answer = window.confirm("are you sure????")
      if (!answer) return false;
    })
  }
}
</script>
