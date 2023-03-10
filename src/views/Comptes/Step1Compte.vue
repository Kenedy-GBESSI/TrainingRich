<template>
    <div class="Step1Compte">
        <form>
            <div class="control">
                <div class="control-item">
                    <label for="name">Nom<span>*</span></label>
                    <input type="text" placeholder="Cliquer ici pour ajouter" name="name">
                </div>
                <div class="control-item">
                    <label for="prenom">Prénom<span>*</span></label>
                    <input type="text" placeholder="Cliquer ici pour ajouter" name="prenom">
                </div>
            </div>
            <div class="control">
                <div class="control-item">
                    <label for="phone">Téléphone<span>*</span></label>
                    <input type="tel"  placeholder="Cliquer ici pour ajouter" name="phone">
                </div>
                <div class="control-item">
                    <label for="prenom">Rôle au sein de Gestica Immobilier<span>*</span></label>
                    <input type="text" placeholder="Cliquer ici pour ajouter" name="prenom">
                </div>
            </div>
            <div class="first-form">
          <p>Choisissez le document à soumettre pour vérifier votre identité</p>
           <div class="first-form-content">
              <p>
                <input type="radio" name="choose" id="mon_telephone" v-model="radioChoose" value="telephone">
                <label for="mon_telephone">Mon numéro de téléphone</label>
              </p>
              <p>
                <input type="radio" name="choose" id="passport" v-model="radioChoose">
                <label for="mon_email">Passport</label>
              </p>
              <p>
                <input type="radio" name="choose" id="mon_email" value="email" v-model="radioChoose">
                <label for="mon_email">Mon E-mail</label>
              </p>
           </div>
         </div>
         <div class="control">
                <div class="control-item">
                    <label for="pnum">Numéro de la pièce<span>*</span></label>
                    <input type="tel"  placeholder="Cliquer ici pour ajouter" name="pnum">
                </div>
                <div class="control-item">
                    <label for="piece">Pièce d'identité<span>*</span></label>
                    <input type="text" placeholder="Cliquer ici pour ajouter" name="piece">
                </div>
            </div>
            <div class="control buttons">
                <div class="control-item">
                    <input type="button"  value="Annuler">
                </div>
                <div class="control-item">
                    <input type="button"  value="Valider" @click.prevent="$emit('go_next')" >
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
defineEmits(["go_next"])
</script>

<style scoped>
.Step1Compte{
    width: 100%;
    background: #fff;
}

form{
    position: relative;
    margin: 3% 5% 0 5%;
}
form .control{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.control .control-item{
    display: flex;
    margin: 2.5% 2.5% 2.5% 0;
    width: 100%;
    flex-direction: column;
}
.control-item input{
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #555555;
    border-radius: 8px;
    outline: none;
    padding: 0 16px;
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    color: #555555;
    opacity: 0.7;
}
.control-item label{
    font-weight: 600;
    font-size: 14px;
    line-height: 140%;
    display: flex;
    align-items: center;
    color: #555555;
    opacity: 0.8;
}
label span{
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    margin: 2px;
    line-height: 20px;
    color: #DA1414;
    opacity: 0.8;
}
.first-form{
    margin: 1.5% 0;
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
    margin: 1% 2.5% 1.5% 0;
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

.buttons input{
    background: rgba(255, 255, 255, 0.01);
    border: 2px solid #0162BB;
}
.buttons .control-item:last-child input{
    background: #0162BB;
    color: #FFFFFF;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.2px;
    opacity: 1;
}
.buttons .control-item:first-child input{
    color: #0162BB;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.2px;
    opacity: 1;
}
@media screen and (max-width: 992px) {
    .control{
        flex-direction: column;
    }
    .control-item label{
    font-weight: 500;
    font-size: 13px;
   }
   .first-form >p{
    font-weight: 400;
    font-size: 15px;
   }
   .first-form-content label{
        display: none;
    }
    
}
</style>