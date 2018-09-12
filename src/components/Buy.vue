<template>
  <div class="buy">
                <div class="buy__header">

                    <h2>Buy Tokens</h2>

                </div>

                <div class="buy__body">

                    <div class="payment">
                        <div id="DIV_1">
                            <div id="DIV_2">
                                <div id="DIV_3">
                                    <div id="DIV_5">
                                        <label for="c380af47_address" id="LABEL_6">
                                            Your ethereum wallet address to receive tokens
                                        </label>
                                        <div id="DIV_7">
                                            <div id="DIV_8">
                                                <div id="DIV_9">
                                                    <input type="text" value="0x1BC19BE4A7543a76Edf5d636EFC95d554c447A27" name="address" id="INPUT_10" />
                                                </div>
                                                <div id="DIV_11">
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div id="DIV_13">
                                        <label for="c380af47_address" id="LABEL_14">
                                            Choose payment method
                                        </label>
                                        <div id="DIV_15">
                                            <div id="DIV_16">
                                                <label id="LABEL_17">
                                                    <input type="radio" name="paymentmethod" value="eth" id="INPUT_18" v-model="pym" v-on:change="pys()" />
                                                    <span v-bind:id="pyme"></span>
                                                    <span id="SPAN_20">ETH</span>
                                                </label>
                                            </div>
                                            <div id="DIV_21">
                                            </div>
                                            <div id="DIV_22">
                                                <label id="LABEL_23">
                                                    <input type="radio" name="paymentmethod" value="btc" id="INPUT_18" v-model="pym" v-on:change="pys()"/>
                                                    <span v-bind:id="pymb"></span>
                                                    <span id="SPAN_26">BTC</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="DIV_27" v-show="pym === 'eth'">
                                        <div id="DIV_28">
                                            <label for="c380af47_eth-address" id="LABEL_29">
                                                Send ETH to this address to get token
                                            </label>
                                            <div id="DIV_30">
                                                <div id="DIV_31">
                                                    <div id="DIV_32">
                                                        <input type="text" v-model="ethAddress" name="eth-address" id="INPUT_33" />
                                                    </div>
                                                    <div id="DIV_34">
                                                        <button v-clipboard:copy="ethAddress" id="A_35">Copy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="DIV_36">
                                                Recommended gas price is 10 Gwei. You will be able to get tokens right after purchase.
                                            </div>
                                        </div>
                                    </div>
                                    <div id="DIV_43" v-show="pym === 'btc'">
                                        <div id="DIV_44">
                                            <label for="c380af47_btc-address" id="LABEL_45">
                                                Send BTC to this address to get token
                                            </label>
                                            <div id="DIV_46">
                                                <div id="DIV_47">
                                                    <div id="DIV_48">
                                                        <input type="text" v-model="btcAddress" name="btc-address" id="INPUT_49" />
                                                    </div>
                                                    <div id="DIV_50">
                                                        <button v-clipboard:copy="btcAddress" id="A_35">Copy</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="DIV_52">
                                                Recommended fee is 0.0005 BTC. You will be able to get tokens right after purchase.
                                                <br
                                                    id="BR_53" />1 ETH ~ 0.03645 BTC
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
</template>

<script>
export default {
  name: "Buy",
  props: {
    msg: String
  },
  data() {
    return {
      pym: "eth",
      pyme: "SPAN_19",
      pymb: "SPAN_25",
      ethAddress : '0x4137ad3f84ac257efb9b1d844bd2a5695aec00b..',
      btcAddress : '1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4x..'
    };
  },
  methods: {
    pys() {
      if (this.pym == "eth") {
        this.pyme = "SPAN_19";
        this.pymb = "SPAN_25";
      } else {
        this.pyme = "SPAN_25";
        this.pymb = "SPAN_19";
      }
    }
  }
};
</script>

<style scoped>
@import "../assets/css/main.min.css";

#DIV_1 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 464.766px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 734px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 367px 232.375px;
  transform-origin: 367px 232.375px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 35.52px;
  padding-top: 0px;
} /*#DIV_1*/

#DIV_2 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 380.938px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 190.469px;
  transform-origin: 331.484px 190.469px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_2*/

