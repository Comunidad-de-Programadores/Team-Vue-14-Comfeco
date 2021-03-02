<template>
    <div>
        <layout>
            <form-edit-profile />
        </layout>
      
    </div>
</template>
<script>
import Layout from '@/components/layouts/LayoutForm.vue'
import FormEditProfile from './EditProfile.vue'

export default {
  name: 'EditProfile',
  components: {
    FormEditProfile,
    Layout
  }
}
</script>
