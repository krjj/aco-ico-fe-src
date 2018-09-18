<template>
<section class="support">
					<div class="support__header">
						<h2>Support</h2>

						<ul class="support__tabs">
							<li class="support__tabs-item active" data-tab="1">FAQs</li>
						</ul>
					</div>

					<div class="support__content">

						<div id="tab-1" class="support__content-item support__faq active">
							
							<ul class="accordion">
								<li class="accordion__item">
									<div class="accordion__title" @click.prevent="mytoggle(0)">What is ACO? <span class="plus"><span></span><span></span></span></div>
									<div class="accordion__body" v-show="boxes[0].show">
										ACO aims to solve the problems facing international real estate transactions by creating a novel unified property store and asset transfer platform for the global real estate industry. 									</div>
								</li>
								<li class="accordion__item">
									<div class="accordion__title" @click.prevent="mytoggle(1)">What is ACO Token? <span class="plus"><span></span><span></span></span></div>
									<div class="accordion__body" v-show="boxes[1].show">
										The ACO tokens are designed to be used to unlock a smart contract for title transfer in the ACO Registry. ACO tokens are built on the ERC-20 token standard, which allows for simple integration into users wallets. The essential and obligatory steps for a real estate acquisition on ACO Registry includes the execution of the Deed Contract and Title Contract, which are necessary for the transfer of property title and the recording of the change of ownership.
									</div>
								</li>
								<li class="accordion__item">
									<div class="accordion__title" @click.prevent="mytoggle(2)">Tokenomics ? <span class="plus"><span></span><span></span></span></div>
									<div class="accordion__body" v-show="boxes[2].show">
										Token Name : ACO Coin
										<br>Token Type : Utility Token
										<br>Token Supply : 1,000,000,000 ACO Coins
										<br>ICO Soft Cap : Already Achieved
										<br>ICO Hard Cap : US$ 300,000,000
										<br>Launch Price : US$ 2,00
										<br>Private Sales : 200,000,000 ACO Coins
										<br>Public Sales : 100,000,000 ACO Coins

										<br>30% of total supply of 1 Billion ACO Tokens will be available to the market,inclusive of private sales and public sales.
										<br><br>• 10% of all tokens will be set aside as reserves to be used at a later date
										<br>• 10% of all tokens are to reward the advisors
										<br>• 15% of all tokens are reserved for management team
										<br>• 35% of all tokens are pre-sold to seed investors
									</div>
								</li>
								<li class="accordion__item">
									<div class="accordion__title" @click.prevent="mytoggle(3)">How can I buy ACO Coin? <span class="plus"><span></span><span></span></span></div>
									<div class="accordion__body" v-show="boxes[3].show">
										You can buy ACO Tokens by taking part in our ICO. Eth, BTC and Fiat currency is accepted.
									</div>
								</li>
								<li class="accordion__item">
									<div class="accordion__title" @click.prevent="mytoggle(4)">How/Where will I receive ACO? How long it will take until I receive ACO Tokens in my wallet? <span class="plus"><span></span><span></span></span></div>
									<div class="accordion__body" v-show="boxes[4].show">
										You will receive an email from us within 4 days with instructions on how to receive your ACO tokens. You need to have an ERC20 compatible wallet like Mist, Metamask, MyEtherWallet etc .
									</div>
								</li>
								<li class="accordion__item">
									<div class="accordion__title" @click.prevent="mytoggle(5)">How/where can I find the latest updates/announcements related to ACO Tokens? <span class="plus"><span></span><span></span></span></div>
									<div class="accordion__body" v-show="boxes[5].show">
										You can follow latest announcements by joining us on telegram, slack, and also on various other social media platforms like facebook, twitter, medium, reddit etc. Alternatively, you can receive latest updates via email by signing up for our newsletter.
									</div>
								</li>
								<li class="accordion__item">
									<div class="accordion__title" @click.prevent="mytoggle(6)">How to participate in the token sale? <span class="plus"><span></span><span></span></span></div>
									<div class="accordion__body" v-show="boxes[6].show">
										 You can take part in our token sale by sending your contribution in any of the accepted currencies to their respective address mentioned on the website at the time of token sale after which, tokens will be sent to the contributors as per distribution policy.
									</div>
								</li>
							</ul>
						</div>
					</div>

				</section>
</template>

<script>
export default {
  name: "Support",
  props: {
    msg: String
  },
  data() {
    return {
      boxes: [
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false },
        { show: false }
      ]
    };
  },
  mounted() {
    //require('../assets/js/scripts.min.js')
  },
  methods: {
    mytoggle: function(n) {
      for (var i = 0; i < 7; i++) {
        // close all boxes
        this.boxes[i].show = false;
      }
      this.boxes[n].show = true; // open the corresponding box
    }
  }
};
</script>


