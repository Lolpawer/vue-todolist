new Vue ({
    el: '#app',

    data: {
        
        todoList: [
            {
                text: 'Comprare il latte',
                done: true,
            },
            {
                text: 'Fare il bucato',
                done: true,
            },
            {
                text: "Dimenticare quello che ho fatto il 19 Ottobre del '99",
                done: false,
            },      
            {
                text: 'Dominare il mondo',
                done: false,
            },
        ],

        temporaryItem: '',

    },

    methods: {

        remove: function (index) {
            this.todoList.splice(index, 1);
        },

        addList: function () {
            this.todoList.push({text: this.temporaryItem, done: false});
            this.temporaryItem = '';
        },

    },

});