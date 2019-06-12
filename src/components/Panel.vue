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

        }
    },
    methods: {
        setBaseTwitchInfo (auth) {
            this.$store.commit('setBaseTwitchInfo', auth)
        },
    },
    async mounted () {
        await twitch.onAuthorized(async auth => {
            this.setBaseTwitchInfo(auth)

            const userResponse = await this.$store.dispatch('fetchUser')
            console.log(userResponse)
        })
    },
}
</script>

<style scoped>

</style>
