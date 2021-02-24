<template>
  <div style="padding: 0 24px 24px 24px">
    <div class="ex-2">A</div>
    <div class="ex-3" style="display: flex">
      <div v-for="ix in 10" :key="ix" class="ex-1">{{ix}}</div>
    </div>

    <div class="ex-2">B: A + больше элементов (20); элементы ужимаются</div>
    <div class="ex-3" style="display: flex">
      <div v-for="ix in 20" :key="ix" class="ex-1">{{ix}}</div>
    </div>

    <div class="ex-2">C: B + wrap; элементы не ужимаются - переносятся на новую строку</div>
    <div class="ex-3" style="display: flex; flex-wrap: wrap">
      <div v-for="ix in 20" :key="ix" class="ex-1">{{ix}}</div>
    </div>

    <div class="ex-2">D: C + justify-content:center</div>
    <div class="ex-3" style="display: flex; flex-wrap: wrap; justify-content: center">
      <div v-for="ix in 20" :key="ix" class="ex-1">{{ix}}</div>
    </div>

    <div class="ex-2">E: D + height:280px (больше суммы высот двух элементов)</div>
    <div class="ex-3" style="display: flex; flex-wrap: wrap; justify-content: center; height: 280px">
      <div v-for="ix in 20" :key="ix" class="ex-1">{{ix}}</div>
    </div>

    <div class="ex-2">F: E + align-content:space-between</div>
    <div
      class="ex-3"
      style="display: flex; flex-wrap: wrap; justify-content: center; height: 280px; align-content: space-between"
    >
      <div v-for="ix in 20" :key="ix" class="ex-1">{{ix}}</div>
    </div>

    <div class="ex-2">G: E + align-content:space-evenly</div>
    <div
      class="ex-3"
      style="display: flex; flex-wrap: wrap; justify-content: center; height: 280px; align-content: space-evenly"
    >
      <div v-for="ix in 20" :key="ix" class="ex-1">{{ix}}</div>
    </div>

    <div class="ex-2">H</div>
    <div
      class="ex-3"
      style="display: flex; flex-wrap: wrap; height: 280px; gap: 10px"
    >
      <div
        v-for="ix in 20"
        :key="ix"
        class="ex-1"
        :style="{height: ix === 2 ? '100px' : ix === 3 ? '150px' : 'auto'}"
      >{{ix}}</div>
    </div>

  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  .ex-1 {
    width: 100px;
    height: 100px;
    outline: 1px solid black;
    text-align: center;
  }

  .ex-2 {
    margin-top: 50px;
    font-size: 2em;
  }

  .ex-3 {
    background-color: rgba(251, 255, 0, 0.26);
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
</style>
