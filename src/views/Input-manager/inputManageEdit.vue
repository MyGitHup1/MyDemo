<template>
    <el-form
      ref="form"
      status-icon
      :label-position="labelPosition"
      :model="form"
      label-width="80px"
      fullscreen=true
      show-close=false
    >
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>个人基本信息</span>
          </div>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="姓名" prop="name">
                  <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="出生日期" prop="birthday">
                  <el-date-picker
                    type="date"
                    placeholder="选择日期"
                    v-model="form.birthday"
                    style="width: 100%;"
                  ></el-date-picker>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="性别" prop="sex">
                  <el-select v-model="form.sex" placeholder="请选择性别">
                    <el-option label="男" value="man"></el-option>
                    <el-option label="女" value="woman"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="16" :md="16" :lg="16">
              <div class="grid-content bg-purple-light">
                <el-form-item label="身份证" prop="identity_card">
                  <el-input v-model="form.identity_card" placeholder="请输入身份证"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="婚姻状态" prop="marriage">
                  <el-select v-model="form.marriage" placeholder="请选择婚姻状态">
                    <el-option label="已婚" value="married "></el-option>
                    <el-option label="未婚" value="unmarried"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="教育程度" prop="education">
                  <el-select v-model="form.education" placeholder="请选择教育程度">
                    <el-option label="高中" value="highschool"></el-option>
                    <el-option label="大学" value="college"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="居住地址" prop="address1">
                  <el-input v-model="form.address1"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="户籍地址" prop="address2">
                  <el-input v-model="form.address2"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="居住电话" prop="phone">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="手机号" prop="mobile_phone">
                  <el-input v-model="form.mobile_phone"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>

      <div style="margin:15px 0 0 0">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="{text-aglin:center}">
            <span>职业信息</span>
          </div>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12">
              <div class="grid-content bg-purple-light">
                <el-form-item label="现职公司" prop="company">
                  <el-input v-model="form.company"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" >
              <div class="grid-content bg-purple-light">
                <el-form-item label="所属行业" prop="trade">
                  <el-select v-model="form.trade" placeholder="请选择教育程度">
                    <el-option label="教育" value="education  "></el-option>
                    <el-option label="金融" value="finance"></el-option>
                  </el-select>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" >
              <div class="grid-content bg-purple-light">
                <el-form-item label="职位" prop="position">
                  <el-input v-model="form.position"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12">
              <div class="grid-content bg-purple-light">
                <el-form-item label="公司地址" prop="address3">
                  <el-input v-model="form.address3"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="公司类型" prop="company_type">
                  <el-input v-model="form.company_type"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="公司邮箱" prop="company_email">
                  <el-input v-model="form.company_email"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="公司电话" prop="company_phone">
                  <el-input v-model="form.company_phone"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div style="margin:15px 0 0 0">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="{text-aglin:center}">
            <span>收支情况</span>
          </div>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <el-form-item label="收支情况" prop="income">
                <el-input v-model="form.income"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div style="margin:15px 0 0 0">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="{text-aglin:center}">
            <span>家庭联系人</span>
          </div>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="关系1" prop="contact">
                  <el-input v-model="form.contact"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="姓名" prop="contact_name">
                  <el-input v-model="form.contact_name"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="手机" prop="contact_phone">
                  <el-input v-model="form.contact_phone"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
      <div style="margin:15px 0 0 0">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="{text-aglin:center}">
            <span>工作证明人</span>
          </div>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="关系2" prop="contact2">
                  <el-input v-model="form.contact2"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="姓名" prop="contact2_name">
                  <el-input v-model="form.contact2_name"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="手机" prop="contact2_phone">
                  <el-input v-model="form.contact2_phone"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="部门" prop="contact2_dep">
                  <el-input v-model="form.contact2_dep"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="职位" prop="contact2_pos">
                  <el-input v-model="form.contact2_pos"></el-input>
                </el-form-item>
              </div>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="8">
              <div class="grid-content bg-purple-light">
                <el-form-item label="备注" prop="remark">
                  <el-input v-model="form.remark"></el-input>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </el-form>
</template>

<script>
export default {
  data () {
    return {
      labelPosition: 'left'
    }
  },
  props: ['form']
}
</script>
<style lang="scss" scoped>
</style>
