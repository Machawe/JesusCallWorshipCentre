import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Content from './views/Content.vue'
import ContentHome from './views/ContentHome.vue'
import Blog from './views/Blog.vue'
import Gallary from './views/Gallary.vue'
import Downloads from './views/Downloads.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
		{
			path: "/content",
			component: Content,
			children: [
				{
					path: "/",
					name: "content",
					component: ContentHome,
				},
				{
					path: "blog",
					name: "blog",
					component: Blog,
				},
				{
					path: "gallary",
					name: "gallary",
					component: Gallary,
				},
				{
					path: "downloads",
					name: "downloads",
					component: Downloads,
				},
			],
		},
	],
});
