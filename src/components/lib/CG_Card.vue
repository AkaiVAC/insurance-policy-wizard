<template>
    <div class="card">
        <h1 class="card-heading">
            <slot name="card-heading"></slot>
        </h1>
        <p class="card-msg">
            <slot name="card-msg"></slot>
        </p>
        <div class="card-content">
            <slot name="card-content"></slot>
        </div>
        <div class="card-actions">
            <slot name="card-actions"></slot>
        </div>
    </div>
</template>

<style>
    @import '@/assets/base.css';

    [class='card-*'] {
        margin-bottom: 1em;
    }

    .card {
        height: max-content;
        padding: 1em 3em;
        background-color: white;
        border-radius: 0.5em;
        box-shadow: 0 2px 5px rgb(0 0 0 / 15%);
        transition: all 0.5s;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .card-heading {
        text-align: center;
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 1.5em;
    }

    .card-content {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .card-actions {
        margin-top: 2em;
    }
</style>
