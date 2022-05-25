<script setup lang="ts">
    withDefaults(
        defineProps<{
            btnType: 'primary' | 'secondary';
            type: 'button' | 'submit' | 'reset';
        }>(),
        {
            btnType: 'primary',
            type: 'button',
        }
    );
</script>

<template>
    <button :class="btnType" :type="type" class="cg-btn">
        <i class="icon icon-before">
            <slot name="icon-before"></slot>
        </i>
        <h3 class="text">
            <slot>Button Text</slot>
        </h3>
        <i class="icon icon-after">
            <slot name="icon-after"></slot>
        </i>
    </button>
</template>
<style scoped>
    @import '@/assets/base.css';

    .cg-btn {
        padding: 0.9em 5em;
        border-radius: 0.25em;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: min-content;
        transition: background-color 0.1s;
        cursor: pointer;
    }

    .cg-btn.primary {
        border: none;
        color: white;
        background-color: var(--color-primary);
    }

    .cg-btn.secondary {
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        background-color: transparent;
    }

    .cg-btn:hover {
        filter: contrast(0.8);
    }

    .cg-btn:active {
        filter: contrast(0.5);
    }

    .cg-btn:focus {
        outline: 2px dashed var(--color-primary);
    }

    .cg-btn .text {
        margin: 0;
        font-size: 1rem;
        font-weight: normal;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
