<template>
    <div>
        <h1>Hello this is a panel</h1>
    </div>
</template>

<script>
export default {
    name: 'Panel',
    mounted () {
        console.log(this.$store.getters['baseUrl'])
    },
}
</script>

<style scoped>

</style>
