import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import ErrorPage from '@/components/ErrorPage.vue';
import { CG_Button } from '../lib';

import { usePageStore } from '@/stores/pageStore';

import { describe, expect, it } from 'vitest';

const wrapper = mount(ErrorPage, {
    global: {
        plugins: [createTestingPinia()],
    },
});

const pageStore = usePageStore();

describe('Welcome Page', () => {
    it('goes back to the first page on clicking the Ok button', () => {
        wrapper.findComponent(CG_Button).exists();
        wrapper.findComponent(CG_Button).trigger('click');
        expect(pageStore.GO_TO_PAGE).toHaveBeenCalledTimes(1);
    });
});
