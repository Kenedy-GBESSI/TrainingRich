<template>
    <div class="dashboard-layout">
        <DashboardHeader />
        <div class="dasboard-content">
            <DashboardSidebar />
            <RouterView />
        </div>
    </div>
</template>

<script setup>
import DashboardHeader from './DashboardHeader.vue';
import DashboardSidebar from './DashboardSidebar.vue'

</script>

<style scoped>
.dashboard-layout{
    position: relative;
    min-height: 100vh; 
    background: #FAFAFA;
}
.dasboard-content{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    flex: auto;
    min-height: calc(100vh - 70px);
}


</style>