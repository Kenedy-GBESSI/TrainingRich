<template>
    <div :class="[isExpanded ? 'not-expanded': '']" class="sidebar">
        <div class="name-area">
            <div  class="name-img"></div>
            <p>
                <span>Gestical immobilier</span>
                <span>+229 34 21 32 40</span>
            </p>
        </div>
        <div class="confirmation">
            <span class="material-symbols-outlined">done</span>
            <span>Activer votre compte</span>
        </div>
        <ul class="wrapper-sidebar">
            <li class="sidebar-elt" :class="[selected == 1 ? 'active': '']" @click="changeSelected(1)">
                <router-link to="#">
                    <span class="material-symbols-outlined">pie_chart</span>  
                    <span >Tableau de bord</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 2 ? 'active': '']" @click="changeSelected(2)">
                <router-link to="#">
                    <span class="material-symbols-outlined">home</span>
                    <span>Maisons</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 3 ? 'active': '']" @click="changeSelected(3)">
                <router-link to="#">
                    <span class="material-symbols-outlined">group</span>
                    <span>Locataires</span> 
                </router-link>
            </li>
            <li class="sidebar-elt" :class="[selected == 4 ? 'active': '']" @click="changeSelected(4)">
                <router-link to="#">
                    <span class="material-symbols-outlined">group</span>
                    <span>Propriétaires</span> 
                </router-link>
            </li>
            <li class="sidebar-elt last-li" :class="[selected == 5 ? 'active': '']" @click="changeSelected(5)">
                <router-link to="#">
                    <span class="material-symbols-outlined">shopping_cart</span> 
                     <span>Comptabilités</span> 
                </router-link>
            </li>
            <li class="user-area-wrapper"> 
                <ul class="user-area">
             <li class="sidebar-elt-item" :class="[selected == 7 ? 'active': '']" @click="changeSelected(7)">
                <router-link to="#">
                    <span class="material-symbols-outlined">settings</span>
                    <span>Paramètres</span> 
                </router-link>
               </li>
               <li class="sidebar-elt-item" :class="[selected == 6 ? 'active': '']" @click="changeSelected(6)">
                <router-link to="/">
                    <span class="material-symbols-outlined will-rotate">login</span>
                    <span>Déconnexion</span> 
                </router-link>
              </li>

                </ul>
            </li>
           
        </ul>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
let isExpanded = ref(false);
let selected = ref(0);
const changeExpanded = () =>{
    isExpanded.value = !isExpanded.value;
}
const changeSelected = (i) =>{
     selected.value = i
}
</script>

<style scoped>
.sidebar{
    position: relative;
    width: 20%;
    color: #6D7580;
    display: flex;
    flex-direction: column;
    margin: 1px 0 0 0;
    height: 92.5vh;
    background: #FFFFFF;
}
.sidebar a{
    text-decoration: none;
}
.sidebar .wrapper-sidebar{
   list-style: none;
   display: flex;
   flex-direction: column;
   height:calc(95vh - 62px);
   width: 100%;
   align-items: flex-start;
   padding: 0 1rem 1rem 1rem;
}
.name-area{
    display: flex;
    align-items: center;
    padding: 10px 12px;
    background: rgba(250, 250, 250, 0.93);
    border: 1px solid rgba(164, 164, 164, 0.15);
    border-radius: 4px;
    margin: 1rem;
}
.confirmation{
    display: flex;
    align-items: center;
    padding: 16px 12px;
    border-radius: 4px;
    background: #FFF8EB;
    margin: .1rem 1rem;
}
.confirmation span:last-child{
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #FF7A00;
}
.will-rotate{
    display: inline-block;
    transform: rotate(180deg);
}
.confirmation span:first-child{
    color: #FF7A00;
}
.name-area .name-img{
    width: 50px;
    height: 50px;
    margin: 0 .5rem 0 0;
    border-radius: 50%;
    border: 1px solid #DCDCDC;
    background-image: url("../assets/images/g10.png");
    background-size: cover;
    background-position: center;
}
.name-area p{
    display: flex;
    flex-direction: column;
}
.name-area p span:first-child{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #555555;
}
.name-area p span:last-child{
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.01em;
    color: #6D7580;
}
.sidebar .wrapper-sidebar .user-area-wrapper ul{
    list-style: none;
    padding: 0;
}
.last-li{
    margin-bottom: 30%!important;
}
.user-area-wrapper{
    padding: 0!important;
}
.wrapper-sidebar .sidebar-elt,.wrapper-sidebar .user-area-wrapper{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding: 0.5rem 0;
    margin: 1.2rem 0;
}
.user-area{
    width: 100%;
    padding-top: 10%!important;
    border-top: 0.5px solid rgba(164, 164, 164, 0.3);
}
.user-area li{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem 0;
    width: 100%;
}
.sidebar ul li a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white-color);
}
.sidebar ul li a span{
    display: inline-block;
    margin: 0 0.3rem;
}
.not-expanded > ul li a span:last-child{
   display: none;
}
.not-expanded{
    width: auto!important;
}
li.active{
    border-left: 2px solid #F9C541;
}
li.active a{
    color: #F9C541!important;
}

@media screen and (max-width: 992px) {
    .sidebar > ul li a span:last-child{
       display: none;
    }
    .sidebar{
        width: auto!important;
    }
}
@media screen and (max-width: 1300px){
    /* .sidebar{
        width: 22%;
    } */
    .sidebar{
        width: auto!important;
    }
    .sidebar > ul li a span:last-child{
       display: none;
    }

    .name-area p{
        display: none;
    }
    .name-area{
        /* justify-content: ; */
        padding: 5px 0;
        margin: .5rem  1rem;
        background: none;
        border: none;
    }
    .name-area .name-img{
    width: 30px;
    height: 30px;
    border-radius:100px;
    background-image: url("../assets/images/g10.png");
    background-size: 100%;
    }
    .confirmation{
        display: none;
    }
    .sidebar{
        height: auto;
    }
}

</style>