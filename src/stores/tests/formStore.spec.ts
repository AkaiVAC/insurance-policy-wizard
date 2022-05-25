import { setActivePinia, createPinia } from 'pinia';
import { useFormStore } from '../formStore';
import { describe, beforeEach, it, expect } from 'vitest';

describe('Form Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('Initializes the form store with the expected values', () => {
        const formStore = useFormStore();

        expect(formStore.name).toBe('');
        expect(formStore.age).toBe(0);
        expect(formStore.selectedCountry).to.deep.equal(
            formStore.countryList[0]
        );
        expect(formStore.selectedPackage).to.deep.equal(
            formStore.packageList[0]
        );
    });

    describe('Getters', () => {
        it('gets the correct premium amount when getPremium is called', () => {
            const formStore = useFormStore();

            expect(formStore.getPremium).toBe(0);
            formStore.age = 10;
            expect(formStore.getPremium).toBe(100);
        });

        it('gets the correct package label when getPackageLabel is called', () => {
            const formStore = useFormStore();

            const samplePackage = formStore.packageList[0];
            expect(formStore.getPackageLabel(samplePackage)).toBe(
                'Standard (+0HKD (0%) * 1 (country rate))'
            );
        });
    });

    describe('Actions', () => {
        it('selects the correct country when SELECT_COUNTRY is called', () => {
            const formStore = useFormStore();

            formStore.SELECT_COUNTRY('Australia');
            expect(formStore.selectedCountry).toBe(formStore.countryList[2]);
        });

        it('select the correct package when SELECT_PACKAGE is called', () => {
            const formStore = useFormStore();

            formStore.SELECT_PACKAGE('Super Safe');
            expect(formStore.selectedPackage).toBe(formStore.packageList[2]);
        });
    });
});
