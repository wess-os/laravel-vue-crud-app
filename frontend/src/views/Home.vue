<template>
    <div class="container">
        <h1>Vacation Suggestions</h1>
        <ul class="suggestions-list">
            <li>Beach: Relax on a paradise beach.</li>
            <li>Mountain: Engage in winter sports or go hiking.</li>
            <li>Historic Cities: Explore cities rich in culture and history.</li>
            <li>Nature Adventure: Go ecotourism in places like the Amazon.</li>
            <li>Cruise: Sail through various cities and islands.</li>
            <li>Wellness Retreat: Participate in a yoga or spa retreat.</li>
            <li>Gastronomic Trip: Experience local cuisine in different cities.</li>
            <li>Theme Parks: Have fun at parks like Disney or Universal Studios.</li>
            <li>Cultural Trip: Visit festivals and art exhibitions.</li>
            <li>Road Trip: Plan a car trip along scenic routes.</li>
        </ul>
    </div>
</template>

<script>
    export default {

        name: 'HomePage'
        
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

    .suggestions-list {
        list-style-type: none;
        padding: 0;
        border: 2px solid #007BFF;
        border-radius: 10px;
        width: 80%;
        max-width: 600px;
        background-color: #fff;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
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

    li:hover {
        background-color: #f1f1f1;
        cursor: pointer;
    }
</style>