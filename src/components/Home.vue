<template>
  <b-container>
    <b-row>
      <b-col class="text-center">
        <h1>Trade or View your porfolio!</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="text-center">
          You may
          <b>Save</b> or
          <b>Load</b> your data
        </h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <h4 class="text-center">
          Click on "End Day" to begin a new day!
        </h4>
      </b-col>
    </b-row>
    <hr />
    <b-row>
      <h2>Available Funds: ${{ funds }}</h2>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      funds: "getFunds"
    })
  }
};
</script>

<style></style>
