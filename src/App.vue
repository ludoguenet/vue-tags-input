<template>
  <div class="flex items-center rounded border-2 border-gray-50 p-1">
    <div
      v-for="tag in tags"
    >
      <div class="bg-orange-100 inline-flex items-center text-sm rounded mr-1 overflow-hidden">
        <span class="ml-2 mr-1 leading-relaxed truncate max-w-xs px-1">
          {{ tag }}
        </span>
        <button class="w-6 h-8 inline-block align-middle text-gray-500 bg-orange-200 focus:outline-none">
          <svg class="w-3 h-3 text-orange-500 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>

        </button>
      </div>
    </div>

    <input
        class="h-8 focus:outline-none"
        type="text"
        v-on:keyup.enter.,="addTag"
        v-on:keydown.delete="removeTag"
    >
  </div>
</template>

<script setup lang="ts">
import inputTags from "@/composables/inputTags";

const {
  tags,
  addTag,
  removeTag,
} = inputTags();

</script>