import Vue from 'vue'
import { Button, Form, FormItem, Input, Message, Menu, MenuItem, Submenu, Row, Col, Avatar, 
    Container, Header, Aside, Main, } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Avatar)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)

// Message需要进行原型全局挂载
Vue.prototype.$message = Message
