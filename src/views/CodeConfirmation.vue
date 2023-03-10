<template>
    <div id="code-confirmation">
        <h1>Code de vérification</h1>
        <form>
            <p class="firstP">Saisissez le code de vérification 
            envoyé au +229 95242017</p>
            <div class="form-inputs">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
            </div>
            <p class="secondP">Vous n’avez pas reçu le code ? <a href=""> Renvoyez le code</a></p>
            <div class="btns-box">
                <div class="retour">
                    <span class="material-symbols-outlined">chevron_left</span>
                    <input type="button" value="Retour" @click.prevent="$router.push('/')">
                </div>
                <input type="button" value="Valider" @click.prevent="$router.push('/dashboard')">
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style scoped>
#code-confirmation > h1{
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 54px;
    margin: .5rem 0;
    color: var(--primary);
}
form{
    margin: 7% 0 0 0;
}
form > .firstP{
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.8px;
    color: #555555;
    margin: 0 0 5% 0;
}
form .form-inputs{
    display: flex;
    width: 85%;
    justify-content: space-between;
    margin: 0  0  5% 0;
}
.form-inputs input{
    display: inline-block;
    width: 52px;
    height: 52px;
    background: rgba(255, 255, 255, 0.01);
    border: 2px solid #C6D6EC;
    border-radius: 4px;
    -moz-appearance:none;
    -webkit-appearance:none; 
    appearance: none;
    outline: none;
    text-align: center;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -0.5px;
}
.secondP{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.1px;
    margin: 0  0  5% 0;
}
.secondP a{
     color: #2062F6;
}
.btns-box{
    width: 70%;
    display: flex;
    justify-content: space-between;
}
.retour input{
    padding: 16px 51px;
    width: 100%;
    height: 52px;
    background: rgba(255, 255, 255, 0.01);
    border: 2px solid #0162BB;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: -0.2px;
    color: #0162BB;
    cursor: pointer;
}
.btns-box > input{
    padding: 16px 24px;
    width: 45%;
    height: 52px;
    background: #0162BB;
    border: 1px solid #0162BB;
    border-radius: 4px;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.2px;
    color: #FFFFFF;
    cursor: pointer;
}
.retour{
    position: relative;
    width: 45%;
}
.btns-box span{
    position: absolute;
    top: 20%;
    left: 18.5%;
    transform: translate(18.5%,20%);
    z-index: 100;
    cursor: pointer;
    color: #0162BB;
}
@media screen and (max-width: 576px) {
    #code-confirmation > h1{
        font-weight: 600;
        font-size: 30px;
        margin: 0;
    }
    .btns-box{
      width: 100%;
      margin: 0 0 .9rem 0;
    }
    .retour input{
        width: 100%;
    }
    .btns-box > input{
        width: 45%;
    }

}
@media screen and (max-width: 992px) {
    .btns-box{
      width: 100%;
      margin: 0 0 2rem 0;
    }
}

</style>