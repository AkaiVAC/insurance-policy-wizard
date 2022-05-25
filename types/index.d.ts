declare global {
    type Country = 'Hong Kong' | 'USA' | 'Australia';

    type Package = 'Standard' | 'Safe' | 'Super Safe';

    type Currency = 'HKD' | 'USD' | 'AUD';

    type CountryType = {
        name: Country;
        currency: Currency;
        rate: number;
    };

    type PackageType = {
        name: Package;
        rate: number;
    };

    declare module '*.vue' {
        import type { DefineComponent } from 'vue';
        const component: DefineComponent<
            Record<string, unknown>,
            Record<string, unknown>,
            unknown
        >;
        export default component;
    }
}

export {};
