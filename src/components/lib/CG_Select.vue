<script setup lang="ts">
    import { lowerCaseLabelUtil } from '@/utils';
    withDefaults(
        defineProps<{
            label: string;
        }>(),
        {
            label: 'Select',
        }
    );
</script>
<template>
    <div class="form-input">
        <label :for="lowerCaseLabelUtil(label)">{{ label }}</label>
        <select
            :name="lowerCaseLabelUtil(label)"
            :id="lowerCaseLabelUtil(label)"
            v-bind="$attrs"
        >
            <slot></slot>
        </select>
    </div>
</template>
