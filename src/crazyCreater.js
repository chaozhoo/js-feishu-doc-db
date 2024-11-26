async function main() {
  const table = await bitable.base.getActiveTable();
  const fields = await table.getFieldMetaList();
  
  // 准备多条记录数据
  const dataList = [
    {
      "材料编号":"SC-01",
      "材料名称":"深灰色石材",
      "类型":"石材",
      "颜色质感":"深灰色/光滑",
      "使用部位":"人行主入口、塔楼大堂"
    },
    {
      "材料编号":"TB-01",
      "材料名称":"米白色陶板",
      "类型":"陶板",
      "颜色质感":"米白色/光滑",
      "使用部位":"裙房立面"
    },
    {
      "材料编号":"ZK-01",
      "材料名称":"红砖",
      "类型":"砖块",
      "颜色质感":"砖红色/粗糙",
      "使用部位":"裙房立面"
    }
    // 更多记录...
];

  // 批量添加记录
  for (const newData of dataList) {
      const record = {};
      fields.forEach(field => {
          if (newData[field.name]) {
              record[field.id] = newData[field.name];
          }
      });

      await table.addRecord({
          fields: record
      });
  }
  
  console.log("批量添加成功");
}