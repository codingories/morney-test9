<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"
      />
    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
  import Vue from "vue"
  import NumberPad from "@/components/Money/NumberPad.vue"
  import Types from "@/components/Money/Types.vue"
  import FormItem from "@/components/Money/FormItem.vue"
  import Tags from "@/components/Money/Tags.vue"
  import {Component} from "vue-property-decorator"



  type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number // 数据类型 object | string
    createdAt?: Date // 类 / 构造函数
  }

  @Component({
    components: {Tags, FormItem, Types, NumberPad}
  })
  export default class Money extends Vue {
    tags = window.tagList;
    recordList = window.recordList
    record: RecordItem = {
      tags: [], notes: "", type: "-", amount: 0
    }

    onUpdateTags(value: string[]) {
      this.record.tags = value
    }

    onUpdateNotes(value: string) {
      this.record.notes = value
    }

    saveRecord() {
      // recordListModel.create(this.record)
      window.createRecord(this.record)
    }
  }
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
  .notes {
    padding: 12px 0;
  }
</style>

<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";
</style>