#DIV_3 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 380.938px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 662.969px;
  will-change: transform, opacity;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 190.469px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transform-origin: 331.484px 190.469px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;
} /*#DIV_3*/

#DIV_4 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 31px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 15.5px;
  transform-origin: 331.484px 15.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 700 normal 26.56px / 31.872px "Avenir Next",
    "Avenir Next Cyr", sans-serif;
  margin: 0px 0px 32.4032px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_4*/

#DIV_5 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 85.5781px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 42.7812px;
  transform-origin: 331.484px 42.7812px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px 0px 32px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_5*/

#LABEL_6,
#LABEL_14,
#LABEL_29 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  display: block;
  height: 20px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 10px;
  transform-origin: 331.484px 10px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 600 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px 0px 12.32px;
  outline: rgb(49, 57, 67) none 0px;
} /*#LABEL_6, #LABEL_14, #LABEL_29*/

#DIV_7,
#DIV_30 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 53.2656px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 26.625px;
  transform-origin: 331.484px 26.625px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 12.32px 0px 0px;
  outline: rgb(49, 57, 67) none 0px;
  transition: all 0.2s ease 0s;
} /*#DIV_7, #DIV_30*/

#DIV_8,
#DIV_31 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  display: flex;
  height: 53.2656px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 682.969px;
  column-rule-color: rgb(49, 57, 67);
  align-items: center;
  justify-content: center;
  perspective-origin: 341.484px 26.625px;
  transform-origin: 341.484px 26.625px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex: 0 0 auto;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px -10px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_8, #DIV_31*/

#DIV_9,
#DIV_32 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 53.2656px;
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 512.219px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 256.109px 26.625px;
  transform-origin: 256.109px 26.625px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_9, #DIV_32*/

#INPUT_10 {
  color: rgb(84, 84, 84);
  height: 53.2656px;
  text-decoration: none solid rgb(84, 84, 84);
  text-size-adjust: 100%;
  width: 492.219px;
  column-rule-color: rgb(84, 84, 84);
  perspective-origin: 246.109px 26.625px;
  transform-origin: 246.109px 26.625px;
  caret-color: rgb(84, 84, 84);
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 1px solid rgb(224, 230, 237);
  border-radius: 4px 4px 4px 4px;
  font: normal normal 400 normal 14px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(84, 84, 84) none 0px;
  padding: 0px 0px 0px 28.32px;
  transition: all 0.2s ease 0s;
} /*#INPUT_10*/

#DIV_11 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 170.734px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 85.3594px 0px;
  transform-origin: 85.3594px 0px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_11*/

#STYLE_12 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  column-rule-color: rgb(49, 57, 67);
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#STYLE_12*/

#DIV_13 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 53.3125px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 26.6562px;
  transform-origin: 331.484px 26.6562px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px 0px 32px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_13*/

#DIV_15 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  display: flex;
  height: 21px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 682.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 341.484px 10.5px;
  transform-origin: 341.484px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex: 0 0 auto;
  flex-flow: row wrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px -10px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_15*/

#DIV_16 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 21px;
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 77.0938px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 38.5469px 10.5px;
  transform-origin: 38.5469px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_16*/

#LABEL_17 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  cursor: pointer;
  display: flex;
  height: 21px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 57.0938px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 28.5469px 10.5px;
  transform-origin: 28.5469px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#LABEL_17*/

#INPUT_18 {
  bottom: 8px;
  cursor: default;
  display: block;
  height: 13px;
  left: 0px;
  min-height: 13px;
  min-width: 13px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 44.0938px;
  text-size-adjust: 100%;
  top: 0px;
  width: 13px;
  perspective-origin: 6.5px 6.5px;
  transform-origin: 6.5px 6.5px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 0px none rgb(0, 0, 0);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  padding: 0px;
} /*#INPUT_18*/

#SPAN_19 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  cursor: pointer;
  display: block;
  height: 20px;
  left: 0px;
  min-height: auto;
  min-width: 20px;
  position: relative;
  right: 0px;
  text-align: center;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 20px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 10px 10px;
  transform-origin: 10px 10px;
  caret-color: rgb(49, 57, 67);
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 1px solid rgb(0, 123, 255);
  border-radius: 50% 50% 50% 50%;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  transition: all 0.2s ease 0s;
} /*#SPAN_19*/

