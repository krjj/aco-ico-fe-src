<template>
<section class="settings">

    <div class="settings__header">
        <h2>Settings</h2>

        <ul class="settings__tabs">
            <li class="settings__tabs-item active" data-tab="1">User profile</li>
        </ul>
    </div>

    <div class="settings__content">

        <div id="tab-1" class="settings__content-item settings__profile active">

            <form class="form settings-form" v-on:submit.prevent>

                <div class="form__row">

                    <div class="form__col-xl">
                        <label class="form__label">
                            User ID
                        </label>
                        <div class="input-wrap">
                            <input type="text" style="background-color: #0000000a;" v-model="username" readonly>
                        </div>
                    </div>

                    <div class="form__col-lg">
                        <label class="form__label">
                            Email
                        </label>
                        <div class="input-wrap">
                            <input type="text" style="background-color: #0000000a;" v-model="email" readonly>
                        </div>
                    </div>

                    <div class="form__col-xs">

                    </div>

                </div>

                <div class="form__row">

                    <div class="form__col-xl">
                        <label class="form__label">
                            First Name
                        </label>
                        <div class="input-wrap">
                            <input type="text" style="background-color: #0000000a;" v-model="firstname" readonly>
                        </div>
                    </div>

                    <div class="form__col-lg">
                        <label class="form__label">
                            Last Name
                        </label>
                        <div class="input-wrap">
                            <input type="text" style="background-color: #0000000a;" v-model="lastname" readonly>
                        </div>
                    </div>

                    <div class="form__col-xs">

                    </div>

                </div>

                <div class="form__row">

                    <div class="form__col-xl">
                        <label class="form__label">Date of birth</label>
                        <div class="form__row">
                            <div class="form__col-xl">
                                <select class="select-style" v-model="dobm">
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option selected="" value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                            </div>
                            <div class="form__col-sm">
                                <div class="custom-select">
                                    <select class="select-style" v-model="dobd">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="3">8</option>
                                        <option value="8">3</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option selected="" value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form__col-sm">

                                <select class="select-style" v-model="doby">
                                    <option value=1900>1900</option>
                                    <option value=1901>1901</option>
                                    <option value=1902>1902</option>
                                    <option value=1903>1903</option>
                                    <option value=1904>1904</option>
                                    <option value=1905>1905</option>
                                    <option value=1906>1906</option>
                                    <option value=1907>1907</option>
                                    <option value=1908>1908</option>
                                    <option value=1909>1909</option>
                                    <option value=1910>1910</option>
                                    <option value=1911>1911</option>
                                    <option value=1912>1912</option>
                                    <option value=1913>1913</option>
                                    <option value=1914>1914</option>
                                    <option value=1915>1915</option>
                                    <option value=1916>1916</option>
                                    <option value=1917>1917</option>
                                    <option value=1918>1918</option>
                                    <option value=1919>1919</option>
                                    <option value=1920>1920</option>
                                    <option value=1921>1921</option>
                                    <option value=1922>1922</option>
                                    <option value=1923>1923</option>
                                    <option value=1924>1924</option>
                                    <option value=1925>1925</option>
                                    <option value=1926>1926</option>
                                    <option value=1927>1927</option>
                                    <option value=1928>1928</option>
                                    <option value=1929>1929</option>
                                    <option value=1930>1930</option>
                                    <option value=1931>1931</option>
                                    <option value=1932>1932</option>
                                    <option value=1933>1933</option>
                                    <option value=1934>1934</option>
                                    <option value=1935>1935</option>
                                    <option value=1936>1936</option>
                                    <option value=1937>1937</option>
                                    <option value=1938>1938</option>
                                    <option value=1939>1939</option>
                                    <option value=1940>1940</option>
                                    <option value=1941>1941</option>
                                    <option value=1942>1942</option>
                                    <option value=1943>1943</option>
                                    <option value=1944>1944</option>
                                    <option value=1945>1945</option>
                                    <option value=1946>1946</option>
                                    <option value=1947>1947</option>
                                    <option value=1948>1948</option>
                                    <option value=1949>1949</option>
                                    <option value=1950>1950</option>
                                    <option value=1951>1951</option>
                                    <option value=1952>1952</option>
                                    <option value=1953>1953</option>
                                    <option value=1954>1954</option>
                                    <option value=1955>1955</option>
                                    <option value=1956>1956</option>
                                    <option value=1957>1957</option>
                                    <option value=1958>1958</option>
                                    <option value=1959>1959</option>
                                    <option value=1960>1960</option>
                                    <option value=1961>1961</option>
                                    <option value=1962>1962</option>
                                    <option value=1963>1963</option>
                                    <option value=1964>1964</option>
                                    <option value=1965>1965</option>
                                    <option value=1966>1966</option>
                                    <option value=1967>1967</option>
                                    <option value=1968>1968</option>
                                    <option value=1969>1969</option>
                                    <option value=1970>1970</option>
                                    <option value=1971>1971</option>
                                    <option value=1972>1972</option>
                                    <option value=1973>1973</option>
                                    <option value=1974>1974</option>
                                    <option value=1975>1975</option>
                                    <option value=1976>1976</option>
                                    <option value=1977>1977</option>
                                    <option value=1978>1978</option>
                                    <option value=1979>1979</option>
                                    <option value=1980>1980</option>
                                    <option value=1981>1981</option>
                                    <option value=1982>1982</option>
                                    <option value=1983>1983</option>
                                    <option value=1984>1984</option>
                                    <option value=1985>1985</option>
                                    <option value=1986>1986</option>
                                    <option value=1987>1987</option>
                                    <option value=1988>1988</option>
                                    <option value=1989>1989</option>
                                    <option value=1990>1990</option>
                                    <option value=1991>1991</option>
                                    <option value=1992>1992</option>
                                    <option value=1993>1993</option>
                                    <option value=1994>1994</option>
                                    <option value=1995>1995</option>
                                    <option value=1996>1996</option>
                                    <option value=1997>1997</option>
                                    <option value=1998>1998</option>
                                    <option value=1999>1999</option>
                                    <option value=2000>2000</option>
                                    <option value=2001>2001</option>
                                    <option value=2002>2002</option>
                                    <option value=2003>2003</option>
                                    <option value=2004>2004</option>
                                    <option value=2005>2005</option>
                                    <option value=2006>2006</option>
                                    <option value=2007>2007</option>
                                    <option value=2008>2008</option>
                                    <option value=2009>2009</option>
                                    <option value=2010>2010</option>
                                    <option value=2011>2011</option>
                                    <option value=2012>2012</option>
                                    <option value=2013>2013</option>
                                    <option value=2014>2014</option>
                                    <option value=2015>2015</option>
                                    <option value=2016>2016</option>
                                    <option value=2017>2017</option>
                                    <option value=2018>2018</option>
                                </select>

                            </div>
                        </div>
                    </div>

                    <div class="form__col-lg">
                        <label class="form__label">Address</label>
                        <div class="input-wrap">
                            <input type="text" v-model="address">
                        </div>
                    </div>

                    <div class="form__col-xs">
                        <label class="form__label">Language</label>

                        <div class="custom-select">
                            <button class="custom-select__option custom-select__option--value" type="button">English</button>
                        </div>
                    </div>

                </div>

                <div class="form__row">

                    <div class="form__col-xl">
                        <label class="form__label">Country</label>
                        <div class="input-wrap">
                            <input type="text" v-model="country">
                        </div>
                    </div>

                    <div class="form__col-lg">
                        <label class="form__label">City</label>
                        <div class="input-wrap">
                            <input type="text" v-model="city">
                        </div>
                    </div>

                    <div class="form__col-xs">
                        <label class="form__label">Postcode</label>
                        <div class="input-wrap">
                            <input type="text" v-model="postcode">
                        </div>
                    </div>

                </div>

                <button class="btn btn--green" @click="updateProfile()">Save settings</button>
                <button class="btn btn--blue" style="margin-left:20px;cursor: not-allowed;opacity: 0.6;filter: grayscale(100%);">Change password</button>
            </form>

        </div>
    </div>

