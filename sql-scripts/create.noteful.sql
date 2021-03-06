BEGIN;

DROP TABLE IF EXISTS note;
DROP TABLE IF EXISTS folder;

CREATE TABLE folder (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title TEXT NOT NULL
);

CREATE TABLE note (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  title TEXT NOT NULL,
  modified TIMESTAMPTZ,
  content TEXT,
  folderId INTEGER REFERENCES folder(id) ON DELETE SET NULL
);

COMMIT;