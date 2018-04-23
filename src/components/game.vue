<template>
    <div class="game-wrap">
        <pk-user :position="{left: 10, top: 50}"></pk-user>
        <pk-user :position="{left: 10, top: 150}"></pk-user>
        <pk-user :position="{left: 10, top: 250}"></pk-user>
        <pk-user :position="{left: 10, top: 350}"></pk-user>

        <pk-user :position="{right: 10, top: 50}"></pk-user>
        <pk-user :position="{right: 10, top: 150}"></pk-user>
        <pk-user :position="{right: 10, top: 250}"></pk-user>
        <pk-user :position="{right: 10, top: 350}"></pk-user>

        <pk-user :position="{left: 10, bottom: 60}"></pk-user>

        <pk-poke :position="{left: 200, top: 300}"></pk-poke>
    </div>
</template>

<script>
    import user from '../shared/user';
    import poke from'../shared/poke';

    export default {
        name: "game",
        components: {
            'pk-user': user,
            'pk-poke': poke
        }
    }
</script>

<style scoped>

</style>