#SPAN_19:before {
  bottom: 4px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  content: '"' '"';
  cursor: pointer;
  display: block;
  height: 10px;
  left: 9px;
  min-height: 10px;
  min-width: 10px;
  pointer-events: all;
  position: absolute;
  right: 4px;
  text-align: center;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 9px;
  width: 10px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 5px 5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transform-origin: 5px 5px;
  caret-color: rgb(49, 57, 67);
  background: rgb(0, 123, 255) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 0px none rgb(49, 57, 67);
  border-radius: 50% 50% 50% 50%;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: -5px 0px 0px -5px;
  outline: rgb(49, 57, 67) none 0px;
  transition: all 0.2s ease 0s;
} /*#SPAN_19:before*/

#SPAN_20 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  cursor: pointer;
  display: block;
  height: 21px;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 37.0938px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 18.5469px 10.5px;
  transform-origin: 18.5469px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 14px / 21.7px "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 0px 0px 10.78px;
} /*#SPAN_20*/

#DIV_21 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 21px;
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 20px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 10px 10.5px;
  transform-origin: 10px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_21*/

#DIV_22 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 21px;
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 77.3125px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 38.6562px 10.5px;
  transform-origin: 38.6562px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_22*/

#LABEL_23 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  cursor: pointer;
  display: flex;
  height: 21px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 57.3125px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 28.6562px 10.5px;
  transform-origin: 28.6562px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#LABEL_23*/

#INPUT_24 {
  bottom: 8px;
  cursor: default;
  display: block;
  height: 13px;
  left: 0px;
  min-height: 13px;
  min-width: 13px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 44.3125px;
  text-size-adjust: 100%;
  top: 0px;
  width: 13px;
  perspective-origin: 6.5px 6.5px;
  transform-origin: 6.5px 6.5px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 0px none rgb(0, 0, 0);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  padding: 0px;
} /*#INPUT_24*/

#SPAN_25 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  cursor: pointer;
  display: block;
  height: 20px;
  left: 0px;
  min-height: auto;
  min-width: 20px;
  position: relative;
  right: 0px;
  text-align: center;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 20px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 10px 10px;
  transform-origin: 10px 10px;
  caret-color: rgb(49, 57, 67);
  background: rgb(255, 255, 255) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 1px solid rgb(224, 230, 237);
  border-radius: 50% 50% 50% 50%;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  transition: all 0.2s ease 0s;
} /*#SPAN_25*/

#SPAN_25:before {
  bottom: 4px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  content: '"' '"';
  cursor: pointer;
  display: block;
  height: 10px;
  left: 9px;
  min-height: 10px;
  min-width: 10px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 4px;
  text-align: center;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 9px;
  width: 10px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 5px 5px;
  transform: matrix(0.5, 0, 0, 0.5, 0, 0);
  transform-origin: 5px 5px;
  caret-color: rgb(49, 57, 67);
  background: rgb(0, 123, 255) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 0px none rgb(49, 57, 67);
  border-radius: 50% 50% 50% 50%;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: -5px 0px 0px -5px;
  outline: rgb(49, 57, 67) none 0px;
  transition: all 0.2s ease 0s;
} /*#SPAN_25:before*/

#SPAN_26 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  cursor: pointer;
  display: block;
  height: 21px;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 37.3125px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 18.6562px 10.5px;
  transform-origin: 18.6562px 10.5px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 14px / 21.7px "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 0px 0px 10.78px;
} /*#SPAN_26*/

#DIV_27 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 114.656px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  top: 0px;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 57.3281px;
  transform-origin: 331.484px 57.3281px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px 0px 12.8px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_27*/

#DIV_28 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 114.656px;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 662.969px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 331.484px 57.3281px;
  transform-origin: 331.484px 57.3281px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_28*/

#INPUT_33 {
  height: 53.2656px;
  text-size-adjust: 100%;
  width: 492.219px;
  perspective-origin: 246.109px 26.625px;
  transform-origin: 246.109px 26.625px;
  border: 1px solid rgb(224, 230, 237);
  border-radius: 4px 4px 4px 4px;
  font: normal normal 400 normal 14px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  padding: 0px 0px 0px 28.32px;
  transition: all 0.2s ease 0s;
} /*#INPUT_33*/

