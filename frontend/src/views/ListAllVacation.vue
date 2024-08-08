<template>
    <div class="container">
        <h1>List of All Vacations</h1>
        <input
            type="text"
            v-model="searchQuery"
            placeholder="Search for a vacation..."
            class="search-input"
        />
        <div class="vacation-container">
            <ul class="vacation-list">
                <li v-for="(vacation, index) in filteredVacations" :key="index">
                    <div class="vacation-details">
                        <h2>{{ vacation.title }}</h2>
                        <p>{{ vacation.description }}</p>
                        <p><strong>Date:</strong> {{ vacation.date }}</p>
                        <p><strong>Location:</strong> {{ vacation.location }}</p>
                        <p><strong>Participants:</strong> {{ vacation.participants || 'N/A' }}</p>
                    </div>
                    <div class="action-buttons">
                        <button @click="editVacation(index)">Edit</button>
                        <button @click="deleteVacation(index)">Delete</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'ListAllVacationPage',

        data() {
            return {

                searchQuery: '',

                vacations: [

                    {
                        title: 'Beach Getaway',
                        description: 'Relaxing vacation at the beach.',
                        date: '2023-07-15',
                        location: 'Maldives',
                        participants: 'John, Jane'
                    },
                    {
                        title: 'Mountain Adventure',
                        description: 'Hiking and exploring the mountains.',
                        date: '2023-08-20',
                        location: 'Rocky Mountains',
                        participants: 'Alice, Bob'
                    },
                    {
                        title: 'Cultural Trip',
                        description: 'Exploring the rich history of Rome.',
                        date: '2023-09-10',
                        location: 'Rome, Italy',
                        participants: ''
                    },
                    {
                        title: 'Safari Adventure',
                        description: 'Experience the wildlife in Africa.',
                        date: '2023-10-05',
                        location: 'Kenya',
                        participants: 'Tom, Jerry'
                    },
                    {
                        title: 'Ski Trip',
                        description: 'Enjoy skiing in the Alps.',
                        date: '2023-12-15',
                        location: 'Switzerland',
                        participants: 'Mike, Sarah'
                    },
                    {
                        title: 'City Exploration',
                        description: 'Discover the beauty of New York City.',
                        date: '2023-11-20',
                        location: 'New York, USA',
                        participants: ''
                    },
                ]
            };
        },

        computed: {
            filteredVacations() {
                return this.vacations.filter(vacation => {

                    return vacation.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        vacation.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        vacation.location.toLowerCase().includes(this.searchQuery.toLowerCase());

                });
            }
        },

        methods: {
            editVacation(index) {

                const vacationToEdit = this.vacations[index];
                console.log('Editing vacation:', vacationToEdit);

            },

            deleteVacation(index) {
                if (confirm('Are you sure you want to delete this vacation?')) {

                    this.vacations.splice(index, 1);
                    console.log('Vacation deleted:', index);
                    
                }
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

    .search-input {
        width: 80%;
        max-width: 600px;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #007BFF;
        border-radius: 5px;
        font-size: 16px;
    }

    .vacation-container {
        width: 600px;
        max-width: 800px;
        max-height: 510px;
        overflow-y: auto;
        border: 2px solid #007BFF;
        border-radius: 10px;
        background-color: #fff;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }

    /* Scrollbar (Chrome, Safari) */
    .vacation-container::-webkit-scrollbar {
        width: 10px;
        border-radius: 10px;
    }

    .vacation-container::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

    .vacation-container::-webkit-scrollbar-thumb {
        background: #007BFF;
        border-radius: 10px;
    }

    .vacation-container::-webkit-scrollbar-thumb:hover {
        background: #0056b3;
        border-radius: 10px;
    }

    /*Scrollbar Firefox */
    .vacation-container {
        scrollbar-width: thin;
        scrollbar-color: #007BFF #f1f1f1;
        border-radius: 10px;
    }

    .vacation-list {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin: 15px 20px;
        padding: 10px;
        border-bottom: 1px solid #e0e0e0;
        color: #555;
    }

    li:last-child {
        border-bottom: none;
    }

    .vacation-details {
        margin-bottom: 10px;
    }

    .action-buttons {
        display: flex;
        justify-content: left;
        gap: 10px;
    }

    button {
        padding: 5px 10px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    @media (max-width: 600px) {
        .vacation-container {
            width: 95%;
        }

        li {
            margin: 10px 5px;
            padding: 8px;
        }
    }
</style>