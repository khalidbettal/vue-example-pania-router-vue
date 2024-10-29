<template>
  <div class="bg-white shadow sm:rounded-lg">
    <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            class="h-16 w-16 rounded-full border border-gray-300"
            :src="user.photoUrl || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'"
            alt="User profile picture"
          />
          <div class="ml-4">
            <h3 class="text-xl font-bold text-gray-900">{{ user.firstname }} {{ user.lastname }}</h3>
            <p class="text-sm text-gray-500">@{{ user.username }}</p>
          </div>
        </div>
        <div class="flex-shrink-0">
          <button
            type="button"
            class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            <PhoneIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            <span>{{ user.phone }}</span>
          </button>
          <button
            type="button"
            class="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            <EnvelopeIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            <span>{{ user.email }}</span>
          </button>
        </div>
      </div>
    </div>

    <div class="px-4 py-5 sm:px-6">
      <h4 class="text-lg font-semibold text-gray-700">Address</h4>
      <p class="text-gray-600">{{ user.address }}</p>
      <p class="text-gray-600">{{ user.city }}, {{ user.state }} {{ user.zipcode }}, {{ user.country }}</p>
    </div>

    <div class="border-t border-gray-200">
      <div class="px-4 py-5 sm:px-6">
        <h4 class="text-lg font-semibold text-gray-700">Contact Information</h4>
        <p class="text-gray-600">Phone: {{ user.phone }}</p>
        <p class="text-gray-600">Email: <a class="text-indigo-600" :href="'mailto:' + user.email">{{ user.email }}</a></p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/20/solid';
import { defineProps, ref, onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const props = defineProps(['id']);
const userStore = useUserStore();
const user = ref({});

// Load user details based on ID
const loadUserDetails = async () => {
  const foundUser = userStore.users.find((u) => u.id === props.id);
  if (foundUser) {
    user.value = foundUser;
  }
};

onMounted(loadUserDetails);
</script>
