<script setup lang="ts">
const appConfig = useAppConfig()
const endpoint = computed(() => appConfig.formspree?.endpoint ?? 'https://formspree.io/f/XXXX')
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

<style scoped>
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-form__label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.9rem;
  font-weight: 500;
}

.contact-form__input {
  padding: 0.5rem 0.75rem;
  font: inherit;
  font-size: 16px;
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius);
  background: var(--color-bg);
  color: var(--color-text);
}

.contact-form__textarea {
  resize: vertical;
  min-height: 5rem;
}

.contact-form__submit {
  min-height: 44px;
  padding: 0.6rem 1.2rem;
  font: inherit;
  font-size: 16px;
  font-weight: 500;
  color: #18181b;
  background: var(--color-accent);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  align-self: flex-start;
  box-sizing: border-box;
  transition: background var(--duration-fast) var(--ease-out-snappy), transform var(--duration-normal) var(--ease-bounce);
}

.contact-form__submit:hover {
  background: var(--color-accent-hover);
  color: #18181b;
}

.contact-form__submit:active {
  transform: scale(0.94);
}
</style>
