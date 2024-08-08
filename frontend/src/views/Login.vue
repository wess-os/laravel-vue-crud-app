<template>
    <div class="container">
        <h1>Login</h1>
        <form @submit.prevent="handleLogin" class="login-form">
            <div class="form-group">
                <label for="username">Usuário:</label>
                <input type="text" id="username" v-model="username" required />
            </div>
            <div class="form-group">
                <label for="password">Senha:</label>
                <input type="password" id="password" v-model="password" required />
            </div>
            <button type="submit" class="login-button">Entrar</button>
        </form>
    </div>
</template>

<script>
    export default {

        name: 'LoginPage',

        data() {
            return {

                username: '',
                password: ''

            };
        },

        methods: {
            handleLogin() {

                console.log('Usuário:', this.username);
                console.log('Senha:', this.password);
                
            }
        }
    };
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    h1 {
        margin-bottom: 20px;
        color: #333;
    }

    .login-form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        background-color: #fff;
        border: 2px solid #007BFF;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        margin-bottom: 5px;
        color: #555;
    }

    input {
        padding: 10px;
        border: 1px solid #e0e0e0;
        border-radius: 5px;
        width: 100%;
        box-sizing: border-box;
    }

    input:focus {
        border-color: #007BFF;
        outline: none;
    }

    .login-button {
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .login-button:hover {
        background-color: #0056b3;
    }
</style>
