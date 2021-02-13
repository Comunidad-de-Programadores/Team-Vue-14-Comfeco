<template>
    <div>
      <header>
        <top-bar />
      </header>
      <main>
          <slot></slot>
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
</template>
<script>
import TopBar from "/src/components/TopBar/TopBar.vue";
import Footer from "/src/components/Footer/Footer.vue";
export default {
  name: "Layout",
  components: {
    TopBar,
    Footer
  }
};
</script>
