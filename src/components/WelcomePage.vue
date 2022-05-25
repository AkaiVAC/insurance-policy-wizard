<script setup lang="ts">
    import { CG_Card, CG_Button } from '@/components/lib';
    import { usePageStore } from '@/stores/pageStore';
</script>

<template>
    <CG_Card>
        <template #card-heading> Hello There! </template>
        <template #card-msg>
            Let's buy some insurance. It is going to take only a few steps
        </template>
        <template #card-actions>
            <CG_Button
                type="button"
                :btn-type="'primary'"
                @click="usePageStore().NEXT_PAGE()"
            >
                Start
            </CG_Button>
        </template>
    </CG_Card>
</template>
