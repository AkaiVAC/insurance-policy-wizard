import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import SummaryPage from '@/components/SummaryPage.vue';
import { CG_Button } from '../lib';

import { usePageStore } from '@/stores/pageStore';

import { describe, expect, it } from 'vitest';

const wrapper = mount(SummaryPage, {
    global: {
        plugins: [createTestingPinia()],
    },
});

const pageStore = usePageStore();

describe('Summary Page', () => {
    it('goes to the previous page on clicking the Back button', () => {
        wrapper.find('button[name="back"]').trigger('click');
        expect(pageStore.PREV_PAGE).toHaveBeenCalledOnce();
    });
    it('goes to the first page on clicking the Buy button', () => {
        wrapper.find('button[name="buy"]').trigger('click');
        expect(pageStore.GO_TO_PAGE).toHaveBeenCalledOnce();
    });
});
