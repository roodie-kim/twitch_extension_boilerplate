<template>
    <div>
        <h1>Hello this is a panel</h1>
    </div>
</template>

<script>
const twitch = window.Twitch.ext
export default {
    name: 'Panel',
    data () {
        return {
            token: null,
            tuid: null,
        }
    },
    async mounted () {
        twitch.onAuthorized(auth => {
            this.token = auth.token
            this.tuid = auth.userId
        })
    },
}
</script>

<style scoped>

</style>
