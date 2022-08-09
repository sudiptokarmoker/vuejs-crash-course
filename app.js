const app = Vue.createApp({
    template: "",
    data(){
        return{
            firstName: 'john',
            lastName: 'Doe',
            email: 'johndoe@email.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    }
})

app.mount('#app');