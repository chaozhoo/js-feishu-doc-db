async function main() {
  const table = await bitable.base.getActiveTable();
  const fields = await table.getFieldMetaList();
  
  // 准备多条记录数据
  const dataList = [
      {
          "字段1": "内容1",
          "字段2": "内容2"
      },
      {
          "字段1": "内容3",
          "字段2": "内容4"
      }
      // ... 更多记录
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