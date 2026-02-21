<script setup lang="ts">
const appConfig = useAppConfig()
const endpoint = appConfig.formspree?.endpoint ?? 'https://formspree.io/f/XXXX'
</script>

<template>
  <form
    :action="endpoint"
    method="POST"
    class="contact-form"
  >
    <input type="hidden" name="_subject" value="Portfolio: new message">
    <label class="contact-form__label">
      Name
      <input type="text" name="name" required class="contact-form__input">
    </label>
    <label class="contact-form__label">
      Email
      <input type="email" name="email" required class="contact-form__input">
    </label>
    <label class="contact-form__label">
      Message
      <textarea name="message" required rows="4" class="contact-form__input contact-form__textarea" />
    </label>
    <button type="submit" class="contact-form__submit">
      Send
    </button>
  </form>
</template>
