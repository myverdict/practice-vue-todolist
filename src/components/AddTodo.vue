<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
    // import {v4 as uuidv4} from 'uuid';

    export default {
        name: 'AddTodo',
        data() {
            return {
                title: ''
            }
        },
        methods: {
            addTodo(e) {
                e.preventDefault();

                // if AddTodo input box is not empty
                if(this.title.trim().length > 0)
                {
                    // create a new to do object
                    let newTodo = {
                        // id: uuidv4(),
                        title: this.title,
                        completed: false
                    }

                    // send object to parent
                    this.$emit('add-todo', newTodo);    
                }

                // empty the input text box
                this.title = '';                        
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }
    
    input[type="submit"] {
        flex: 2;
    }
</style>