import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import WelcomePage from '@/components/WelcomePage.vue';
import { CG_Button } from '../lib';

import { usePageStore } from '@/stores/pageStore';

import { describe, expect, it } from 'vitest';

const wrapper = mount(WelcomePage, {
    global: {
        plugins: [createTestingPinia()],
    },
});

const pageStore = usePageStore();

describe('Welcome Page', () => {
    it('calls correct store method goes to the next page on clicking the Next button', () => {
        wrapper.findComponent(CG_Button).exists();
        wrapper.findComponent(CG_Button).trigger('click');
        expect(pageStore.NEXT_PAGE).toHaveBeenCalledTimes(1);
    });
});
