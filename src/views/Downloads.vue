<template>
  <mdb-container class="pb-5">
    <h2 class="h1-responsive font-weight-bold text-center my-5">Downloads</h2>
    <p class="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <mdb-row>
      <mdb-col>
        <mdb-view class="rounded d-flex justify-content-center mb-lg-0 mb-4" hover>
          <img class="img-fluid z-depth-2 rounded" src="@/assets/book3.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7">
        <a class="blue-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="book" class="pr-2" />BOOK</h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>The Courage To Stand</strong>
        </h3>
        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat mdb-iconcere
          possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis.</p>
        <p>by
          <a>
            <strong>Russe Moore</strong>
          </a>, 19/08/2018</p>
        <mdb-btn color="success" size="md"  class="waves-light ">Download</mdb-btn>
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <mdb-row>
      <mdb-col lg="7">
        <a class="brown-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="book" class="pr-2" />Book
          </h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>The Esther Anointing</strong>
        </h3>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
          quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
        <p>by
          <a>
            <strong>Michelle McClain-Walters</strong>
          </a>, 14/08/2018</p>
        <mdb-btn color="success" size="md" class="mb-lg-0 mb-4 waves-light">Download</mdb-btn>
      </mdb-col>
      <mdb-col lg="5">
        <mdb-view class="rounded d-flex justify-content-center  mb-lg-0 mb-4 " hover>
          <img class="img-fluid z-depth-2 rounded " src="@/assets/book4.jpg" alt="Sample image" />
          
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
    </mdb-row>
    <hr class="my-5" />
    <mdb-row>
      <mdb-col lg="5">
        <mdb-view class="rounded d-flex justify-content-center  mb-lg-0 mb-4" hover>
          <img class="img-fluid z-depth-2 rounded"  src="@/assets/book5.jpg" alt="Sample image" />
          <a>
            <mdb-mask overlay="white-slight" waves/>
          </a>
        </mdb-view>
      </mdb-col>
      <mdb-col lg="7">
        <a class="indigo-text">
          <h6 class="font-weight-bold mb-3">
            <mdb-icon icon="suitcase" class="pr-2" />Food</h6>
        </a>
        <h3 class="font-weight-bold mb-3 p-0">
          <strong>Shepherding a Child's Heart</strong>
        </h3>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia sit amet.</p>
        <p>by
          <a>
            <strong>Tedd Tripp</strong>
          </a>, 11/08/2018</p>
        <mdb-btn color="indigo" size="md" class="waves-light ">Download</mdb-btn>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</template>
<script>
  import { mdbContainer, mdbRow, mdbCol,  mdbMask, mdbIcon, mdbView, mdbBtn } from 'mdbvue';
  export default {
    name: 'BlogPage',
    components: {
      mdbContainer,
      mdbRow,
      mdbCol,
      mdbMask,
      mdbIcon,
      mdbView,
      mdbBtn
    }
  }
</script>