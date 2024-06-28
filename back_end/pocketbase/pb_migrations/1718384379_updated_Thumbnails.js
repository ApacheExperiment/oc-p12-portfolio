/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ep7c7jj5twv4jnp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jhnbg8nr",
    "name": "field",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "g1yswdsgcmdw6e5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ep7c7jj5twv4jnp")

  // remove
  collection.schema.removeField("jhnbg8nr")

  return dao.saveCollection(collection)
})
