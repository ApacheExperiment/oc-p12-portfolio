/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1yswdsgcmdw6e5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h9gxepqe",
    "name": "date",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1yswdsgcmdw6e5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "h9gxepqe",
    "name": "2024_05_01",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
})
