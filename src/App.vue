<template>
    <div>
        <navbar/>
        <router-view/>
        <foot/>
        <transition name="fade"><modal-background v-if="$store.state.showModal"/></transition>
        <transition name="fade"><loading v-if="$store.state.isLoading"/></transition>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Foot from './components/Foot'
    import ModalBackground from './components/ModalBackground'
    import Loading from './components/Loading'

    export default {
        components: {
            Navbar, ModalBackground, Foot, Loading
        },
    }
</script>