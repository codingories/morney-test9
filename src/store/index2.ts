import recordListModel from '@/model/recordListModel'
import tagListModel from '@/model/tagListModel'

const store = {
  // record store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => recordListModel.create(record),
  // tag store
  tagList: tagListModel.fetch(),
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0]
  },
  createTag: (name: string) => {
    const message = tagListModel.create(name) // 知识点2. 写的时候要用tagListModel来写
    // 简化知识点1和知识点2，也就是最小知识原色
    if (message === 'duplicated') {
      window.alert('标签名重复了')
    } else if (message === 'success') {
      window.alert('添加成功')
    }
  },
  removeTag: (id: string) => {
    return tagListModel.remove(id)
  },
  updateTag: (id: string, name: string) => {
    return tagListModel.update(id, name)
  }
}
export default store;
