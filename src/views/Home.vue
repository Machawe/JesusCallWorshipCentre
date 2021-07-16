<template>
	<mdb-container fluid class="pt-0">
		<!-- <h1 class="my-5">Jesus Calls Worship Centre</h1> -->
		<mdb-navbar color="white" position="top" scrolling light>
			<!-- mdbNavbar brand -->
			<mdb-navbar-brand  href="#/"> <img src="@/assets/jcwc.jpg" width="50px" alt="" /> Jesus Calls Worship Center </mdb-navbar-brand>
			<mdb-navbar-toggler>
			
				<mdb-navbar-nav right>
					<mdb-form-inline class="align-items-end">
						<mdb-btn @click="$router.push({ name: 'login' })" outline="pink" size="sm" type="button">Login</mdb-btn>
					</mdb-form-inline>
				</mdb-navbar-nav>
			</mdb-navbar-toggler>
		</mdb-navbar>

		<section class="mt-0 pt-0">
			<mdb-carousel class="mt-0" :items="basicCarousel" v-model="carousel" indicators></mdb-carousel>
		</section>
		<div class="pink">
			<mdb-container class="text-left">
				<mdb-row class="py-4 d-flex align-items-center">
					<mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
						<h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
					</mdb-col>
					<mdb-col md="6" lg="7" class="text-center text-md-right">
						<a href="https://www.facebook.com/groups/218732988621985" class="fb-ic ml-0"><i class="fab fa-facebook-f white-text mr-lg-4"> </i></a>
						<a href="https://www.youtube.com/channel/UCOzV6pzTef-IEl_1rxFhE-A/featured" class="tw-ic"><i class="fab fa-youtube white-text mr-lg-4"> </i></a>
						<a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
						<a class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></a>
					</mdb-col>
				</mdb-row>
			</mdb-container>
		</div>
		<section>
			<blockquote class="blockquote text-center">
				<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				<footer class="blockquote-footer mb-3">Someone famous in <cite title="Source Title">Source Title</cite></footer>
			</blockquote>
		</section>
  <section class="my-5">
      <h2 class="h1-responsive font-weight-bold text-center my-5">Services</h2>
      <p class="lead grey-text w-responsive text-center mx-auto mb-5">The church hold the following Services</p>
      <mdb-row>
        <mdb-col lg="5" class="text-center text-lg-left">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
        </mdb-col>
        <mdb-col lg="7">
          <mdb-row class="mb-3">
            <mdb-col size="1">
              <mdb-icon icon="share" size="lg" class="indigo-text"/>
            </mdb-col>
            <mdb-col xl="10" md="11" size="10">
              <h5 class="font-weight-bold mb-3">Morning Service</h5>
              <p class="grey-text">8:00 am - 10:00 am</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-3">
            <mdb-col size="1">
              <mdb-icon icon="share" size="lg" class="indigo-text"/>
            </mdb-col>
            <mdb-col xl="10" md="11" size="10">
              <h5 class="font-weight-bold mb-3">Main Service</h5>
              <p class="grey-text">10:00 am - 12:00 pm </p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-3">
            <mdb-col size="1">
              <mdb-icon icon="share" size="lg" class="indigo-text"/>
            </mdb-col>
            <mdb-col xl="10" md="11" size="10">
              <h5 class="font-weight-bold mb-3">Thursday Service</h5>
              <p class="grey-text">8:00am - 5:00 pm</p>
            </mdb-col>
          </mdb-row>
          <mdb-row class="mb-3">
            <mdb-col size="1">
              <mdb-icon icon="share" size="lg" class="indigo-text"/>
            </mdb-col>
            <mdb-col xl="10" md="11" size="10">
              <h5 class="font-weight-bold mb-3">Friday</h5>
              <p class="grey-text">8:00am - 5:00 pm</p>
            </mdb-col>
          </mdb-row>
        </mdb-col>
      </mdb-row>
    </section>



		<section>
			<h2 class="h1-responsive font-weight-bold my-5">News and Articles</h2>
			<mdb-row>
				<mdb-col sm="4">
					<mdb-card narrow>
						<mdb-card-title class="pink lighten-5" >
							<h2 class="card-header-title mt-3 ">Ally Cook</h2>
							<p class="mb-0"><mdb-icon icon="calendar-alt" />05.07.2021</p>
						</mdb-card-title>
						<mdb-card-body class="text-center" cascade>
							<mdb-card-text
								>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione
								est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
								ex ea commod</mdb-card-text
							>
							<a class="orange-text mt-1 d-flex flex-row-reverse">
								<h5 class="p-2" waves>
									Read more
									<mdb-icon icon="angle-double-right" />
								</h5>
							</a>
						</mdb-card-body>
					</mdb-card>
				</mdb-col>
				<mdb-col sm="4">
					<mdb-card narrow >
						<mdb-card-title class="pink lighten-5 ">
							<h2 class="card-header-title mt-3">Title of the news</h2>
							<p class="mb-0"><mdb-icon icon="calendar-alt" />26.07.2017</p>
						</mdb-card-title>
						<mdb-card-body class="text-center" cascade>
							<mdb-card-text
								>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione
								est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum
                .
                <hr></mdb-card-text
							>
							<a class="orange-text mt-1 d-flex flex-row-reverse">
								<h5 class="p-2" waves>
									Read more
									<mdb-icon icon="angle-double-right" />
								</h5>
							</a>
						</mdb-card-body>
					</mdb-card>
				</mdb-col>
				<mdb-col sm="4">
					<mdb-card narrow>
						<mdb-card-title class="pink lighten-5 ">
							<h2 class="card-header-title mt-3">Marta</h2>
							<p class="mb-0 "><mdb-icon icon="calendar-alt" />26 July 2017</p>
						</mdb-card-title>
						<mdb-card-body class="text-center" cascade>
							<mdb-card-text
								>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, ex, recusandae. mdbIconcere modi sunt, quod quibusdam dignissimos neque rem nihil ratione
								est placeat vel, natus non quos laudantium veritatis sequi.Ut enim ad minima veniam, quis nostrum.</mdb-card-text
							>
							<hr />
							<a class="orange-text mt-1 d-flex flex-row-reverse">
								<h5 class="p-2" waves>
									Read more
									<mdb-icon icon="angle-double-right" />
								</h5>
							</a>
						</mdb-card-body>
					</mdb-card>
				</mdb-col>
			</mdb-row>
		</section>

		<section class="team-section text-center my-5">
			<h2 class="h1-responsive font-weight-bold my-5">Testimonials</h2>
			<p class="dark-grey-text w-responsive mx-auto mb-5">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro
				a pariatur veniam.
			</p>

			<mdb-row class="text-center">
				<mdb-col md="4" class="mb-md-0 mb-5">
					<mdb-testimonial>
						<mdb-avatar class="mx-auto">
							<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid" />
						</mdb-avatar>
						<h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
						<p class="font-weight-normal dark-grey-text">
							<mdb-icon class="fas fa-quote-left pr-2" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic
							tenetur.
						</p>
						<div class="orange-text">
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star-half-alt" />
						</div>
					</mdb-testimonial>
				</mdb-col>
				<mdb-col md="4" class="mb-md-0 mb-5">
					<mdb-testimonial>
						<mdb-avatar class="mx-auto">
							<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid" />
						</mdb-avatar>
						<h4 class="font-weight-bold dark-grey-text mt-4">Pastor John Doe</h4>
						<p class="font-weight-normal dark-grey-text">
							<mdb-icon class="fas fa-quote-left pr-2" />Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
						</p>
						<div class="orange-text">
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
						</div>
					</mdb-testimonial>
				</mdb-col>
				<mdb-col md="4">
					<mdb-testimonial>
						<mdb-avatar class="mx-auto">
							<img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid" />
						</mdb-avatar>
						<h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
						<p class="font-weight-normal dark-grey-text">
							<mdb-icon class="fas fa-quote-left pr-2" />At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
						</p>
						<div class="orange-text">
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star" />
							<mdb-icon icon="star-o" />
						</div>
					</mdb-testimonial>
				</mdb-col>
			</mdb-row>
		</section>

		<mdb-footer color="unique-color-dark" class="page-footer font-small pt-0">
			<div class="pink ">
				<mdb-container class="text-left">
					<mdb-row class="py-4 d-flex align-items-center">
						<mdb-col md="6" lg="5" class="text-center text-md-left mb-4 mb-md-0">
							<h6 class="mb-0 white-text">Get connected with us on social networks!</h6>
						</mdb-col>
						<mdb-col md="6" lg="7" class="text-center text-md-right">
							<a href="https://www.facebook.com/groups/218732988621985" class="fb-ic ml-0"><i class="fab fa-facebook-f white-text mr-lg-4"> </i></a>
							<a href="https://www.youtube.com/channel/UCOzV6pzTef-IEl_1rxFhE-A/featured" class="tw-ic"><i class="fab fa-youtube white-text mr-lg-4"> </i></a>
							<a class="li-ic"><i class="fab fa-linkedin-in white-text mr-lg-4"> </i></a>
							<a class="ins-ic"><i class="fab fa-instagram white-text mr-lg-4"> </i></a>
						</mdb-col>
					</mdb-row>
				</mdb-container>
			</div>
			<mdb-container class="mt-5 mb-4 text-center text-md-left">
				<mdb-row class="mt-3">
					<mdb-col md="2" lg="4" xl="3" class="mb-4">
						<h6 class="text-uppercase font-weight-bold"><strong>Products</strong></h6>
						<hr class="pink  mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
						<p><a href="#!">Videos</a></p>
						<p><a href="#!">Articles</a></p>
						<p><a href="#!">Books</a></p>
						<p><a href="#!">Audio</a></p>
					</mdb-col>
					<mdb-col md="3" lg="4" xl="4" class="mb-4">
						<h6 class="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
						<hr class="pink mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
						<p><a href="#!">Blog</a></p>
						<p><a href="#!">Bibel Study</a></p>
						<p><a href="#!">Swaziland conference of churches </a></p>
						<p><a href="#!">Help</a></p>
					</mdb-col>
					<mdb-col md="4" lg="4" xl="4" class="mb-4">
						<h6 class="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
						<hr class="pink accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px" />
						<p><i class="fas fa-home mr-3"></i> Manzini</p>
						<p><i class="fas fa-envelope mr-3"></i> jesuscallssworshipcentre@gmail.com</p>
						<p><i class="fas fa-phone mr-3"></i> 2505-0000</p>
						<p><i class="fas fa-print mr-3"></i> 7864-5567</p>
					</mdb-col>
				</mdb-row>
			</mdb-container>
			<div class="footer-copyright text-center py-3">
				<mdb-container fluid> &copy; 2021 Copyright: <a href="https://www.MDBootstrap.com"> Jesus Calls Worship Center</a> </mdb-container>
			</div>
		</mdb-footer>
	</mdb-container>
