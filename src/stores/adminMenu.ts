import {defineStore} from "pinia";
export interface AdminMenuState{

}
export const useStore = defineStore('adminMenu', {
    state: () => {
        return {
            // 所有这些属性都将自动推断其类型
            counter: 0,
            name: 'Eduardo',
            isAdmin: true,
        }
    },
})