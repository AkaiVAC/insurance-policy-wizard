<script setup lang="ts">
    import { lowerCaseLabelUtil } from '@/utils';
    withDefaults(
        defineProps<{
            label: string;
            type: 'text' | 'number' | 'select' | 'radio' | 'submit' | 'reset';
            required?: boolean;
        }>(),
        {
            label: 'Name',
            type: 'text',
            required: true,
        }
    );
</script>
<template>
    <div class="form-input">
        <label :for="lowerCaseLabelUtil(label)">{{ label }}</label>
        <input
            :type="type"
            :name="lowerCaseLabelUtil(label)"
            :id="lowerCaseLabelUtil(label)"
            v-bind="$attrs"
        />
    </div>
</template>
