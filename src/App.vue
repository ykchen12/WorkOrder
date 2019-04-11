<template>
  <div id="ykApp">
    <!-- 左侧导航栏开始 -->
    <div class="ykMenu">
      <!-- 标题 -->
      <div class="ykTitle">工单系统</div>
      <div class="ykLay">
        <!-- 个人头像 -->
        <div class="ykAvatar"></div>
        <!-- 姓名 -->
        <div class="ykName">
          <b-button class="ykGold" disabled variant="outline-secondary">
            <i class="fa fa-address-card-o"></i>&nbsp; Admin
          </b-button>
        </div>

        <!-- 姓名结束 -->
      </div>
      <!-- 头像部分结束 -->
      <!-- 菜单栏 -->
      <div class="list-group">
        <router-link to class="ykLi list-group-item" @click.prevent.native="changeClass">
          <i class="fa fa-home fa-fw" aria-hidden="true"></i>
          &nbsp; 我的工单
          <i :class="lefttoright" aria-hidden="true"></i>
        </router-link>
        <!-- 子菜单 -->
        <div class="list-group" v-show="ykShow">
          <router-link to class="ykLow ykLi list-group-item" @click.prevent.native>
            <i class="fa fa-fw" aria-hidden="true"></i>
            <i class="fa fa-ellipsis-v fa-fw" aria-hidden="true"></i>
            &nbsp; 我提交的工单
          </router-link>
          <router-link to class="ykLow ykLi list-group-item" @click.prevent.native>
            <i class="fa fa-fw" aria-hidden="true"></i>
            <i class="fa fa-ellipsis-v fa-fw" aria-hidden="true"></i>
            &nbsp; 待审核的工单
          </router-link>
        </div>

        <router-link to class="ykLi list-group-item">
          <i class="fa fa-plus fa-fw" aria-hidden="true"></i>
          &nbsp; 新建工单
          <i :class="lefttoright" aria-hidden="true"></i>
        </router-link>
        <router-link to class="ykLi list-group-item">
          <i class="fa fa-cogs fa-fw" aria-hidden="true"></i>
          &nbsp; 工单设置
        </router-link>
      </div>

      <!-- 底部菜单 -->
      <div class="ykFoot">
        <i class="fa fa-cog fa-spin fa-2x fa-fw" aria-hidden="true"></i>
        <i class="fa fa-2x fa-fw" aria-hidden="true"></i>
        <i class="fa fa-sign-out fa-2x fa-fw" aria-hidden="true"></i>
      </div>
    </div>
    <!-- 左侧导航栏结束 -->

    <!-- 右边展示栏 -->
    <div class="ykShow">
      <div>11111111111123</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ykShow: false,
      username: "ykchen2",
      lefttoright: "ykFaRight fa fa-angle-left"
    };
  },
  methods: {
    changeClass() {
      if (this.ykShow == false) {
        this.ykShow = !this.ykShow;
        this.lefttoright = "ykFaRight fa fa-angle-down";
      } else {
        this.ykShow = false;
        this.lefttoright = "ykFaRight fa fa-angle-left";
      }
    }
  }
};
</script>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
}

#ykApp {
  background-color: #f3f3f4;
}

.ykMenu {
  border: 1px solid #4d535f;
  background-color: #2a3f54;
  width: 15%;
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  height: auto;
}

.ykShow {
  background-color: #f3f3f4;
  position: absolute;
  top: 0;
  left: 15%;
  min-height: 100%;
  height: auto;
  width: 85%;
  /* display: inline-block; */
}

.ykLay {
  position: relative;
}

.ykLi {
  background-color: #2a3f54;
  border: 0;
}

a {
  text-decoration: none;
  color: #e7e7e7;
}

a:link {
  text-decoration: none;
}

a:hover {
  color: gold;
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

.ykTitle {
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: whitesmoke;
  text-align: center;
  line-height: 50px;
  border: 1px solid black;
}

.ykName {
  /* font-size: 18px; */
  color: gold;
  /* font-weight: bold; */
  text-align: center;
  border: 1px solid #2a3f54;
  display: inline-block;
  position: absolute;
  top: 30%;
  right: 10%;
}

.ykAvatar {
  border: 1px solid white;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: inline-block;
  margin: 5% auto;
}

.ykLi {
  height: 3%;
}

.ykfa {
  width: 26px;
  opacity: 0.99;
  display: inline-block;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
}

.ykfa-home:before {
  width: 26px;
  content: "\f015";
}

.ykFoot {
  position: absolute;
  bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 5%;
  text-align: center;
  color: white;
}

.ykFaRight {
  position: absolute;
  right: 10%;
}

.ykLow {
  background-color: darkgrey;
}

.ykGold {
  color: gold;
}
</style>