<template>
    <div>
        <navbar/>
        <router-view/>
        <transition name="fade"><modal-background v-if="$store.state.showModal"/></transition>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'
    import ModalBackground from './components/ModalBackground'

    export default {
        components: {
            Navbar, ModalBackground
        }
    }
</script>