/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ep7c7jj5twv4jnp")

  // remove
  collection.schema.removeField("vilfd0y8")

  // remove
  collection.schema.removeField("zqbtojjt")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ep7c7jj5twv4jnp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vilfd0y8",
    "name": "linkGitHubP",
    "type": "url",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zqbtojjt",
    "name": "iconGitHubP",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