</template>

<script>
import {
	mdbCarousel,
	mdbContainer,
	mdbNavbar,
	mdbNavbarNav,
	mdbNavbarToggler,
	mdbNavbarBrand,
	mdbCard,
	mdbCardBody,
	mdbCardText,
	mdbRow,
	mdbCol,
	mdbFooter,
	mdbFormInline,
	mdbBtn,
} from "mdbvue";

export default {
	name: "home",
	components: {
		mdbCarousel,
		mdbContainer,
		mdbNavbar,
		mdbNavbarNav,
		mdbNavbarToggler,
		mdbNavbarBrand,
		mdbCard,
		mdbCardBody,
		mdbCardText,
		mdbRow,
		mdbCol,
		mdbFooter,
		mdbFormInline,
		mdbBtn,
	},
	data() {
		return {
			basicCarousel: [
				{
					img: true,
					src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
					mask: "black-light",
					alt: "First Slide",
					caption: {
						title: "First slide",
					},
				},
				{
					img: true,
					src: "https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg",
					mask: "black-strong",
					caption: {
						title: "Second slide",
					},
				},
				{
					img: true,
					src: "https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg",
					mask: "black-slight",
					caption: {
						title: "Third slide",
					},
				},
			],
      verse:''
		};
	},
  created(){
    fetch('https://labs.bible.org/api/?passage=random&type=json')
  .then(response => (this.verse = response.data))
  }
};
</script>
