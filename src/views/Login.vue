<template>
	<mdb-container class="pt-5 align-items-center  " fluid>
		<mdb-navbar color="white" position="top" scrolling light>
			<mdb-navbar-brand  :to="{name:'home'}"> <img src="@/assets/jcwc.jpg" width="50px" alt="" /> Jesus Calls Worship Center </mdb-navbar-brand>
		</mdb-navbar>

		<mdb-row class="justify-content-center align-items-center" style="min-height:80vh">
			<mdb-col lg="4" md="6" sm="9" col="11" class="card login-card py-5 px-3 ">
				<h3 class="pink-text">Login</h3>
				<mdb-input label="Voucher Code" class="pb-3" small="Enter Voucher Code" v-model="voucherCode" />
				<mdb-btn @click="login" outline="primary" rounded>Login</mdb-btn>
			</mdb-col>
		</mdb-row>
	</mdb-container>
</template>
<script>
import { mdbContainer, mdbInput, mdbBtn, mdbRow, mdbCol, mdbNavbar, mdbNavbarBrand } from "mdbvue";
export default {
	name: "login",
	components: {
		mdbContainer,
		mdbInput,
		mdbBtn,
		mdbRow,
		mdbCol,
		mdbNavbar,
		mdbNavbarBrand,
	},
	data() {
		return {
			voucherCode: "",
		};
	},
	methods: {
		login() {
			this.$router.push({ name: "content" });
			console.log(this.voucherCode);
		},
	},
};
</script>
