<!--
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-12-23 09:34
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-08-30 13:04
 * @desc       : 
-->

<script setup lang="ts">
  import { bitable } from '@lark-base-open/js-sdk';
  import { getServerConfig } from '../config/global.ts';

  const textObj = ref();

  getServerConfig().then((res) => {
    textObj.value = res;
  });

  bitable.bridge.getLanguage().then((lang) => {
    if (lang === 'zh' || lang === 'zh-HK' || lang === 'zh-TW') {
      langData.value = 'zh';
    } else {
      langData.value = lang;
    }
  });

  // 语言
  const langData = ref();

  function go() {
    window.open(textObj.value?.url, '_blank');
  }
</script>

<template>
  <div class="home">
    <div class="no-data">
      <img
        src="../assets/no-data.png"
        alt=""
      />
    </div>

    <div class="info">
      <!-- 中文 -->
      <div v-if="langData === 'zh'">
        <div class="item">
          有更好的字段 <span>[{{ textObj?.zhPlan }}]</span> 方案
        </div>
        <div class="item">
          请使用 <span>[{{ textObj?.zhShortcut }}]</span> 字段捷径
        </div>
        <div
          class="item use"
          @click="go"
        >
          <el-icon><Pointer /></el-icon> <span>点击使用</span>
        </div>
      </div>

      <!-- 日文 -->
      <div v-else-if="langData === 'ja'">
        <div class="item">
          もっと良い分野がある <span>[{{ textObj?.jaPlan }}]</span> プラン
        </div>
        <div class="item">
          ご利用ください <span>[{{ textObj?.jaShortcut }}]</span> フィールドのショートカット
        </div>
        <div
          class="item use"
          @click="go"
        >
          <el-icon><Pointer /></el-icon> <span>クリックして使用します</span>
        </div>
      </div>

      <!-- 英文 -->
      <div v-else>
        <div class="item">
          There are better fields <span>[{{ textObj?.enPlan }}]</span> plan
        </div>
        <div class="item">
          Please use <span>[{{ textObj?.enShortcut }}]</span> field shortcuts
        </div>
        <div
          class="item use"
          @click="go"
        >
          <el-icon><Pointer /></el-icon> <span>Click to use</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .home {
    font-size: 16px;

    .no-data {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        max-width: 500px;
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .item {
      margin-bottom: 14px;
    }

    .use {
      font-size: 20px;
      color: #2c57e7;
      display: flex;
      align-items: center;
      justify-content: center;

      span {
        margin-left: 5px;
      }

      &:hover {
        cursor: pointer;
      }
    }
  }
</style>
