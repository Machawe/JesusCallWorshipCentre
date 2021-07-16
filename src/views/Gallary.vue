<template>
	<mdb-container fluid class="mt-5">
				<img class="img-fluid z-depth-1" src="@/assets/banner.jpg" alt="video" />
        
        
		<section>
			<h1 class="pink lighten-4 mt-5 blue-grey-text font-weight-bolder">Pictures</h1>
			<mdb-lightbox :imgs="imgs" gallery></mdb-lightbox>
		</section>
		<section>
			<h1 class="pink lighten-4 mt-5 blue-grey-text font-weight-bolder">Videos</h1>
			<mdb-container class="mt-5">
				<mdb-row>
					<!-- Grid column -->
					<mdb-col lg="4" md="12" class="mb-4">
						<a @click="showModal = true"
							><img class="img-fluid z-depth-1" src="@/assets/thetimehascome.jpg" alt="video" data-toggle="modal" data-target="#modal1"
						/></a>
						<mdb-modal size="lg" :show="showModal" @close="showModal = false">
							<mdb-modal-body class="mb-0 p-0">
								<div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                    <iframe width="1584" height="531" src="https://www.youtube.com/embed/IyjGCPqMlyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
									<!-- <iframe class="embed-responsive-item" src="https://www.youtube.com/watch?v=IyjGCPqMlyM" allowfullscreen></iframe> -->
								</div>
							</mdb-modal-body>
							<mdb-modal-footer class="justify-content-center">
								<mdb-btn outline="primary" icon="times" rounded size="md" class="ml-4" @click.native="showModal = false">Close</mdb-btn>
								<mdb-btn outline="success" icon="download" rounded size="md" class="ml-4" @click.native="$notify.info({message:'Download Not Yet Available'})">Download</mdb-btn>

							</mdb-modal-footer>
						</mdb-modal>
					</mdb-col>
					<!-- Grid column -->
					<!-- Grid column -->
					<mdb-col lg="4" md="6" class="mb-4">
						<a @click="showModal2 = true"
							><img class="img-fluid z-depth-1" src="@/assets/brokenbutusable.jpg" alt="video" data-toggle="modal" data-target="#modal1"
						/></a>
						<mdb-modal size="lg" :show="showModal2" @close="showModal2 = false">
							<mdb-modal-body class="mb-0 p-0">
								<div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                    <iframe width="1584" height="531" src="https://www.youtube.com/embed/OYcGzG4hgio" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
							</mdb-modal-body>
							<mdb-modal-footer class="justify-content-center">
								<mdb-btn outline="primary" icon="times" rounded size="md" class="ml-4" @click.native="showModal2 = false">Close</mdb-btn>
								<mdb-btn outline="success" icon="download" rounded size="md" class="ml-4" @click.native="$notify.info({message:'Download Not Yet Available'})">Download</mdb-btn>

							</mdb-modal-footer>
						</mdb-modal>
					</mdb-col>
					<!-- Grid column -->
					<!-- Grid column -->
					<mdb-col lg="4" md="6" class="mb-4">
						<a  @click="showModal3 = true "
							><img class="img-fluid z-depth-1" src="@/assets/last.jpg" alt="video" data-toggle="modal" data-target="#modal1"
						/></a>
						<mdb-modal size="lg" :show="showModal3" @close="showModal3 = false">
							<mdb-modal-body class="mb-0 p-0">
								<div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                    <iframe width="1584" height="531" src="https://www.youtube.com/embed/ozXBI0Z8mvo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
								</div>
							</mdb-modal-body>
							<mdb-modal-footer class="justify-content-center">

								<mdb-btn outline="primary" icon="times" rounded size="md" class="ml-4" @click.native="showModal3 = false">Close</mdb-btn>
								<mdb-btn outline="success" icon="download" rounded size="md" class="ml-4" @click.native="$notify.info({message:'Download Not Yet Available'})">Download</mdb-btn>
							</mdb-modal-footer>
						</mdb-modal>
					</mdb-col>
					<!-- Grid column -->
				</mdb-row>
			</mdb-container>
		</section>
	</mdb-container>
</template>
<script>
import { mdbLightbox, mdbContainer, mdbRow, mdbCol, mdbModal, mdbModalBody, mdbModalFooter, mdbBtn } from "mdbvue";
export default {
	components: {
		mdbLightbox,
		mdbContainer,
		mdbRow,
		mdbCol,
		mdbModal,
		mdbModalBody,
		mdbModalFooter,
		mdbBtn,
	},
	data() {
		return {
			imgs: [
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg",
				"https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg",
			],
			showModal: false,
			showModal2: false,
			showModal3: false,
		};
	},
};
</script>
