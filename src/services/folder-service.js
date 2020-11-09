const FolderService = {
    getAllFolders(knex) {
        return knex.select('*').from('folder');
    },
    insertFolder(knex, newFolder) {
        return knex.insert(newFolder).into('folder').returning('*').then(rows => rows[0]);
    },
    getById(knex, id) {
        return knex.from('folder').select('*').where('id', id).first();
    },
    deleteFolder(knex, id) {
        return knex('folder').where({ id }).delete();
    },
    updateFolder(knex, id, newFolderFields) {
        return knex('folder').where({ id }).update(newFolderFields);
    }
}

module.exports = FolderService