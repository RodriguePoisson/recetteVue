<template>
    <div class="card">
        <a href="#">
            <img
                class="card-img-top"
                src="https://images.unsplash.com/photo-1535025639604-9a804c092faa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6cb0ceb620f241feb2f859e273634393&auto=format&fit=crop&w=500&q=80"
                alt="Card image cap"
            />
            <div class="card-body">
                <h5 class="card-title">{{ recette.title }}</h5>
                <p class="card-text">
                    {{recette.content}}
                </p>
            </div>
        </a>
    </div>
</template>

<style>
@import "../assets/recette.scss";
</style>

<script>
export default {
    name: 'Recette',
    props: [
        'recette'
    ]
}
</script>
