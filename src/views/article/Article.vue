<template>
  <div class="article">
    <el-card class="topCard">
      <!-- 面包屑导航 -->
      <div slot="header" class="clearfix">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>内容管理</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 表单 -->
      <el-form
       ref="form"
       :model="form"
       label-width="55px"
       size="small"
       class="topForm"
      >
        <el-form-item label="状态：">
          <el-radio-group v-model="status">
            <el-radio :label="null">全部</el-radio>
            <el-radio :label="0">草稿</el-radio>
            <el-radio :label="1">待审核</el-radio>
            <el-radio :label="2">审核通过</el-radio>
            <el-radio :label="3">审核失败</el-radio>
            <el-radio :label="4">已删除</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="频道：">
          <el-select v-model="channelId" placeholder="请选择">
            <el-option label="全部" :value="null"></el-option>
            <el-option :label="item.name" :value="item.id" v-for="item in channels" :key=item.id></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="日期：">
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="loadArticles(1)">筛选</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <!-- 表格部分 -->
    <el-card>
      <div slot="header" class="clearfix">根据筛选条件共查询到{{totalArticles}}条结果：</div>
      <el-table
        :data="articles"
        stripe
        size="small"
        style="width: 100%">
        <el-table-column
          label="封面">
          <template slot-scope="scope">
                <el-image
                 lazy
                 style="width: 100px; height: 100px"
                 :src="scope.row.cover.images[0]"
                 :fit="cover">
                  <div slot="placeholder" class="image-slot">
                    加载中<span class="dot">...</span>
                  </div>
                </el-image>
            <!-- <img v-if="scope.row.cover.images[0]" class="coverImg" :src="scope.row.cover.images[0]" alt="">
            <img v-else class="coverImg"  src="./no-cover.gif" alt=""> -->
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题">
        </el-table-column>
        <el-table-column
          label="状态">
          <template slot-scope="scope">
            <el-tag size="small"
             :type="articlesStatus[scope.row.status].type"
             plain>
              {{articlesStatus[scope.row.status].text}}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          prop="pubdate"
          label="发布时间">
        </el-table-column>
        <el-table-column
          label="操作">
           <template>
              <el-button
                size="mini"
                circle
                type="primary"
                icon="el-icon-edit"
                @click="handleEdit(scope.$index, scope.row)"></el-button>
              <el-button
                size="mini"
                circle
                type="danger"
                icon="el-icon-delete"
                @click="handleDelete(scope.$index, scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 页码部分 -->
      <el-pagination
        background
        small
        :page-size="pageSize"
        @current-change="onPageChange"
        class="pagination"
        layout="prev, pager, next"
        :total="totalArticles">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import { getArticles, getArticlesChannels } from '@/api/article.js'
export default {
  name: 'Article',
  data () {
    return {
      form: {
        name: '',
        region: '',
        resource: ''
      },
      value1: [],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      articles: [],
      articlesStatus: [
        { type: 'info', text: '草稿' },
        { type: 'primary', text: '待审核' },
        { type: 'success', text: '审核通过' },
        { type: 'danger', text: '审核失败' },
        { type: 'warning', text: '已删除' }
      ],
      totalArticles: 0,
      pageSize: 20,
      status: null,
      channels: [],
      channelId: null
    }
  },
  methods: {
    loadArticles (page) {
      getArticles({
        page,
        per_page: this.pageSize,
        status: this.status,
        channel_id: this.channelId
      }).then(res => {
        // console.log(res)
        const { results, total_count: totalCount } = res.data.data
        this.articles = results
        this.totalArticles = totalCount
      })
    },
    onPageChange (page) {
      // console.log(page)
      this.loadArticles(page)
    },
    loadChannels () {
      getArticlesChannels().then(res => {
        console.log(res)
        this.channels = res.data.data.channels
      })
    }
  },
  activated () {},
  watch: {},
  created () {
    // 获取文章列表
    this.loadArticles()
    // 获取频道数据
    this.loadChannels()
  },
  mounted () {}
}
</script>
<style lang="less" scoped>
.topCard {
  margin-bottom: 20px;
}
.pagination {
  margin-top: 20px;
  text-align: center;
}
.coverImg {
  height: 50px;
  width: 75px;
  background-size: cover;
}
.image-slot {
  text-align: center;
  line-height: 100px;
}
</style>
