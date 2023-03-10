<template>
    <div class="Step2Compte">
        Etape 2
        <div class="control buttons">
                <div class="control-item">
                    <input type="button"  value="Annuler" @click.prevent="$emit('go_back')">
                </div>
                <div class="control-item">
                    <input type="button"  value="Valider" @click.prevent="$emit('go_next2')" >
                </div>
            </div>
    </div>
</template>

<script setup>
defineEmits(['go_next2','go_back'])

</script>

<style scoped>
.Step2Compte{
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.control{
    position: relative;
    width: 50%;
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

</style>