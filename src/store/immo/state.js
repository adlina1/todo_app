export default function () {
    return {
        data(){
            return{
        
              todos: [
                {
                  id: 1,
                  name: 'tache 1',
                  completed: false  
                },
                {
                  id: 2,
                  name: 'tache 2',
                  completed: true
                }
              ],
              newTodo: '',
              filter: 'all'
            }
        }
    }
}