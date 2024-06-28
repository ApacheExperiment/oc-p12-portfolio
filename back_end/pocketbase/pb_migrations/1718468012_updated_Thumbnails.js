/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ep7c7jj5twv4jnp")

  collection.viewRule = null
  collection.updateRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ep7c7jj5twv4jnp")

  collection.viewRule = ""
  collection.updateRule = null

  return dao.saveCollection(collection)
})
