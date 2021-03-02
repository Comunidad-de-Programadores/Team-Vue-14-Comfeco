<template>
<div class="container-small box">
<section class="container-edit-profile">
      <b-field group-multiline> 
        <b-field label="Nickname">
          <b-input value="--" maxlength="30"></b-input>
        </b-field>
         <b-field label="Correo">
             <b-input type="email"
                 value="john@"
                 maxlength="30">
             </b-input>
         </b-field>
      </b-field>
      <b-field group-multiline >
         <b-field label="Género">
          <b-input value="--" maxlength="30"></b-input>
         </b-field>  
         <b-field label="Fecha de nacimiento">
            <b-datepicker :focused-date="date"
                :first-day-of-week="1"
                placeholder="Click to select...">
                    <b-field>
                        <b-autocomplete
                            open-on-focus
                            readonly
                            v-model="month"
                            :data="months"
                            field="name"
                            @select="selectMonth">
                        </b-autocomplete>
                        <p class="control">
                            <span class="button is-static">{{ date.getFullYear() }}</span>
                        </p>
                    </b-field>
            </b-datepicker>
         </b-field>
         <b-field label="País">
          <b-input value="--" maxlength="20"></b-input>
         </b-field> 
       </b-field>
      <b-field group-multiline>
         <b-field label="Contraseña">
            <b-input value="" type="password" maxlength="30"></b-input>
        </b-field>
        <b-field label="Repetir contraseña">
            <b-input value="" type="password" maxlength="30"></b-input>
        </b-field>
      </b-field>
      <b-field label="Área de conocimiento">
          <b-select placeholder="Select a name">
              <option
                  v-for="(select,index) in inputSelect"
                  :value="select"
                  :key="index">
                  {{ select }}
              </option>
          </b-select>
      </b-field>
      <b-field group-multiline>
       </b-field>

       <b-field label="Biografía">
         <textarea class="textarea is-medium" name="" id=""  rows="5"></textarea>
        </b-field>
     

    </section>
</div>
    
</template>
<script>
export default {
  name: 'FormEditProfile',
  data() {
    return {
      date: new Date(),
      month: null,
      months: [
        { name: 'January', value: 0 },
        { name: 'February', value: 1 },
        { name: 'March', value: 2 },
        { name: 'April', value: 3 },
        { name: 'May', value: 4 },
        { name: 'June', value: 5 },
        { name: 'July', value: 6 },
        { name: 'August', value: 7 },
        { name: 'September', value: 8 },
        { name: 'October', value: 9 },
        { name: 'November', value: 10 },
        { name: 'December', value: 11 }
      ],
      inputSelect: [
        'Frontend',
        'Backend',
        'DevOps',
        'Video Game Developer',
        'UI/UX',
        'Database developer',
        'Cloud Computing'
      ]
    }
  },
  methods: {
    selectMonth(option) {
      if (option) {
        this.date = new Date(this.date)
        this.date.setMonth(option.value)
      }
    }
  },
  mounted() {
    this.month = this.months.filter(
      item => item.value == this.date.getMonth()
    )[0].name
  }
}
</script>
<style lang="scss" >

.container-edit-profile {
  width: 100%;
}
.container-small {
  max-width: 550px;
  margin: auto;
}
</style>
