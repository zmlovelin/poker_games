<template>
    <div class="pg-home">
        <button @click="handleClick">game</button>
    </div>
</template>
    <div>
        this is home
    </div>
<script>
    export default {
        name: "home",
        methods: {
            handleClick() {
                this.$router.push('/game')
            }
        }
    }
</script>

<style scoped>

</style>
