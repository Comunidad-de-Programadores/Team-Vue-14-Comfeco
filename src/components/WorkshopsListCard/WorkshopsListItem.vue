<template>
  <div class="item py-2">
    <img
      v-if="status === 'pending'"
      src="@/assets/icons/ellipsis.png"
      :alt="img"
    />
    <img
      v-if="status === 'finished'"
      src="@/assets/icons/checkmark.png"
      :alt="img"
    />
    <div>
      <p class="item-title">{{ title }}</p>
      <p class="item-time" :datetime="time">{{ time }}</p>
      <p class="item-moderator">
        By <a :href="moderatorUrl">{{ moderator }}</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    time: {
      type: String,
      default: '',
    },
    moderator: {
      type: String,
      default: '',
    },
    moderatorUrl: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  border-bottom: 1px solid black;
  &:last-child {
    border-bottom: nones;
  }

  & img {
    width: 32px;
    height: 32px;
    margin-right: 0.8rem;
    border-radius: 16px;
    background-color: gray;
    padding: 0.2rem;
  }

  &-title {
    font-weight: 600;
  }
  &-time {
    margin-bottom: 0.4rem;
  }
}
</style>