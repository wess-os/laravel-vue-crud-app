<template>
    <div class="container">
        <h1>User Profile</h1>
        <div class="user-info">
            <h2>User Information</h2>
            <p><strong>Name:</strong> {{ user.name }}</p>
            <p><strong>Email:</strong> {{ user.email }}</p>
        </div>
        <div class="change-password">
            <h2>Change Password</h2>
            <form @submit.prevent="changePassword">
                <div class="form-group">
                    <label for="current-password">Current Password:</label>
                    <input type="password" id="current-password" v-model="currentPassword" required />
                </div>
                <div class="form-group">
                    <label for="new-password">New Password:</label>
                    <input type="password" id="new-password" v-model="newPassword" required />
                </div>
                <div class="form-group">
                    <label for="confirm-password">Confirm New Password:</label>
                    <input type="password" id="confirm-password" v-model="confirmPassword" required />
                </div>
                <div class="button-container">
                    <button type="submit">Change Password</button>
                </div>
            </form>
            <p v-if="message">{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfilePage',
    data() {
        return {
            user: {
                name: 'John Doe',
                email: 'john.doe@example.com'
            },
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
            message: ''
        };
    },
    methods: {
        changePassword() {
            if (this.newPassword !== this.confirmPassword) {
                this.message = 'New passwords do not match.';
                return;
            }
            // Logic to change the password goes here
            this.message = 'Password changed successfully!';
            // Reset the form
            this.currentPassword = '';
            this.newPassword = '';
            this.confirmPassword = '';
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

    h2 {
        margin-bottom: 20px;
        color: #333;
        text-align: center;
    }

    .user-info, .change-password {
        width: 150%;
        max-width: 500px;
        background-color: #fff;
        border: 2px solid #007BFF;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
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
        max-width: 500px;
        box-sizing: border-box;
    }

    input:focus {
        border-color: #007BFF;
        outline: none;
    }

    button {
        padding: 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    p {
        color: #555;
        margin-top: 20px;
        text-align: center;
    }

    @media (max-width: 600px) {
        .container {
            width: 50%;
        }
    }
</style>
