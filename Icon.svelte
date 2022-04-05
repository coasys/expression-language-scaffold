<svelte:options tag={null}/>

<script lang="ts">
    import type { Expression } from "@perspect3vism/ad4m";
    //Expression data that gets injected into web component
    export let expression: Expression;
</script>

<div class="container">
    {#if expression}
        <h1>Data</h1>
        <p>expression.data</p>
        <br>
        <h2>Author</h2>
        <p>expression.author</p>
        <br>
        <h2>Timestamp</h2>
        <p>expression.timestamp</p>
    {/if}
</div>


<style>
</style>