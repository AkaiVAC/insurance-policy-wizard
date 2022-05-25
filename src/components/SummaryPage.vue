<script setup lang="ts">
    import { CG_Card, CG_Button, CG_Input } from '@/components/lib';
    import { usePageStore } from '@/stores/pageStore';
    import { useFormStore } from '@/stores/formStore';

    const formStore = useFormStore();
</script>

<template>
    <CG_Card>
        <template #card-heading> Summary </template>
        <template #card-content>
            <div id="summary">
                <h2>{{ formStore.name }}</h2>
                <label>Name: </label>
                <p>{{ formStore.name }}</p>
                <label>Age: </label>
                <p>{{ formStore.age }}</p>
                <label>Where you live: </label>
                <p>{{ formStore.selectedCountry.name }}</p>
                <label>Package: </label>
                <p>{{ formStore.selectedPackage.name }}</p>
                <label>Premium: </label>
                <p>
                    {{ formStore.getPremium }}
                    {{ formStore.selectedCountry.currency }}
                </p>
            </div>
        </template>
        <template #card-actions>
            <div class="form-actions">
                <CG_Button
                    name="back"
                    :btn-type="'secondary'"
                    :type="'button'"
                    @click="usePageStore().PREV_PAGE()"
                >
                    Back
                </CG_Button>
                <CG_Button
                    name="buy"
                    :btn-type="'primary'"
                    :type="'button'"
                    @click="usePageStore().GO_TO_PAGE(1)"
                >
                    Buy
                </CG_Button>
            </div>
        </template>
    </CG_Card>
</template>
<style>
    @import '@/assets/base.css';
    #summary {
        width: 80%;
        display: grid;
        grid-template: auto / repeat(2, 1fr);
        background-color: #eee;
        padding: 1em;
        border-radius: 5px;
    }

    #summary h2 {
        text-align: center;
        grid-column: 1 / 3;
        font-size: 1.5rem;
        margin-bottom: 1em;
    }

    #summary label {
        font-weight: bold;
        margin-bottom: 1em;
    }

    #summary p {
        text-align: right;
        font-size: 1rem;
        margin-bottom: 1em;
    }
</style>
