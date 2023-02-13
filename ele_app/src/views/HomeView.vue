<template>
  <div class="page home">
    <top>
      <template #left>
        <span v-if="foot_active == 0">
          <van-icon name="search" size="20px" />
        </span>
        <span v-else @click="$router.go(-1)">
          <van-icon name="arrow-left" size="20px" />
        </span>
      </template>
      <template #center>
        <span>{{ footer[foot_active] }}</span>
      </template>
      <template #right>
        <span v-if="foot_active == 0" @click="goLogin">登录 | 注册</span>
      </template>
    </top>
    <div>
      <keep-alive> <router-view /></keep-alive>
    </div>
    <div class="footerbar">
      <van-tabbar v-model="foot_active">
        <van-tabbar-item
          icon="home-o"
          v-for="(item, index) in iconList"
          :key="index"
          @click="changePage(index)"
        >
          <span>{{ item.title }}</span>
          <template #icon>
            <img
              :src="foot_active == index ? item.active : item.inactive"
              alt=""
            />
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    let homeinfo = localStorage.getItem("homeinfo");
    homeinfo = JSON.parse(homeinfo);
    if (this.$route.path != `/home/${homeinfo.geohash}`) {
      this.$router.push({
        path: "/home/" + homeinfo.geohash,
      });
    }
    this.geohash = homeinfo.geohash;
    this.cityname = homeinfo.name;
    this.setFooter();
    this.footer[0] = homeinfo.name;
  },
  methods: {
    changePage(index) {
      this.foot_active = index;
      switch (index) {
        case 0:
          this.$router
            .push({
              path: "/index/" + this.geohash,
            })
            .catch((err) => err);
          break;
        case 1:
          this.$router
            .push({
              path: "/search",
            })
            .catch((err) => err);
          break;
        case 2:
          this.$router
            .push({
              path: "/shopping",
            })
            .catch((err) => err);
          break;
        case 3:
          this.$router
            .push({
              path: "/mine",
            })
            .catch((err) => err);
          break;
      }
    },
    goLogin() {
      this.$router.push({
        path: "/login",
      });
    },
    setFooter() {
      switch (this.$route.path) {
        case "/home/" + this.geohash:
          this.foot_active = 0;
          break;
        case "/search":
          this.foot_active = 1;
          break;
        case "/shopping":
          this.foot_active = 2;
          break;
        case "/mine":
          this.foot_active = 3;
          break;
      }
    },
  },
  watch: {
    "$route.path": function () {
      this.setFooter();
    },
  },
  data() {
    return {
      cityname: "",
      geohash: "",
      footer: ["", "搜索", "订单列表", "我的"],
      foot_active: 0,
      iconList: [
        {
          title: "外卖",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA41JREFUWEfFVj2PHEUQfa/5sIGASyD0h0RgC4Ho7d5LjACDExASZ2EJJBDGASCEZExARGDEH7CRkAlITAQ2BJcACYEPIaLuaRtIkLB0FxAgEl8AduDpQr2eWWbHPR9LcpOstru66tXrqtdF7PDHHY6PpQEURfF2jPEkyT0A7hGRkmQk+QdJJyLvTyaTrbGJjQbgvf8ewNPAMGiSf8YYj1lrfxwCMggghHAmxvjumMCZYL+TPNLHSC8A59wmyb1DWQzs3wTwqjHmQs6uE4D3/hqA+3uc/wPgr2r/TgAPALg7/RcRkAuuRSn1vNb627a/LADn3K8kH84FV0qta62P5vacc4+QvCgiB1oAkvkNpdRBrfVm8+xtAFKVi8i5TIBtY8zKmOsoimJvjPEKyQUGReSStfZwLwDnXGor1TQSkd+stQfGBK9tQginYoxnMmdOGGPO1+sLDOSyF5Forb1jmeDe+0sAnujonA1jzFNZAN77vwHcW2+mYooxHlpdXf1pDADn3DmSbwBIRZn7tpRSa1rry10ApHXqujFmDqgLRFEUx2KMX5DMBk6JiMiF6XT6cm8XeO9nAOo2Ukp9prV+sytwVfVJIR/sshGRq0qpZ7rEaF4DIYTPy7J8LTmqW8gY06cTXwN4sSfwNsm3ugTotisIIXwSY3yn6bALgPd+HrwtOulxSm08nU5PjqmbJgOjATjnbpDc1WrVxNwGyeM5ukMIK9WbspVtw1RIIvJVy+mj1tpf2pk0Gahq5iqA17teP+fcGsmkCfsAXFNK7ddaJ6lffFrrImwE/MEY82SOykpo1gB8OnTPGb9zMVoosgy10RizlAjlwHrvPwRwurH3njHmbI6BjUrB5rYkP5pMJs3DY2prwSbdf1mW6WlPb8PHxphTWSGq+vrnphKSvEnyoWXGrI4rewzAitY6yfR/CbaNnXPrJF9orQ9ONkvTUh3omgeuk9zd6oi0loonO9k0bRPlqeKbmt8FMAsghPBcWZbfZIaKJNVJWi9qrT/IsJe64jjJ9Ju+88aYE33s9EntSyLyZQbE3J+I3Opl8j4Ad+UCichRa+36UgzUxt77QRAj7n7ecjnbwbE8jVci8h2Ag83uqDLvjC8i25U6dmY/8zEig5mJc+5xAK+QfBZA36h+BcDZanidXdH/qoG+QyGEpOn7Yoyz3gawqZRK0+7lWuOHAtf7oxkY63BZux0H8C/+GpIwewZtIgAAAABJRU5ErkJggg==",
          active:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABOVJREFUWEfFVltvVFUUXvvMmTPT6dBpoQxtvLQEmoAGJD7woAZRjERFbWkTrQq0iQp1kMuDTz5o/APFhBaqJoAaK1iaGi+8lKRtjE8+UEATQxuGEAMz00w7086c2957md3mDGdmzplLX5i3M3tdvvWttb69CTzkH3nI+aFqAC+PZPpCsnTMr5DHFa+nJpk0mcE4Zxz+Mzj+dTtNP7l9tOFOpYVVDKBjdGl87Rrfi34fyfnoBkImxfJyMUSYyxqx+6re9c/h8B/lgJQF8MZlrX99nee4PbEVdGmRg6HxohwLmgEp1QSd85mkIb9UipGSAPaPZqIb1vpaJKm4DkoR0vP51VtWFgDxzThQzWTvTUfCF53YcAXQ/Wt2YW2dEnJyYgwhkTSzGdVMiHMJJFmRpfU1Xo8ivuNLGqjmA3AcADOU7btxJPx7YTxHAPtHMzebG31PFhqbJofYvD72c9eaDidg24aWtj0S5JeyOt1COeaZZCjTUsi2Rvuao/aDIgBiyjc1+gYLaU+mjdTwvkB9uaES5xtPz7esU+i0Ikk5BjOUQ4ayiZmjTS+UBNBzRWO1tXJe12NJ49+R9sCWSpJbNtsHEyeCitRvfeuMQ5qKtmDvrUjzeev/PAZE9W1h36A9UVbl/NxexVNN8qeHEhOKR9olwQOdEQxkGQMEnJyJNO92BPDOL2qmIeQNWIecA/x913h26kDgz0oA7PxmbpBw8oFHArnQfqUF9A4hnvZbkfA1RwDvjxvoUx6wn1qk6vev+XOA3EA8c2Gha71PGU5mNZkVDJ/w4Rwhy+nF60ea3i65BZEpujy6onJN5XA3oX09frDuQ7fEYuofDeJ4vd8btu++3V5nfDZpynvcxCg3A3t/SF94rLHmoKFzoCYCIsBwp99VJ/Z8mx5ZF/B2eggBMWD302oeToPzlGniYTcBKmrB7nPzp5vraiL2KG4ARPJwrdIpbAXlQngMtiLJDJFpjA5OH2k6Vsnc5CqsBsDrw0taUJF9lHNILOnLyUWfDcTJeVM+5ER3a/98vawYxwnwO45rKAapJej/yY765hzdfuNw8EZhJYKBkF/ujC1qgIiiBbMqYI/b7bdpMNYuIQpNaEWEBWr6NkZPNiyIuHk97r6s5elnPKtNXT1Q/7wTlUJoZA+0M4pnyvW5beB+vi7bxCgPgEWtlVA1GB/rrq1KhJzAbh649zkB8pl1hggnZ442nSpiYM93C5PhgH+XPUh8Uf/iak8o51zJYBXarPRfjxKAEAf4cjbSdMJRiMRebw6R66IxGmVgCPUyOI3pZHM1zywnkG0D8R3IWf3Mx80T9vOiPd9+NjYWlOU388SkgpfNapgpaoEVZOdXCVWWJL89KOVc1U3sLTdwwkdQ7lXMVrvmuwF0VLptZ+Ov1krSb5KUfyxeNibns4yRS9f6Gj8tDCrWjSAeIgDtK2fk/K3Iht5S7LhK7VMD8bdqvNKPhSDswQzE5V1GjrVZhl6KxQ9UTkjH7EcbxqpiwDIuB0JcXeKOF3eB28++ck42ZZ/l4nnV4KVX/B5pqwggkppCdjkDw+Hqze06QAoJ6SlVvesQOiF9Yij+nE7ZuwThFUJIi3vJMA0ET5mGf8yS21XNQCmn1jP3WmUKrUDIDiBYTwCiyCFKqf9aJUlL6sBq93m1fmVnYLWBK/X7H0DSaz+GApiKAAAAAElFTkSuQmCC",
        },
        {
          title: "搜索",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAtVJREFUWEfVVz1oFEEUfm/WgDZqbRPFwkq5uRmLWEgEQewUAgqixF4wnVaiNhYWYmNlkTRBCyFVCiuDP5BkdtdgY5EisRGsFEVR7+6TOTbH3N7Mzm5SBLe5Y9+b933ve29m3jLt8sO7jE//F4HV1dV3QggNYIyZCQDZX+f5kiTJy1ardbWusrUUKIAn3KAecNfcAfBEa30zRqSSwMrKyqkkSd4Qba9UAD4LISba7fZmiEiQQJ7nj7rd7kxJ4n6cSPZDWAB+MfM5pdRrHwkvgSLztzH5GtjXhRAnpZRfy2u8BIwx8GXeAHDEFcArrfWZKAFjzEdmPuYDayJ9gOx1pdSsaxtRIE1T7AD8B4DnRDTLzL6abyiljgQJ+LZbrOkA/GbmZQA3tNYfrL8x5gEz3w4kclFrvbBlG1LAGPOHmcditfaBumuMMevMfDRAYE5rPR0iMGi+UL0BfNda768iGWnioTIMKRCqfwnshVJqKs/zmV6v9xDA3yRJpqSUizH5t+IopQa4gz9Zll0DMFeVmVVFa91f42YJ4JPWerx4PyS/T8kQgXsA7kQIDOS3BKxvcV5sKqUOl4mFYnkJWOcaJejLXwA9ZeZLALpENG07u6r7XTJBAlXN48ofyqyq+501A7X6Cpa2z09m3hfYPsHuT9PUKnGLmWVsCxPRY6XUjHcbpmm6RESnfUGYeb7dbl/Zsjmgx4loTw3gvguA8EGUZdl4r9fb8F1Etm51QSvujCH5R0pgX2RZtgjgfN2MGvrFL6Oiw+0Qsbdh8Jj7klJqsuzknQfSND0BYK3JTBC5qteEEJO1B5LiTLCd/awJiYAEFnxaSvne29xVuhVKLIfKUWNAWRJCXPBl7t2GFQfMPBFd5vpy2Cn4bnn6aayAuyDP84OdTue+EOIQgLPMfMC1A/hGRHbQWHAHjlhn1vowCQXJ87x/AUkpN2JAIfuOCGwX1F236wT+AaPvazBx7nv5AAAAAElFTkSuQmCC",
          active:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABGhJREFUWEfVl0uIW1UYx7/7mmReTTqWTNIuOiJFBLUMPnBESksFKUKxMLZKcZzSgdom4LjSlagbFy6KC6stRabU1kcZycYiFrFTbUt3Dt2Ik2JGrGNTJ5Ob3NznechJJpmTe89NUl0MntVwz/nO9/9+3yNnJFjnJa2zf/h/Cdj3tXltsE95PKJJWo8mQ0XH4Lm0BtHFFEwPFUyPfDc3GXulW7JdEWCOE3FtTFXXjhMCUFpGAT82wvCnbiOb4hPzRxKvdxLSVsCOs+bT25LaT9GIFDhnVgnYJgncX7Jd0C2v9t0hZKnoqmO/ZTYuhgkJFbB31j4+HJenGWr/YtHrRQS0Tr9l8QLYBiLEKiH63K/HEj+KRAgFsMgf2qJd5ZHzxqZBwLaC0bMzRdOFilMn0FglF+dMR3si/8bGkl+EUMDhSw6NRhQhNc+jUCnh0NT+oZuASSuaiofBwuRyLpPc1VHAeNb8ZXio50GRh3boV3HDbd0KmFYRARMz0fTQQjo1wx8IEHjtB48qShAMc87aDiNB4ldvXLYc447pfOlRmIkrSjPnawIgv5BO3h8qgLXb5k09Y6KiC3NuuMgxEbpRMNXMzSMDN5nt9pOF9/sV5a3GPZwAIJK079ax4WxjryXUV7913IE+ReMFsJwbOm6peJFT3uaxk3dzEUV+QCQAKD2zkElNCgUcvYyovNp1DDnrc3+1l22v8s3BwQ2hVQgAT536m8ryWmxlhMHBza5pSUMLgfQVRAkGsG0CjkWEfV6ourPfT2wY3/OZMd0fUT6glHpl2xu/NBG7KMLPvq24CBA3NBbSyabf5h+7zhkTWwa0M+2KjLXXVy/21mz2XzCpIsu1yP4q279fmxrayr778bOOXHZb54JQwO4Z/d3EYOTtdmh5/EwAgARLFQsQoYvXp+4bYbZ+/EwgSwG/hALYgZdn7fAeA4AGfnb2+XPl04aDD7iYYJDo5PWpTVl/9dfxY0C0dWqGCth/waIKVzy8ah5/GCU/fjYyVnz4KaWLuUyqRoutliLc+3nV7O9RekUO2lX/9o8KBxRFejOqyqO8ra/6a1sE4MNb6eS0UMDus6W5RF90h0jA7bJ9/sqh+MHGXsOpJsuPKDKofhuXUNC94Huh7SAaPW1t3RaDfCMNrICqDgLDRXD18JDUyWlDBKv8FQ8B8f1e+/EHUsA+PPNp8aIqSXvctcHRrjGEeyL09YNd/BixY0+eumupshy9Z88AtZbjpl7zCgp0LpdO7fTfKXwPPHyi+OiASub5cdpJDMNuYLFzoDDveZGdXT9ImDOW715N/qIbER6hYCDW74IxQmEeJHlyIZ34WRRE20cpI9Gn4hth6WBRW7jx2Ahez7AjN/qCKHJhG4ZhHv3kzvmIorwkS/XXMYvYxgRs9pMpWKzaJQne8b9+7pkAbzByfCUe63XecwjdjKj0rAQQ4/cpgC5RmiWynOUfHJ1qp6t/TMIuGfl4qTZS80dT+U6Owvb/k4B/65S3W3cB/wBkdXM/ta8ZlQAAAABJRU5ErkJggg==",
        },
        {
          title: "订单",
          active:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAA0RJREFUWEfNl89PE0EUx9/Mli2FiGisQOLVeDEhJtz16kkJJMYfMRASSIBESTzUv0DjSQ8cIB4wMcaLBogX4i/0LIqcMMANAhbSbrt0Z7sz88YMptLCdrttTWAvm+y8nfd53/djZwkc8UWO2D8cX4Cb7xyrKdrQ0hglZSE5V2Bb0ldEV0j4bbvgKWUhwqfvQ2d6/Ax9Nx94n1eNUaNidrKWBMGVr13W5ZBm3r+1POLqwmD8/EHjQwC9085y22nzQiXvzEFgOSxrZrkeZBgvWc9J+fjn0NmHxQ8PAfTPebIpRmkQAEqATFqA8g9+79Utm0FelAIyiYs/huKXAgEqyY8IYGckSFHeu0QF6xnnUAweYubbYLy1LoCgvBc2tvMcUs5+/gvPawbgHGHLwqezPY1jlWpDr3eOJ29EG8hUhNLGYvuaAdaTbHqm90R3GOcFm86J5KNmw0jUDaCrfWPHnZ2703KtKoDJ5PNmagzUDKCHjLOLe8UmlYKUI+YlwFIQBOMi7QiZigBcNg3STaF00oZKwa0ZJkFRqmRAj/lQ6MrftBnoe7krFMD117si1hApGYMcEXYc7wOg+lVucyYwxTim9DqJqIsxoAOUlo4ZR+LG4lD8XGAb+gEkc96bj3dbequqAZ8iTHl8YXm4vatqgM0sG5/vPzVaD4CeWynP+7I60nGlagBXSGUxmfjc1/IkDIRuwSgh9yKUxgr2WSHBlbI2gINO9ad2J5cPLLjid3T0aY+DAlUbgFYgm5dvpZRbeuMUE6tBShBDtcUITRSKMMMFeKhqB9jIuq++9rfeDiP/wUnIpIJdIfYeh1Lg6sts3jQM00MJnkBgXMKuh2NLw/Gn1QKYhCYs/td5aICuyW3LpPRkSQ4RmatIyVwPgqEIbWaEPLC5MEXRoSGUAn4A1USubfUw1Hkvdl6XAtUAcFSgWw59jkvhFJjY3jQN2l6N04KtIxFywv+UvKcMwLO1kfb7gYOo0+czWglGt5hdJurid5GQ7rXhtulAAL3YFUIFnec8KnAlglDlT8f7LaBerIx29B0MpuxPh1aiAUhvoSP0NNN51TnWDnXUlS5diwBqkQBMrYx0TPnZH99fs0rR/a/1I1fgD6NmGj+4zez5AAAAAElFTkSuQmCC",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAh5JREFUWEftl7FrFEEUxr9vXEQbtYuFrdjYzL3p9T+QYMDCRkgraMDi/AsUq1jYpTgbOyVYi2g/A8FKIa1oFWMlgrtPVrKwt7e3M7vZMxZue9/O+71v3jc7R5zwwxOuj38XIIRwCOAccDxIVT0k+VZEbra53eqA917J0c3ZF5HLTYiFKt77jySvrGI2VPWxc+5hfe02gJykWRHAnnPOxgA67VdVxLZnmUZVvzvnLhwLIMWZlQAYY7attVspACGEW6o6I3mmrh/sgDFm11q7nlK80njvH5GcjgIA4LWI3OgJsENycywAqOq7LMs+dEHkef6N5IGqXgNQOjaXsqQtCCHkAHrHMDEdSSn4RfJUs9OiKN5kWfZpmQOqelB2X/6e5/lVAJstcf0sIpdiMWwDeCkiGz1nYGEIAQQRcb0BjDHPrLV3RwB4LyLXewOoank6TkXkSQpEGUEA90iebeiHAaQUTdQMBlAAr4wxX48K7UfiuAZgWg1hLSHDAEi+mEwmtxO7/COrTsJGPOMAIYSfAE6Xi1QvG2O2rLXbQwCGzEB5hTrfOEJ/GGPmzvUuGJJrRVE8qBqpaeMOeO8XAPp0Xneu5b2/A9ABnATwheTFvl0n6p+KyP3YQbTwGU1cPCpT1XXn3G4nwFGEoi6UCSmf2P2wKqaqz51zd5qUSy//3vsdABvNRESGbG798vtPcg/ATERmbRaN/u8jug8NwX+A3/x4IjAWXVCcAAAAAElFTkSuQmCC",
        },
        {
          title: "我的",
          inactive:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAs1JREFUWEfFlrtrFUEUxs+ZGzERfLVapJIgojL3nErx0doZ8NGK2IhNKhGrWNhYWYiQQsRSFOKfYDRVMrOrCMbCIgHB2MUHJErufjJhb7i52ZuZvQlky51zvu+355yZWaZdfniX/WlbAHmeTxZFsSAiY/1+SG0A59wXIhph3pgKYJmZx0XkUR2YZICZmZkzxpj3zGy2MgDgVVVTIZIBnHOtmHmH6TsRuZACkQQQys7MI92CAKi7Fe0YZr7abDZfxyCSALz3qGNexn4WkRPbBsiy7DaApzGhCsBlVd0Xy4tWoNxql2NCVesiEtWPBnQDbNX3NkSICY+qRvWjAVmWXQHwqlO81+B1VgHAT1U9FKtcFCAIhCFsf1WKeWk6JSIXdwQgdQ5KyGUi+meMOd1sNhd2BCCIOOd+MfP+XoIAfhPRWVX9FDPtXE9qQUjI8/xJURR3qsSDuaoeyLJsGMBzIpoQkZcpIFEA7/1dAA+ZeSBmXhTFHDMPAVhR1aFtA3jvp4jo/BZl/6uqg+HL2+Z1BjDE9qxAzLw0usTMc53m4Vo2xtyrOBl/MPMiMy9Ya+fb65UAKeYAWqo64JybZOY6J+WSiBzuCTA7O3vWGDMd6x+AVVXdUxeg+4DaVIGE7bZ+BQM4p6rTzrklZj4YoEMLGo3G/a5TMZR+Mbyz1r7tuQ27j92KPm64/8t+Hw9xRVGEf4bBEuKZqt6KVXHTEHrvw3AMpyS2YwB8V9Uj5U5YgwDwRlVHvfffiOhop54xxlprP1TOgPd+hYj21gEoY7+KyLEAwcyj1trH3vtTRPSxQuuBiIz3Atj055MKEypBRNfCTOR5PtZqtW4y88mK/A2X1PoQlsfo+v5MNa6ak7Xedv22d8RVA4QA5xxqXLd9MQJ4oao3erXgOoCJfpSZ+Q+AeWZe7ZUf1huNxpi1dmnLk7AfgH5zordhv8KpebsO8B9Cjm4wjs54QwAAAABJRU5ErkJggg==",
          active:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABBRJREFUWEfFll1sFFUUx8/Mzu7slm27Wxo6C0aCiWkMil8kqIRqTF94oo1oIwZLqX0gW5P6YoxP+OCLTz4QEkIIIYqEWANGxRcDVkgMkqIIARLWuE0gTEO73Y+Znfs1c80t7jK7nWGmLEnv02Tuuef/u+fcc8+VYIWHtML60BLAjtPFU7akzPy4IznxqBtZNsDOn4ybqUS0V1Uii5qI2VC2CBiIWgaG/ed3dX2xHJjQAH0nqq891S2fX6UqslugjAggatd/zRlk+tzQ6s1hIUID7PkF2atijeJC5F7FAt6kNm/Q384Odb0eBiIUgAh7T3u8t9mhRW2oILJEx3Y43DGcty++m5oMgggFMHaO8FikIfLgcIBCFYEjPjzGzHz1+h/v92xsGaD/e3Nfb1o92OzIwBSqhPn6zxdM69Jura1lAFFqT3QlB9yOqO1AsYqX5L5mg5kD9wwEv7/XExjhQINmABHxooWB2Y7v5kzMYN7EcHG3Fug/0GDLieLOzeuS39bUihYBwh6UnRfFbAWBie3S9LCWajkFwsHoWcxjkQiImg8SZw4HvWwBInzqzxHtjccCINLQFo8OPCzsQsjhHOZNYlUQI4WK+vy/4+mZxwIgnGz/bqGcjCvtfg4NxCq3y9GtV0eSV4NE3fOBZ6Bm3Hd87kB3RywbkZcuEeI/v5Xu2HBgYX06SY8S6hy6NqadDAMSCLDtm8LHnW2RzxNRWfFy6Bbv7sQ3FFlKMMbRpWEt0TLAmycLU6k2pc9r18K5SWx8ZjAVFzuviYv/YQ+gsPWNgBBfnYz2PWwX/xTI9oWSfMMtzhxuYSp/0ryO2jBLqaQzic3k92XytXlPgDDiiNr2DwMp5aUj+ik1LjXclF7QCxUOtg3AORRz41raF+CVr8tb13bCBb+w1xaaxGZnBlPRMACiZZSN+02LA5Ry2QcX1JIIBJWbqPUKZlBBFEpI2nZ9dM2Fl4/pxZgidQqBxRQg+LShd3DQKea6+Jf7MPOrbxmKa/fJjkj92m0OpbjjS5jWW7AQmyupzwi77nZ8U1GkuPiuEn7kyoj2wbKroH+ykE8nouvdCwlzwGI2mIR59n7C4O70cM/axUr4HwIjfvryqDb4wlH9tlmFdY0g8ou3smv+8jwD/ZMFJEugiknxqhEvHs69Hxxup5jx3OVh7WkB0a7iwb/HtC83HJzdpMr8ijh47sGBf5bLZvZ7Arx6fDZYzSeuIhIWk94RZ2LTYX0CEdjLAZ5rNufAp3LZTL1J1Q+hoNfSpF6fYfLnZSPeC0aVA6HeHnwBhPmWr3Que9z1YWEoAzCs+/XuOzg/dms8s8czBc8e1ofUGBwKK+i2sx0wDAvywLnvQ1HikKc0PpH/KF30BHgU4VbXBHbDVgWC1q84wH/JcP8wO7nXsgAAAABJRU5ErkJggg==",
        },
      ],
    };
  },
};
</script>
<style lang="less" scoped>
.home {
  background: #f1f1f1;
}
</style>