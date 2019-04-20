<template>
 <!-- 
  <div class="dial-payment-section">
                                        <md-layout md-gutter md-align="center">
                                          <md-layout >
                                            <md-layout >
                                              <md-input-container md-inline class="no-margin">
                                                <md-input class="dial-input" v-model="number"></md-input>
                                              </md-input-container>
                                            </md-layout>
                                          </md-layout>
                                        </md-layout>
                                        <md-layout md-gutter md-align="center">
                                          <md-layout >
                                            <md-layout   md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(1)">1</md-button>
                                            </md-layout>
                                            <md-layout   md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(2)">2</md-button>
                                            </md-layout>
                                            <md-layout   md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(3)">3</md-button>
                                            </md-layout>
                                          </md-layout>
                                        </md-layout>
                                        <md-layout md-gutter md-align="center">
                                          <md-layout >
                                            <md-layout  md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(4)">4</md-button>
                                            </md-layout>
                                            <md-layout   md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(5)">5</md-button>
                                            </md-layout>
                                            <md-layout   md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(6)">6</md-button>
                                            </md-layout>
                                          </md-layout>
                                        </md-layout>
                                        <md-layout md-gutter md-align="center">
                                          <md-layout >
                                            <md-layout  md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(7)">7</md-button>
                                            </md-layout>
                                            <md-layout   md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(8)">8</md-button>
                                            </md-layout>
                                            <md-layout   md-align="center">
                                              <md-button class="btn-key" v-on:click="addNumber(9)">9</md-button>
                                            </md-layout>
                                          </md-layout>
                                        </md-layout>
                                        <md-layout md-gutter md-align="center">
                                          <md-layout >
                                            <md-layout md-align="center" >
                                                    <md-button class="btn-key" v-on:click="addNumber('.')">.</md-button>
                                                          
                                            </md-layout>
                                            <md-layout  md-align="center" >
                                              <md-button class="btn-key" v-on:click="addNumber(0)">0</md-button>
                                            </md-layout>
                                            <md-layout  >
                                                    <md-button class="md-warn btn-key">
                                                            <md-icon>clear</md-icon>
                                                          </md-button>
                                            </md-layout>
                                          </md-layout>
                                        </md-layout>
                                        <md-layout md-gutter md-align="center">
                                          <md-layout >
                                            <md-layout md-align="center" >
                                                    <md-button class="btn-key">Request</md-button>
                                             
                                            </md-layout>
                                            <md-layout  md-align="center" >
                                                    <md-button class="btn-key">Pay</md-button>
                                            </md-layout>
                                           
                                          </md-layout>
                                        </md-layout>
                                        
                                      </div>
 -->
<div class="dial-container">

 <md-field>
      <md-input class="dial-input" v-model="number"></md-input>
    </md-field>

   <div class="md-layout">
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(1)">1</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(2)">2</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(3)">3</md-button></div>
  </div>
  <div class="md-layout">
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(4)">4</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(5)">5</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(6)">6</md-button></div>
  </div>
   <div class="md-layout">
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(7)">7</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(8)">8</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(9)">9</md-button></div>
  </div>
   <div class="md-layout">
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber('.')">.</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key" v-on:click="addNumber(0)">0</md-button></div>
    <div class="md-layout-item">  <md-button class="btn-key">x</md-button></div>
    <div class="md-layout-item">      <md-button class="md-primary md-raised" v-on:click="showDialog = true">Show Dialog</md-button>
  </div>


  </div>

<div>
<md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Preferences</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="General">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>

        <md-tab md-label="Activity">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>

        <md-tab md-label="Account">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" v-on:click="showDialog = false">Close</md-button>
        <md-button class="md-primary" v-on:click="showDialog = false">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

</div>
</div>


</template>



<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data() {
    return {
      number:"",
      showDialog: false

    };
  },
  methods:{
    addNumber:function(number){
      this.number+=number;
    }
  }
    }
</script>

<style lang="scss" scoped>
  .md-dialog {
    max-width: 768px;
  }
</style>