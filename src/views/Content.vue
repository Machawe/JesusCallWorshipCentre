<template>
	<mdb-container fluid>
		<mdb-navbar color="white" position="top" scrolling light>
			<mdb-navbar-brand tag="a"  href="#/"> <img src="@/assets/jcwc.jpg" width="50px" alt="" /> Jesus Calls Worship Center </mdb-navbar-brand>
		<mdb-navbar-toggler>
			<mdb-navbar-nav center class="red-text">
						<mdb-nav-item href="#/content" waves-fixed>All</mdb-nav-item>
						<mdb-nav-item href="#/content/gallary" waves-fixed>Gallary</mdb-nav-item>
						<mdb-nav-item href="#/content/downloads" waves-fixed>Downloads</mdb-nav-item>
						<mdb-nav-item href="#/content/blog" waves-fixed>Blog</mdb-nav-item>

			</mdb-navbar-nav>
		</mdb-navbar-toggler>
		</mdb-navbar>

		<router-view />
	</mdb-container>
</template>
<script>
import { mdbContainer, mdbNavbar,mdbNavbarBrand,  mdbNavItem, mdbNavbarNav,mdbNavbarToggler } from "mdbvue";
export default {
	name: "content",
	components: {
		mdbContainer,
		mdbNavbar,
		mdbNavbarBrand,
		mdbNavItem,
        mdbNavbarNav,
        mdbNavbarToggler
	},
};
</script>
