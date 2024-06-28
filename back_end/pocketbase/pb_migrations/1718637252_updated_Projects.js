/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1yswdsgcmdw6e5")

  // remove
  collection.schema.removeField("wrl25w7f")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g1yswdsgcmdw6e5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wrl25w7f",
    "name": "list",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
