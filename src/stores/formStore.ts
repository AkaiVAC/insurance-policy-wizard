import { defineStore } from 'pinia';

export const useFormStore = defineStore({
    id: 'form',
    state: () => ({
        name: '',
        age: 0,
        countryList: [
            {
                name: 'Hong Kong',
                currency: 'HKD',
                rate: 1,
            },
            {
                name: 'USA',
                currency: 'USD',
                rate: 2,
            },
            {
                name: 'Australia',
                currency: 'AUD',
                rate: 3,
            },
        ] as Array<CountryType>,
        packageList: [
            {
                name: 'Standard',
                rate: 0,
            },
            {
                name: 'Safe',
                rate: 0.5,
            },
            {
                name: 'Super Safe',
                rate: 0.75,
            },
        ] as Array<PackageType>,
        selectedCountry: {
            name: 'Hong Kong',
            currency: 'HKD',
            rate: 1,
        } as CountryType,
        selectedPackage: { name: 'Standard', rate: 0 } as PackageType,
    }),
    getters: {
        getPremium: (state) => {
            const initialRate = 10 * state.age * state.selectedCountry.rate;
            const total =
                initialRate + initialRate * state.selectedPackage.rate;

            return total;
        },
        getPackageLabel: (state) => (pkg: PackageType) =>
            `${pkg.name} (+${10 * state.age * pkg.rate}${
                state.selectedCountry.currency
            } (${pkg.rate * 100}%) * ${
                state.selectedCountry.rate
            } (country rate))`,
    },
    actions: {
        SELECT_COUNTRY(selection: Country) {
            this.$state.selectedCountry = this.$state.selectedCountry =
                this.$state.countryList.find(
                    (country) => country.name === selection
                ) || this.$state.countryList[0];
        },
        SELECT_PACKAGE(selection: Package) {
            this.$state.selectedPackage =
                this.$state.packageList.find((pkg) => pkg.name === selection) ||
                this.$state.packageList[0];
        },
    },
});