#DIV_34 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: 41.5938px;
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 170.734px;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 85.3594px 20.7969px;
  transform-origin: 85.3594px 20.7969px;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_34*/

#A_35 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  display: block;
  height: 41.5938px;
  left: 0px;
  position: relative;
  right: 0px;
  text-align: center;
  text-decoration: none solid rgb(0, 123, 255);
  text-size-adjust: 100%;
  top: 0px;
  vertical-align: top;
  width: 150.734px;
  column-rule-color: rgb(0, 123, 255);
  perspective-origin: 75.3594px 20.7969px;
  transform-origin: 75.3594px 20.7969px;
  background: rgba(2, 17, 34, 0.1) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px 4px 4px 4px;
  font: normal normal 500 normal 16px / 40.768px "Avenir Next",
    "Avenir Next Cyr", sans-serif;
  outline: rgb(0, 123, 255) none 0px;
  padding: 0px 3.2px;
  transition: all 0.2s ease 0s;
} /*#A_35*/

#A_35:hover {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(0, 123, 255);
  display: block;
  height: 41.5938px;
  left: 0px;
  position: relative;
  right: 0px;
  text-align: center;
  text-decoration: none solid rgb(0, 123, 255);
  text-size-adjust: 100%;
  top: 0px;
  vertical-align: top;
  width: 150.734px;
  column-rule-color: rgb(0, 123, 255);
  perspective-origin: 75.3594px 20.7969px;
  transform-origin: 75.3594px 20.7969px;
  background: rgba(78, 131, 189, 0.1) none repeat scroll 0% 0% / auto
    padding-box border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px 4px 4px 4px;
  font: normal normal 500 normal 16px / 40.768px "Avenir Next",
    "Avenir Next Cyr", sans-serif;
  outline: rgb(0, 123, 255) none 0px;
  padding: 0px 3.2px;
  transition: all 0.2s ease 0s;
}

#DIV_36 {
  bottom: 0px;
  box-sizing: border-box;
  color: rgb(5, 52, 90);
  height: 15px;
  left: 0px;
  position: relative;
  right: 0px;
  text-decoration: none solid rgb(118, 118, 118);
  text-size-adjust: 100%;
  top: 0px;
  width: 660.734px;
  column-rule-color: rgb(118, 118, 118);
  perspective-origin: 330.359px 7.5px;
  transform-origin: 330.359px 7.5px;
  caret-color: rgb(118, 118, 118);
  border: 0px none rgb(118, 118, 118);
  font: normal normal 400 normal 12px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 14.08px 0px 0px 2.24px;
  outline: rgb(118, 118, 118) none 0px;
} /*#DIV_36*/

#DIV_37,
#DIV_44 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  display: block;
  height: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_37, #DIV_44*/

#FORM_38,
#FORM_55 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px;
  outline: rgb(49, 57, 67) none 0px;
} /*#FORM_38, #FORM_55*/

#DIV_39,
#DIV_56 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: auto;
  position: relative;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_39, #DIV_56*/

#LABEL_40,
#LABEL_45,
#LABEL_57 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  display: block;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 100%;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 600 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px 0px 12.32px;
  outline: rgb(49, 57, 67) none 0px;
} /*#LABEL_40, #LABEL_45, #LABEL_57*/

#BUTTON_41,
#BUTTON_58 {
  background-position: 0px 0px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  height: 41.6px;
  position: relative;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  vertical-align: top;
  width: auto;
  column-rule-color: rgb(255, 255, 255);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(255, 255, 255);
  background: rgb(0, 123, 255) none repeat scroll 0px 0px / auto padding-box
    border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px 4px 4px 4px;
  font: normal normal 500 normal 16px / 40.768px "Avenir Next",
    "Avenir Next Cyr", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  padding: 0px 80px;
  transition: all 0.2s ease 0s;
} /*#BUTTON_41, #BUTTON_58*/

