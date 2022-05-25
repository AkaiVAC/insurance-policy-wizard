import { defineStore } from 'pinia';

export const usePageStore = defineStore({
    id: 'page',
    state: () => ({
        pageCount: 4,
        currentPage: 1,
        currentTransition: 'next' as 'prev' | 'next',
    }),
    actions: {
        GO_TO_PAGE(pageNumber: number) {
            this.$state.currentPage = pageNumber;
        },
        NEXT_PAGE() {
            if (this.$state.currentPage >= this.$state.pageCount) {
                return;
            }
            this.$state.currentTransition = 'next';
            this.$state.currentPage = this.$state.currentPage + 1;
        },
        PREV_PAGE() {
            if (this.$state.currentPage <= 1) return;
            this.$state.currentTransition = 'prev';
            this.$state.currentPage = this.$state.currentPage - 1;
        },
    },
});
