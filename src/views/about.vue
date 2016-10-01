<template>
    <div>
        <header-component
            :foo="baz"
            :bar="qux"
            @event-a="doThis"
            @event-b="doThat">
            <!-- content -->
            <img slot="icon" src="...">
            <p slot="main-text">Hello!</p>
        </header-component>
        <div>this is template body</div>
        <slot name='one'>
            如果没有分发内容则显示我。
        </slot>
        <other-component :show.sync='isShow'> </other-component>
        <component :is="currentView"
            transition="fade"
            transition-mode="out-in"
            keep-alive>
        <!-- 组件在 vm.currentview 变化时改变 -->
        </component>
    </div>
</template>

<script>
    import HeaderComponent from './components/header.vue'
    import OtherComponent from './components/other.vue'
    import { getName } from '../vuex/getters'
    import { updateName } from '../vuex/actions'
    export default{
        vuex:{
            getters:{
                getName
            },
            actions:{
                updateName
            }
        },
        props:['title'],//或更多要求用对象方式声明
        data(){
            return{
                msg:'hello vue',
                isShow:true,
                currentView:'foot'
            }
        },
        ready(){},
        methods:{},
        computed:{
            thisMessage:{
                get(){
                    return "filted"
                },
                set(value){
                    this.msg=value;
                }
            }
        },
        events:{
        //使用 $on() 监听事件；
        //使用 $emit() 在它上面触发事件；
        //使用 $dispatch() 派发事件，事件沿着父链冒泡；
        //使用 $broadcast() 广播事件，事件向下传导给所有的后代。
        },
        components:{ //三种写法,注意命名转变
            'other-component':OtherComponent,
            HeaderComponent,
            'foot':require('./components/foot.vue')
        }
    }
</script>

<style scoped>
    body{
        color:#ff0000;
    }
    .fade-transition {
        transition: opacity .3s ease;
     }
     .fade-enter, .fade-leave {
        opacity: 0;
     }
</style>
