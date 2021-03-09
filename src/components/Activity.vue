<template>
  <section>
    <li class="title is-6">Actividad reciente</li>
    <b-notification
      class="activity"
      aria-close-label="Close notification"
      :closable="false"
    >
      <div class="columns is-vcentered">
        <div class="column is-11">
          <span class="has-text-light subtitle is-6">
            Te has unido al evento community fest and code
          </span>
        </div>
        <div class="column">
          <b-icon
            icon="calendar-multiple-check"
            size="is-large"
            type="is-light"
          ></b-icon>
        </div>
      </div>
    </b-notification>
  </section>
</template>

<style lang="scss" scoped>
.activity {
  background: $purple-hard;
  box-shadow: 3px 3px 3px rgb(71, 71, 71);
}
</style>
