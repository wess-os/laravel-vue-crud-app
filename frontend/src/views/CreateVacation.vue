<template>
    <div class="create-vacation">
        <h1>Create Vacation</h1>
        <form @submit.prevent="createVacation">
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" v-model="title" required />
            </div>

            <div class="form-group">
                <label for="description">Description:</label>
                <textarea id="description" v-model="description" required rows="4" resize="none"></textarea>
            </div>

            <div class="form-group">
                <label for="date">Date (YYYY-MM-DD):</label>
                <input type="date" id="date" v-model="date" required />
            </div>

            <div class="form-group">
                <label for="location">Location:</label>
                <input type="text" id="location" v-model="location" required />
            </div>

            <div class="form-group">
                <label for="participants">Participants (optional):</label>
                <input type="text" id="participants" v-model="participants" />
            </div>

            <div class="button-container">
                <button type="submit">Create Vacation</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {

        name: 'CreateVacationPage',

        data() {
            return {

                title: '',
                description: '',
                date: '',
                location: '',
                participants: ''

            };
        },

        methods: {
            createVacation() {
                const vacationData = {

                    title: this.title,
                    description: this.description,
                    date: this.date,
                    location: this.location,
                    participants: this.participants

                };

                console.log('Vacation Created:', vacationData);
                
            }
        }
    };
</script>

<style>
    h1 {
        margin-bottom: 20px;
        text-align: center;
        color: #333;
    }

    .create-vacation {
        width: 80%;
        max-width: 500px;
        margin: 0 auto;
        padding: 20px;
        border: 2px solid #007BFF;
        border-radius: 10px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        color: #555;
    }

    input[type="text"],
    input[type="date"],
    textarea {
        width: 100%;
        max-width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        box-sizing: border-box;
        color: #555;
    }

    textarea {
        resize: none;
    }

    .button-container {
        display: flex;
        justify-content: center;
    }

    button {
        padding: 10px 15px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }
</style>