#SPAN_42,
#SPAN_59 {
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  cursor: pointer;
  text-align: center;
  text-decoration: none solid rgb(255, 255, 255);
  text-size-adjust: 100%;
  column-rule-color: rgb(255, 255, 255);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(255, 255, 255);
  border: 0px none rgb(255, 255, 255);
  font: normal normal 500 normal 16px / 40.768px "Avenir Next",
    "Avenir Next Cyr", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
} /*#SPAN_42, #SPAN_59*/

#DIV_43 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  display: block;
  height: auto;
  position: relative;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px 0px 12.8px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_43*/

#DIV_46 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: auto;
  position: relative;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 12.32px 0px 0px;
  outline: rgb(49, 57, 67) none 0px;
  transition: all 0.2s ease 0s;
} /*#DIV_46*/

#DIV_47 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  display: flex;
  height: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(49, 57, 67);
  align-items: center;
  justify-content: center;
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex: 0 0 auto;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 0px -10px;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_47*/

#DIV_48 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: auto;
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 75%;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_48*/

#INPUT_49 {
  height: 53.28px;
  text-size-adjust: 100%;
  width: 100%;
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  border: 1px solid rgb(224, 230, 237);
  border-radius: 4px 4px 4px 4px;
  font: normal normal 400 normal 14px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  padding: 0px 0px 0px 28.32px;
  transition: all 0.2s ease 0s;
} /*#INPUT_49*/

#DIV_50 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: auto;
  max-width: 100%;
  min-height: auto;
  min-width: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: 25%;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  flex-flow: column nowrap;
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
  padding: 0px 10px;
} /*#DIV_50*/

#A_51 {
  box-sizing: border-box;
  color: rgb(0, 123, 255);
  display: block;
  height: 41.6px;
  position: relative;
  text-align: center;
  text-decoration: none solid rgb(0, 123, 255);
  text-size-adjust: 100%;
  vertical-align: top;
  width: 100%;
  column-rule-color: rgb(0, 123, 255);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(0, 123, 255);
  background: rgba(0, 123, 255, 0.1) none repeat scroll 0% 0% / auto padding-box
    border-box;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 4px 4px 4px 4px;
  font: normal normal 500 normal 16px / 40.768px "Avenir Next",
    "Avenir Next Cyr", sans-serif;
  outline: rgb(0, 123, 255) none 0px;
  padding: 0px 3.2px;
  transition: all 0.2s ease 0s;
} /*#A_51*/

#DIV_52 {
  box-sizing: border-box;
  color: rgb(118, 118, 118);
  height: auto;
  position: relative;
  text-decoration: none solid rgb(118, 118, 118);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(118, 118, 118);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(118, 118, 118);
  border: 0px none rgb(118, 118, 118);
  font: normal normal 400 normal 12px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  margin: 14.08px 0px 0px 2.24px;
  outline: rgb(118, 118, 118) none 0px;
} /*#DIV_52*/

#BR_53 {
  box-sizing: border-box;
  color: rgb(118, 118, 118);
  text-decoration: none solid rgb(118, 118, 118);
  text-size-adjust: 100%;
  column-rule-color: rgb(118, 118, 118);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(118, 118, 118);
  border: 0px none rgb(118, 118, 118);
  font: normal normal 400 normal 12px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(118, 118, 118) none 0px;
} /*#BR_53*/

#DIV_54 {
  box-sizing: border-box;
  color: rgb(49, 57, 67);
  height: auto;
  text-decoration: none solid rgb(49, 57, 67);
  text-size-adjust: 100%;
  width: auto;
  column-rule-color: rgb(49, 57, 67);
  perspective-origin: 50% 50%;
  transform-origin: 50% 50%;
  caret-color: rgb(49, 57, 67);
  border: 0px none rgb(49, 57, 67);
  font: normal normal 400 normal 16px / normal "Avenir Next", "Avenir Next Cyr",
    sans-serif;
  outline: rgb(49, 57, 67) none 0px;
} /*#DIV_54*/
</style>


<style id="STYLE_12">
.buy-DXC-container .crowdsale-address-container {
  display: none;
}
.buy-DXC-container .generate-address-container {
  display: block;
}

.buy-DXC-container--enabled .crowdsale-address-container {
  display: block;
}
.buy-DXC-container--enabled .generate-address-container {
  display: none;
}

.buy-DXC-container.hidden {
  display: none;
}
</style>