import clone from '@/lib/clone'

const localStorageKeyName = 'recordList'

// let data: RecordItem[] | undefined = undefined;



const recordStore = {
  recordList: [] as RecordItem[],
  // record store
  fetchRecords() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecords(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  // fetch 访问不到，因为fetch不是变量了，现在的fetch是一个key,this.fetch的this是根据函数确定的
  // 这里没有函数，所以是全局的this,也就是window,给它一个recordStore的名字即可
  createRecord(record: RecordItem) {
    const record2: RecordItem = clone(record)
    record2.createdAt = new Date().toISOString()
    this.recordList && this.recordList.push(record2)
    recordStore.saveRecords()
  },
}
recordStore.fetchRecords()

export default recordStore;
