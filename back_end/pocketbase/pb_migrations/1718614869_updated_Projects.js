/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1yswdsgcmdw6e5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljyqokah",
    "name": "field",
    "type": "editor",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "convertUrls": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1yswdsgcmdw6e5")

  // remove
  collection.schema.removeField("ljyqokah")

  return dao.saveCollection(collection)
})
