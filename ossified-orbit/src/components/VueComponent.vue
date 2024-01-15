import { ref } from 'vue' export default { // `setup` is a special hook
dedicated for the Composition API. setup() { const count = ref(0) // expose the
ref to the template return { count } } }
