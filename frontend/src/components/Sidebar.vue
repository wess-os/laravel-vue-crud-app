<template>
    <div class="sidebar">
        <ul>
            <router-link to="/">
                <li>
                    <img src="../assets/logo.png" alt="Logo" id="logo">
                </li>
            </router-link>

            <hr>

            <router-link to="/createVacation">
                <li>
                    <i class="fa-solid fa-map-location-dot"></i>
                    <span class="tooltip">Create Vacation</span>
                </li>
            </router-link>

            <router-link to="/listAllVacation">
                <li>
                    <i class="fa-solid fa-clipboard"></i>
                    <span class="tooltip">List Vacations</span>
                </li>
            </router-link>

            <hr>

            <router-link to="/profile">
                <li>
                    <i class="fa-solid fa-user"></i>
                    <span class="tooltip">Profile</span>
                </li>
            </router-link>

            <hr>

            <router-link to="/login">
                <li>
                    <i class="fa-solid fa-door-open"></i>
                    <span class="tooltip">Exit</span>
                </li>
            </router-link>
        </ul>
    </div>
</template>
  
<script>
    export default {

        name: 'AppSidebar'
        
    };
</script>
  
<style scoped>
    .sidebar {
        width: 50px;
        background-color: #fff;
        padding: 15px;
        height: 97vh;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #logo {
        width: 50px;
        margin-top: -30px;
        cursor: pointer;
    }
    
    .sidebar ul {
        list-style-type: none;
        padding: 0;
        width: 100%;
        cursor: pointer;
    }

    .sidebar li {
        position: relative;
        margin: 10px 0;
        text-align: center;
        padding-top: 15px;
    }

    .sidebar li i {
        font-size: 24px;
        color: #333;
    }

    .sidebar li:hover i {
        color: #007bff;
        transition: 0.2s;
    }

    .tooltip {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px;
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 100%;
        margin-left: 0;
        opacity: 0;
        transition: opacity 0.3s;
    }

    @media (min-width: 600px) {
        .sidebar li:hover .tooltip {
            visibility: visible;
            opacity: 1;
        }
    }
</style>