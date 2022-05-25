<script setup lang="ts">
    import { CG_Card, CG_Button } from '@/components/lib';
    import { usePageStore } from '@/stores/pageStore';
</script>

<template>
    <CG_Card>
        <template #card-heading> Ooops! </template>
        <template #card-msg>
            <div style="text-align: center">
                Your age is over our accepted limit. <br />
                We are sorry, but we cannot insure you now
            </div>
        </template>
        <template #card-actions>
            <CG_Button
                type="button"
                :btn-type="'primary'"
                @click="usePageStore().GO_TO_PAGE(1)"
            >
                OK :(
            </CG_Button>
        </template>
    </CG_Card>
</template>
