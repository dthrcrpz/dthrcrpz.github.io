<template>
    <div>
        <navbar/>
        <router-view/>
        <foot/>
        <transition name="fade"><modal-background v-if="$store.state.showModal"/></transition>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import Foot from './components/Foot'
    import ModalBackground from './components/ModalBackground'

    export default {
        components: {
            Navbar, ModalBackground, Foot
        }
    }
</script>