</section>

</template>

<script>
import axios from "axios";
export default {
  name: "Account",
  props: {
    msg: String
  },
  data() {
    return {
      username: this.$store.state.userdata.userid,
      firstname: this.$store.state.userdata.firstname,
      lastname: this.$store.state.userdata.lastname,
      email: this.$store.state.userdata.email,
      dobd: this.$store.state.userdata.bio.dob.dd,
      dobm: this.$store.state.userdata.bio.dob.mm,
      doby: this.$store.state.userdata.bio.dob.yyyy,
      address: this.$store.state.userdata.bio.address.line,
      country: this.$store.state.userdata.bio.address.country,
      city: this.$store.state.userdata.bio.address.city,
      postcode: this.$store.state.userdata.bio.address.postalcode
    };
  },
  mounted() {},
  methods: {
    updateProfile() {
      const baseUrl = process.env.VUE_APP_API_URL;
      axios.defaults.headers.common['Authorization'] = 'bearer ' + this.$store.state.auth.jwt
      axios
        .post(baseUrl + "/profile", {
          email: this.$store.state.userdata.email,
          dob_dd: this.dobd,
          dob_mm: this.dobm,
          dob_yyyy: this.doby,
          address_line: this.address,
          address_city: this.city,
          address_country: this.country,
          address_postalcode: this.postcode
        })
        .then(r => {
          this.$noty.success("Profile updated");
          this.$store.dispatch("UPDATEPROFILE", {
            dob_dd: this.dobd,
            dob_mm: this.dobm,
            dob_yyyy: this.doby,
            address_line: this.address,
            address_city: this.city,
            address_country: this.country,
            address_postalcode: this.postcode
          });
        })
        .catch(e => {
          this.$noty.error("Error while updating profile - " + e.response.data.message);
        });
    }
  }
};
</script>

<style scoped>
.select-style {
  padding: 5px 8px;
  width: 100%;
  height: 50px;
  border: 1px solid #dee1e2;
  background-color: white;
  border-radius: 5px;
  display: block;
}
</style>

