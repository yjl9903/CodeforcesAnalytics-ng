<template>
  <div>
    <h2 class="logo" @click="current = []">
      <router-link to="/" style="display: inline-block; height: 100%;">
        Codeforces 统计</router-link
      >
    </h2>
    <a-menu
      v-model="current"
      mode="horizontal"
      :style="{ lineHeight: '64px', display: 'inline-block' }"
    >
      <a-menu-item key="user" @click="go('user')">
        <a-icon type="user" />成员
      </a-menu-item>
      <a-menu-item key="report" @click="go('report')"
        ><a-icon type="read" />报告</a-menu-item
      >
      <!-- <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"
          ><a-icon type="setting" />设置</span
        >
        <a-menu-item-group title="缓存">
          <a-menu-item key="setting:1">清空缓存</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="其他">
          <a-menu-item key="setting:3">帮助</a-menu-item>
          <a-menu-item key="setting:4">关于</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu> -->
    </a-menu>
    <div class="nav-search">
      <a-input-search
        v-model="text"
        placeholder="Handle"
        style="width: 200px"
        @search="onSearch"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  current: string[] = [];
  text = '';
  go(name: string) {
    if (this.$route.name !== name) {
      this.$router.push(name);
    }
  }
  onSearch() {
    this.$router.push({
      name: 'profile',
      query: {
        handle: this.text
      }
    });
    this.text = '';
  }
  created() {
    if (this.$route.name === 'user') {
      this.current = ['user'];
    }
  }
}
</script>

<style>
.ant-menu.ant-menu-root {
  height: 64px;
}
.logo {
  user-select: none;
  cursor: pointer;
  padding: 0px 10px;
  background: rgba(255, 255, 255, 0.2);
  float: left;
}
.logo > a {
  color: #000 !important;
  text-decoration: none;
}
.nav-search {
  float: right;
}
</style>
