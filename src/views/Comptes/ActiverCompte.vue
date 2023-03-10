<template>
    <div class="activerCompte">
        <h2>
            <span class="material-symbols-outlined">chevron_left</span>
            <span>Ajouter les informations pour activer votre compte</span>
        </h2>
        <div class="activeContent">
            <div class="step-menu">
                <div class="step-menu-center">
                    <div class="step-item1 step-item">Informations personnelles</div>
                    <div class="step-item2 step-item" :class="[indicator >= 1 ? 'changeColor' : '']">Informations de l’entreprise</div>
                    <div class="step-item3 step-item"  :class="[indicator == 2 ? 'changeColor' : '']">Documents administratifs</div>
                </div>
            </div>
            <Step1Compte v-if="indicator == 0" @go_next="changeIndicator(1)"/>
            <Step2Compte v-if="indicator == 1" @go_next2="changeIndicator(2)" @go_back="changeIndicator(0)"/>
            <Step3Compte v-if="indicator == 2" @go_back="changeIndicator(1)" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Step1Compte from './Step1Compte.vue'
import Step2Compte from './Step2Compte.vue'
import Step3Compte from './Step3Compte.vue'
let indicator = ref(0)
const changeIndicator = (num) =>{
    indicator.value = num
}

</script>

<style scoped>
.activerCompte{
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
}
.activerCompte h2{
    display: flex;
    align-items: center;
    margin: 1.2rem;
}
h2 span{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: -0.02em;
    color: #000000;
    text-align: justify;
    margin: 0 .5rem;
}
.activeContent{
    position: relative;
    display: flex;
    margin: 0.5rem 2rem 0 2rem;
    height: 100%;
}
.activeContent .step-menu{
    position: relative;
    width: 40%;
    margin-right: 3%;
    background: #fff;
}
.step-menu-center{
    position: relative;
    padding: 15%;
}
.step-item{
    padding: 0 0 25% 2rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}
.step-item1{
    color: #0162BB;
}

.step-item1::before{
   content: "1";
   left: -5%;
   top: -5px;
   width: 32px;
   height: 32px;
   text-align: center;
   border-radius: 50%;
   position: absolute;
   display: block;
   color: #fff;
   background-color: #0162BB;
   white-space: pre;
   padding: 5px;
}
.step-item1::after{
    content: "";
    position: absolute;
    display: block;
    border-left: 1px dotted black;
    left: 0;
    top: 30%;
    width: 1px;
    height: 65%;
}
.step-item.changeColor::before{
   color: #fff!important;
   background-color: #0162BB!important;
   border: none!important;
   
}
.step-item.changeColor{
    color: #0162BB;
}
.step-item2::after{
    content: "";
    position: absolute;
    display: block;
    border-left: 1px dotted black;
    left: 0;
    top: 30%;
    width: 1px;
    height: 65%;
}

.step-item2::before{
   position: absolute;
   content: "2";
   display: block;
   left: -5%;
   top: -5px;
   width: 32px;
   height: 32px;
   border: 1px solid black;
   text-align: center;
   border-radius: 50%;
   padding: 5px;
}

.step-item3::before{
   content: "3";
   position: absolute;
   display: block;
   left: -5%;
   top: -6px;
   width: 32px;
   height: 32px;
   border: 1px solid black;
   text-align: center;
   border-radius: 50%;
   padding: 5px;
}



@media screen and (max-width: 992px) {
   .activeContent{
    flex-direction: column;
   }
   .activerCompte h2{
    margin: .7rem;
    }
    h2 span{
    font-weight: 600;
    font-size: 17px;
    }
    .activeContent{
        margin: 0.5rem .4rem 1rem .4rem ;
    }
    .activeContent .step-menu{
        width: 100%;
    }
    .step-item{
         padding: 0 0 20% 1.5rem;
        font-size: 14px;
    }
    .step-menu-center{
      position: relative;
       padding: 10% 10% 0 10%;
     }
     .step-item1::after,.step-item2::after{
       display: none;
    }
}

</style>