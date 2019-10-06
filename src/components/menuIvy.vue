<template>
    <div class="menu-ivy">
        <div class="logo-ivy">
            <g-link to="/"><g-image src="~/assets/img/logo/logo-menu.svg" width="120"/></g-link>
        </div>
        <div v-if="window.width > 600" class="container-row">
            <div class="button-ivy">
                <g-link to="/location/"><p>Loue l'espace</p></g-link>
            </div>
            <div class="button-ivy">
                <g-link to="/yoga/"><p>Yoga avec Dan</p></g-link>  
            </div>
            <div class="button-ivy">
                <g-link to="/evenements/"><p>Événements</p></g-link>
            </div>
        </div>
        <div class="social-menu">
            <a href="https://www.instagram.com/espaceivy/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a v-if="window.width < 600" href="fb://Jeremie.aubut/406845083057296" target="_blank"><i class="fab fa-facebook-square"></i></a> 
            <a v-if="window.width > 600" href="https://www.facebook.com/espaceivy/" target="_blank"><i class="fab fa-facebook-square"></i></a> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'menu',    
    data() {
        return {
           window: {
                width: 0,
                height: 0 
            }
        }
    },
    created() {
        if (process.isClient) {
            window.addEventListener('resize', this.handleResize)
                this.handleResize();
        }
    },
    destroyed() {
        if (process.isClient) {
            window.removeEventListener('resize', this.handleResize)
        }
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    }
}
</script>

<style scoped>
.menu-ivy {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 5px 2rem 5px 2rem;
}
.button-ivy {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    color: #FCDA1E;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
}
.button-ivy p {
    font-size: 1rem;
}
@media screen and (max-width: 600px) {
    .button-ivy p {
        visibility: hidden;
    }
    .menu-ivy {
        justify-content: center;
        flex-flow: column wrap;
        padding: 15px;
    }
    .fab {
        padding: 10px;
        font-size: 2rem;
    }
}
</style>