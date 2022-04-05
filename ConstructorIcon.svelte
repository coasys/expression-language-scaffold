<svelte:options tag={null}/>

<script lang="ts">
    //Function injected by ad4m-executor that can be called to publish expression data
    export let commitExpression;

    let expData = {
        name: ""
    };
</script>

<div>
    <p>Create an expression</p>
    <textarea bind:value={expData.name} />
    <button on:click={()=>commitExpression(JSON.stringify(expData))}>Commit</button>
</div>


<style>
</style>