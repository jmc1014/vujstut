<template>
  <div class="row">
    <div class="col-12">
      <h4>Quote Added</h4>
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" :style="{width: (quoteCount / maxQuotes) * 100 +  '%'}">
          {{ quoteCount }} / {{ maxQuotes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ['quoteCount', 'maxQuotes']
}

</script>
