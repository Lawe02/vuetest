var app7 = new Vue({
    el: '#app-7',
    data: {
        message: '',
        todos: [
            { text: 'sjora bil'},
            { text: 'äta bil'},
            { text: 'korva bil'}
        ]
    },
    methods: {
        addToList: function () {
            app7.todos.push({ text: this.message})
        }
    }
})  