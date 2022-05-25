import { mount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';

import FormPage from '@/components/FormPage.vue';
import { usePageStore } from '@/stores/pageStore';
import { useFormStore } from '@/stores/formStore';

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CG_Input } from '../lib';

const wrapper = mount(FormPage, {
    global: {
        plugins: [createTestingPinia()],
    },
});

const pageStore = usePageStore();
const formStore = useFormStore();

window.alert = vi.fn();

describe('Form Page', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('loads with all expected form fields', () => {
        const inputFields = wrapper.findAll('input');
        const selectInputField = wrapper.findAll('select');
        expect(inputFields.length).toBe(5);
        expect(selectInputField.length).toBe(1);
    });

    it('goes to the previous page on clicking the Back button', async () => {
        wrapper.find('button[name="back"]').trigger('click');
        expect(pageStore.PREV_PAGE).toHaveBeenCalledOnce();
    });

    it('shows an alert when trying to submit form with invalid inputs', async () => {
        wrapper.find('#formPage').trigger('submit');
        expect(window.alert).toHaveBeenCalled();
    });

    it('goes to the next page on submit with valid input values', async () => {
        formStore.$patch({
            name: 'Arun',
            age: 10,
        });
        wrapper.find('#formPage').trigger('submit');
        expect(window.alert).not.toHaveBeenCalled();
        expect(pageStore.NEXT_PAGE).toHaveBeenCalled();
    });
});
