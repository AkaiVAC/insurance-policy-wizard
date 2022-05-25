import { setActivePinia, createPinia } from 'pinia';
import { usePageStore } from '../pageStore';
import { describe, beforeEach, it, expect } from 'vitest';

describe('Page Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Initializes the page store with the expected values', () => {
        const pageStore = usePageStore();

        expect(pageStore.currentPage).toBe(1);
        expect(pageStore.pageCount).toBe(4);
        expect(pageStore.currentTransition).toBe('next');
    });

    describe('Actions', () => {
        it('updates current page state when GO_TO_PAGE is called', () => {
            const pageStore = usePageStore();

            expect(pageStore.currentPage).toBe(1);
            pageStore.GO_TO_PAGE(4);
            expect(pageStore.currentPage).toBe(4);
            pageStore.GO_TO_PAGE(2);
            expect(pageStore.currentPage).toBe(2);
        });

        it('increments current page state by one when NEXT_PAGE is called', () => {
            const pageStore = usePageStore();

            expect(pageStore.currentPage).toBe(1);
            pageStore.NEXT_PAGE();
            expect(pageStore.currentPage).toBe(2);
        });

        it('does not increment current page state when NEXT_PAGE is called in the last page', () => {
            const pageStore = usePageStore();

            pageStore.GO_TO_PAGE(pageStore.pageCount);
            pageStore.NEXT_PAGE();
            expect(pageStore.currentPage).toBe(pageStore.pageCount);
        });

        it('decrements current page state by one when PREV_PAGE is called', () => {
            const pageStore = usePageStore();

            pageStore.GO_TO_PAGE(pageStore.pageCount);
            pageStore.PREV_PAGE();
            expect(pageStore.currentPage).toBe(pageStore.pageCount - 1);
        });

        it('does not decrement current page state when PREV_PAGE is called in the first page', () => {
            const pageStore = usePageStore();

            expect(pageStore.currentPage).toBe(1);
            pageStore.PREV_PAGE();
            expect(pageStore.currentPage).toBe(1);
        });
    });
});
