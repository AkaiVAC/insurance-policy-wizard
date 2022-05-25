<script setup lang="ts">
    import WelcomePage from '@/components/WelcomePage.vue';
    import FormPage from '@/components/FormPage.vue';
    import SummaryPage from '@/components/SummaryPage.vue';
    import ErrorPage from '@/components/ErrorPage.vue';
    import { usePageStore } from '@/stores/pageStore';

    const pageStore = usePageStore();
    const transitionIn = (
        currentPage: number,
        currentTransition: 'next' | 'prev'
    ) => {
        if (
            (currentPage === 1 && currentTransition === 'next') ||
            (currentPage === 2 && currentTransition === 'prev')
        ) {
            return 'slideInLeft';
        } else if (
            (currentPage === 1 && currentTransition === 'prev') ||
            (currentPage === 2 && currentTransition === 'next')
        ) {
            return 'slideInRight';
        }

        return 'slideInRight';
    };

    const transitionOut = (
        currentPage: number,
        currentTransition: 'next' | 'prev'
    ) => {
        if (
            (currentPage === 3 && currentTransition === 'next') ||
            (currentPage === 2 && currentTransition === 'prev')
        ) {
            return 'slideOutLeft';
        } else {
            return 'slideOutRight';
        }
    };
</script>

<template>
    <Transition
        enter-active-class="slideInLeft"
        leave-active-class="slideOutLeft"
    >
        <WelcomePage class="display-card" v-if="pageStore.currentPage === 1" />
    </Transition>
    <Transition
        :enter-active-class="
            transitionIn(pageStore.currentPage, pageStore.currentTransition)
        "
        :leave-active-class="
            transitionOut(pageStore.currentPage, pageStore.currentTransition)
        "
    >
        <FormPage class="display-card" v-if="pageStore.currentPage === 2" />
    </Transition>
    <Transition
        enter-active-class="slideInRight"
        leave-active-class="slideOutRight"
    >
        <SummaryPage class="display-card" v-if="pageStore.currentPage === 3" />
    </Transition>
    <Transition
        enter-active-class="slideInRight"
        leave-active-class="slideOutRight"
    >
        <ErrorPage class="display-card" v-if="pageStore.currentPage === 4" />
    </Transition>
</template>

<style scoped>
    .display-card {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
    }
</style>
