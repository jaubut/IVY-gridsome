<template>
    <div class="footer-padding">
        <div class="footer-ivy">
            <div class="infos-footer">
                <g-image src="~/assets/img/logo/logo-footer.svg" width="75"/>
            </div>
            <div class="infos-footer">
                <h3>Espace IVY <br/><a href="https://www.google.com/maps/place/Ivy+Space+Yoga+-+Arts+%26+Community/@45.396964,-72.7283581,18z/data=!4m19!1m13!4m12!1m4!2m2!1d-72.7268652!2d45.3966786!4e1!1m6!1m2!1s0x4cc9cf185dab8e83:0x9ea453ef9f37abd5!2sivy+yoga+granby!2m2!1d-72.7273537!2d45.3967828!3m4!1s0x4cc9cf185dab8e83:0x9ea453ef9f37abd5!8m2!3d45.3967828!4d-72.7273537" target="_blank">166 Rue Cowie #108, Granby, QC J2G 3V5</a></h3>
            </div>
        </div>
        <div class="infos-footer footer-icon">
            <a href="https://www.instagram.com/espaceivy/" target="_blank"><i class="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/espaceivy/" target="_blank"><i class="fab fa-facebook-square"></i></a> 
            <a title="450-775-8112" href="tel:4507758112" target="_blank"><i class="fas fa-phone-alt"></i></a> 
            <a title="jeremie.aubut@gmail.com" href="mailto:jeremie.aubut@gmail.com" target="_blank"><i class="far fa-envelope"></i></a> 
        
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer-ivy {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
}
.infos-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 1rem;
}   
.footer-padding {
    padding: 4rem;
}
.footer-icon {
    font-size: 3rem;
}
.fab, .fas, .far {
    padding: 10px;
}
</style>