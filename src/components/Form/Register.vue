<template>
  <div
    class="container my-4 is-family-sans-serif"
    style="width: 90%; max-width: 500px"
  >
    <form class="box">
      <div class="pb-5 pt-4 has-text-centered">
        <a class="is-size-6 px-5" style="border-right: 1px solid;" href="#">
          Iniciar sesión
        </a>
        <a class="is-size-6 px-5" href="#">Registrate</a>
      </div>

      <b-field>
        <b-input placeholder="Nombre de usuario"></b-input>
      </b-field>
      <b-field>
        <b-input placeholder="Correo" type="email"></b-input>
      </b-field>
      <b-field>
        <b-input placeholder="Contraseña" type="password"></b-input>
      </b-field>
      <b-field>
        <b-input placeholder="Confirmar contraseña" type="password"></b-input>
      </b-field>

      <div class="buttons">
        <b-button type="is-primary" expanded>Confirmar</b-button>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </p>
    </form>
  </div>
</template>
