<template>
  <div>
    <div id="dd1">
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="160">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="updateById(scope.$index, scope.row)">编辑
          </el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteById(scope.$index, scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
      <div>
        <el-dialog title="编辑" :visible.sync="dialogTableVisible"
                   center :append-to-body='true' :lock-scroll="false"
                   width="60%">
          <update></update>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </el-table>
  </div>
</template>

<script>
  import { findList, delByName } from '@/api/apit1'
  import update from './t1-addOrUpdate'

  export default {
    components: {
      update
    },
    data() {
      return {
        tableData: [],
        dialogTableVisible: false
      }
    },
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1)
      }
    },
    created() {
      this.getData()
    },
    methods: {
      getData() {
        this.listLoading = true
        findList().then(res => {
          this.tableData = res.data

          this.listLoading = false
        })
      },
      deleteById(index, tableData) {
        delByName(tableData.id).then(res => {
          console.log(JSON.stringify(res.msg))
          this.getData()

        })
      },
      updateById(index, tableData) {
        //显示弹框
        this.dialogTableVisible = true
        // //新增弹框标题
        // this.dialogStatus = '编辑'
      }
    }
  }
</script>

<style lang="scss">
  #dd1 {
    height: 100px;
  }
</style>
