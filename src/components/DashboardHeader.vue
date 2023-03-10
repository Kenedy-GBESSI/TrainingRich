<template>
    <div class="header">
        <div class="container">
              <div class="wrapper-logo">
                  <img src="../assets/images/frame.png" alt="">
              </div>
              <div class="admin-area content">
                   <p><span></span>Compte non activé</p>
                   <div class="top-profile">
                    <span class="material-symbols-outlined">account_circle</span>
                     <span>Richard DOVOEDO</span>
                   </div>
              </div>
              <div class="admin-area-mobile">
                <span>&#9776;</span>
                   <div class="menu-mobile">
                      The menu when the btn 🍔 toggled!
                   </div>
              </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header{
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.06);
}
.header .container{
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 30px 0 30px;
}

.container .wrapper-logo{
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper-logo  img{
    width: 100%;
    height: auto;
}
.container .admin-area{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 20%;
}
.admin-area > p{
    background: #FEEFEF;
    border: 0.1px solid #DA1414;
    border-radius: 40px;
    padding: 4px 16px;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #DA1414;
    position: relative;
    text-align: center;
}
.admin-area > p span{
    position: absolute;
    left: 4%;
    background: #DA1414;
    top: 40%;
    display: inline-block;
    height: 5px;
    border-radius: 100%;
    width: 5px;
}
.admin-area .top-profile{
    display: flex;
    justify-content: center;
    align-items: center;
}
.admin-area-mobile{
    display: none;
    position: relative;
}
.admin-area-mobile span{
   font-size: 22px;
   cursor: pointer;
}
@media screen and (max-width: 992px) {
    .container .admin-area{
      display: none;
    }
    .admin-area-mobile
    {
        display: block;
    }
    .admin-area-mobile div{
        display: none;
    }
}
@media screen and (max-width: 1300px){
    .container .admin-area{
        width: 35%;
    }
}


</style>