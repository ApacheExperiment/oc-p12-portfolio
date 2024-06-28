/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ep7c7jj5twv4jnp",
    "created": "2024-06-14 14:38:08.443Z",
    "updated": "2024-06-14 14:38:08.443Z",
    "name": "GET_ALL_THUMBNAILS",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "amwmkjld",
        "name": "ArgentBank",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ep7c7jj5twv4jnp");

  return dao.deleteCollection(collection);
})
