<template>
  <article class="card mt-5">
    <div class="card-content">
      <div class="header">
        <a href="#">Editar perfil</a>
      </div>
      <div class="image">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
          alt=""
        />
      </div>
      <div class="body">
        <div>
          <h6 class="is-size-6 is-bold has-text-weight-bold">
            {{ profile.username }}
          </h6>
          <p class="is-size-7 has-text-grey">Frontend Developer / UX UI</p>
        </div>
        <p class="">{{ profile.biography }}</p>
      </div>
    </div>
    <div class="card-footer">
      <gb-social-button
        network="facebook"
        rounded
        :disabled="profile.facebook === ''"
        @click="clickSocial(profile.facebook)"
      ></gb-social-button>
      <gb-social-button
        network="twitter"
        rounded
        :disabled="profile.twitter === ''"
        @click="clickSocial(profile.twitter)"
      ></gb-social-button>
      <gb-social-button
        network="linkedin"
        rounded
        :disabled="profile.linkedin === ''"
        @click="clickSocial(profile.linkedin)"
      ></gb-social-button>
      <gb-social-button
        network="github"
        rounded
        :disabled="profile.github === ''"
        @click="clickSocial(profile.github)"
      ></gb-social-button>
    </div>
  </article>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      profile: {
        username: 'Nombre del usuario',
        biography:
          'En una sección del perfil debe haber un botón (Editar perfil), al darle click a este botón debe de redirigir a la pantalla de edición de datos personales. En esta sección también debe mostrarse la foto de usuario con su respectivo nick, especialidad y una corta descripción, también deben aparecer algunas redes sociales del usuario.',
        facebook: '',
        github: '',
        twitter: 'https://www.twitter.com',
        linkedin: '',
      },
    }
  },
  methods: {
    clickSocial(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: $purple-light-2;
  font-size: 0.8rem;
  @media screen and (max-width: 768px) {
    margin-top: 0;
  }
}
.header {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  span {
    color: white;
  }
}
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: -1rem;
    width: 10rem;
  }
}
.body {
  text-align: center;
  line-height: 1.3rem;

  & div {
    margin: 0.5rem auto;
  }
}
.card-footer {
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  a {
    border-radius: 1.25rem;
    img {
      border-radius: 1.25rem;

      width: 2.5rem;
    }
  }
}
</style>