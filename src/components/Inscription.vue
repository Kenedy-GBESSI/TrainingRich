<!-- It's the layout of the inscription model -->
<template>
    <div id="inscription-layout">
       <div class="inscription-section">
           <div class="wrapper">
            <header>
                <div class="header">
                    <div class="logo">
                        <img src="../assets/images/frame.png" alt="logo">
                    </div>
                    <div class="row-indicator">
                         <div class="col-indicator activeStep" ref="firstStep"></div>
                         <div class="col-indicator" :class="[router.currentRoute.value.name == 'confirmation-code'? 'activeStep' : '']"></div>
                         <div class="col-indicator"></div>
                         <div class="col-indicator"></div>
                    </div>
                </div>
            </header>
            <section class="main">
                <router-view></router-view>
            </section>
           </div>
       </div>
       <div class="inscription-description">
          <div class="description-content">
             <img src="../assets/images/g10.png" alt="">
             <h3>Gérez facilement vos locations
               immobilières avec Imo</h3>
               <p>Les tâches de la gestion locative sont automatisées<br> 
               pour gagner du temps et gérer plus de mandats.</p>
          </div>
       </div>
    </div>
</template>

<script setup>
import router from '../router';
</script>

<style scoped>
#inscription-layout{
    position: relative;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
.inscription-section{
    flex: 1 1 0;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.wrapper{
    position: relative;
    width: 70%;
    height: auto;
    margin: 3rem 0 0 0;
}
header{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
header .header{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 0;
    width: 100%;
}
.header .logo{
   margin: 2.8rem 0 1.4rem 0;
}
.header .logo img{
    width: 90px;
    height: 44px;
}
.header .row-indicator{
    position: relative;
    display: flex;
}
.col-indicator{
    display: inline-block;
    margin:0 1rem 0 0;
    width: 24%;
    height: 5px;
    background-color: #EFEFEF;
}
.activeStep{
    background-color: #F59943!important;
}
.main{
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
}
.inscription-description{
    flex: 1 1 0;
    background-color: var(--primary);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
}
.description-content{
    width: 80%;
}
.description-content img{
    width: 100%;
    height: auto;
}
.description-content h3{
    font-weight: 600;
    font-size: 35px;
    font-style: normal;
    margin: 2.5rem 0 1.5rem 0;
}
.description-content p{
font-weight: 500;
font-size: 16px;
font-style: normal;
}
@media screen and (max-width: 576px) {
    .wrapper{
        width: 90%;
        margin: 0;
    }
    .header .logo{
        margin:1rem 0;
    }
    header .header{
        margin: 0 0 .5rem 0;
    }
    .inscription-description{
        background-color: inherit;
    }
    .description-content{
        width: 90%;
        color: var(--white);
        background-color: var(--primary);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .description-content h3{
        padding: 0 1rem;
        font-weight: 500;
        font-size: 30px;
        font-style: normal;
        margin: 1.5rem 0 .5rem 0;
    }
    .description-content p{
        padding: 0 1rem 1rem 1rem;
        font-weight: 400;
        font-size: 15px;

    }
}
@media screen and (max-width: 992px) {
    .wrapper{
        width: 90%;
        margin: 0; 
    }
    #inscription-layout{
        flex-wrap: nowrap;
        flex-direction: column;
    }
    .inscription-description{
        background-color: inherit;
    }
    .description-content{
        width: 90%;
        color: var(--white);
        background-color: var(--primary);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
    .description-content h3{
        padding: 0 1rem;
        font-weight: 500;
        font-size: 30px;
        font-style: normal;
        margin: 1.5rem 0 .5rem 0;
    }
    .description-content p{
        padding: 0 1rem 1rem 1rem;
        font-weight: 400;
        font-size: 15px;

    }
}



</style>