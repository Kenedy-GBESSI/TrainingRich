<template>
    <div class="SignUp">
        <h2>Bienvenue</h2>
        <p>Créez votre compte dès maintenant pour une gestion  simplifiée de vos maisons</p>
        <form>
         <div class="first-form">
          <p>Je crée mon compte à partir de :</p>
           <div class="first-form-content">
              <p>
                <input type="radio" name="choose" id="mon_telephone" v-model="radioChoose" value="telephone">
                <label for="mon_telephone">Mon numéro de téléphone</label>
              </p>
              <p>
                <input type="radio" name="choose" id="mon_email" value="email" v-model="radioChoose">
                <label for="mon_email">Mon E-mail</label>
              </p>
           </div>
         </div>
         <div class="email-form control" v-if="radioChoose == 'email'">
              <label for="email">Entrez votre adresse e-mail</label>
              <span class="material-symbols-outlined">mail</span>
              <input type="email" name="email" id="email" placeholder="gbessikenedy@gmail.com">
              <!-- <span>Error</span> -->
         </div>
         <div class="telephone-form control" v-if="radioChoose == 'telephone'">
              <label for="telephone">Entrez votre adresse e-mail</label>
              <span class="material-symbols-outlined">call</span>
              <input type="tel" name="telephone" id="telephone" placeholder="+229 644 696 61">
              <!-- <span>Error</span> -->
         </div>
         <div class="statut-form control">
              <label for="statut">Choisissez votre statut</label>
              <span class="material-symbols-outlined">arrow_drop_down</span>
              <select name="statu" id="statut">
                <option value="agent immobilier">Agence immobilière</option>
                <option value="agent commerçant">Propriétaire</option>
              </select>
              <!-- <span>Error</span> -->
         </div>
         <input type="button" value="Valider" @click.prevent="validateFirstStep()">
        </form>
    </div>
</template>

<script setup>
 import { ref } from 'vue';
 import router from '../router'
 var radioChoose = ref('telephone');
 const validateFirstStep = ()=>{
    router.push({name: 'confirmation-code'})
}
</script>

<style scoped>
.SignUp > h2{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    margin: .5rem 0;
    color: var(--primary);
} 
.SignUp > p{
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 35px;
    letter-spacing: -0.8px;
    color: #555555;
}
form{
    margin: 7% 0 0 0;
}
.first-form >p{
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    margin: 0 0 0 .1%;
    color: #555555;
}
.first-form-content{
    display: flex;
    padding: .9rem 1rem;
    margin: 2.5% 0;
    justify-content: space-between;
    background: #F5F5F5;
    border-radius: 4px;
}
.first-form-content label{
    margin-left: .5rem;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    color: #555555;
}
.first-form-content input{
    border: 1px solid #672CEE;
}
.control{
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 3% 0;
}
.statut-form > span{
    position: absolute;
    font-size: 35px;
    font-weight: 600;
    top: 32%;
    left: 97%;
    transform: translate(-97%,32%);
    z-index: 100;
    cursor: pointer;
}
.email-form > span{
    position: absolute;
    top: 38.5%;
    left: 2.5%;
    transform: translate(2.5%,38%);
    opacity: .5;
    z-index: 100;
    cursor: pointer;
}
.telephone-form > span{
    position: absolute;
    top: 38.5%;
    left: 2.5%;
    transform: translate(2.5%,38%);
    opacity: .5;
    z-index: 100;
    cursor: pointer;
}
.email-form input,.telephone-form input{
    padding: .9rem 2.7rem!important;
}

.control input,.control select{
    padding: .9rem 1rem;
    margin: 2.2% 0;
    background: #FFFFFF;
    border: 1px solid #555555;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    color: rgba(85, 85, 85,.5);
    align-items: center;
}
.control select{
    -moz-appearance:none;
    -webkit-appearance:none; 
    appearance: none;
}
.control label{
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    margin: 0 0 0 .1%;
    color: #555555;
}
form > input{
    padding: .9rem 1rem;
    margin: 2% 0;
    width: 100%;
    background: #0162BB;
    border: none;
    border-radius: 8px;
    color: var(--white);
    outline: none;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    cursor: pointer;
}
@media screen and (max-width: 576px) {
    .SignUp > h2{
        font-weight: 600;
        font-size: 30px;
        margin: 0;
    }
    .SignUp >p{
        font-size: 14.8px;
        line-height: 160%;
        margin:0;
    }
    form{
        margin: 7% 0 0 0;
    }
    .first-form-content{
        padding: .5rem 1rem;
        margin: 2.5% 0;
     }
     .first-form-content label{
       margin-left: .2rem;
       font-weight: 400;
       font-size: 13px;
    } 
}

</style>