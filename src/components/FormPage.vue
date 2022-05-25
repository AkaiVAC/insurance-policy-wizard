<script setup lang="ts">
    import { CG_Card, CG_Button, CG_Input, CG_Select } from '@/components/lib';
    import { usePageStore } from '@/stores/pageStore';
    import { useFormStore } from '@/stores/formStore';

    const formStore = useFormStore();
    const validate = (e: SubmitEvent) => {
        if (formStore.name === '' || formStore.age <= 0) {
            alert('Please fill all fields to continue');
        } else if (formStore.age >= 100) {
            usePageStore().GO_TO_PAGE(4);
        } else {
            usePageStore().NEXT_PAGE();
        }
    };
</script>

<template>
    <CG_Card>
        <template #card-heading> Tell us about yourself! </template>
        <template #card-content>
            <form
                id="formPage"
                @submit.prevent="(e) => validate(e as SubmitEvent)"
            >
                <CG_Input
                    label="Name"
                    name="name"
                    type="text"
                    pattern="([a-zA-Z ]{4,20})+"
                    placeholder="Add text"
                    title="Entered name must have 4 to 20 alphabetic characters"
                    :required="true"
                    :value="formStore.name"
                    v-model="formStore.name"
                    @keyup="(e) => (formStore.name = (e.target as HTMLInputElement).value || '')"
                />
                <CG_Input
                    label="Age"
                    name="age"
                    pattern="[1-9]"
                    min="0"
                    step="1"
                    type="number"
                    placeholder="Add age"
                    :required="true"
                    :value="formStore.age"
                    v-model="formStore.age"
                    @keyup="(e) => (formStore.age = Number((e.target as HTMLInputElement).value) || 0)"
                />
                <CG_Select
                    label="Where do you live"
                    name="country"
                    placeholder="Select country"
                    :required="true"
                    @change="(e) => (formStore.SELECT_COUNTRY((e.target as HTMLSelectElement).value as Country))"
                >
                    <option disabled>Select country</option>
                    <option
                        v-for="country of formStore.countryList"
                        :key="country.name"
                    >
                        {{ country.name }}
                    </option>
                </CG_Select>
                <CG_Input
                    v-for="pkg of formStore.packageList"
                    :key="pkg.name"
                    class="form-input-radio"
                    type="radio"
                    :checked="formStore.selectedPackage.name === pkg.name"
                    :label="formStore.getPackageLabel(pkg)"
                    :value="pkg.name"
                    name="package"
                    @click="formStore.SELECT_PACKAGE(pkg.name)"
                />
            </form>
        </template>
        <template #card-actions>
            <h3>
                Your premium is: {{ formStore.getPremium }}
                {{ formStore.selectedCountry.currency }}
            </h3>
            <div class="form-actions">
                <CG_Button
                    form="formPage"
                    name="back"
                    :btn-type="'secondary'"
                    :type="'button'"
                    @click="usePageStore().PREV_PAGE()"
                >
                    Back
                </CG_Button>
                <CG_Button
                    form="formPage"
                    name="submit"
                    :btn-type="'primary'"
                    :type="'submit'"
                >
                    Next
                </CG_Button>
            </div>
        </template>
    </CG_Card>
</template>
<style scoped>
    form {
        width: 80%;
        margin: auto;
        display: flex;
        flex-direction: column;
    }

    h3 {
        text-align: center;
    }
</style>
