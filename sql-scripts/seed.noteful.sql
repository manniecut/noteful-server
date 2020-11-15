-- first remove any data that may be present
BEGIN;
TRUNCATE folder,
note RESTART IDENTITY CASCADE;
-- insert some folders
INSERT INTO folder (title)
VALUES ('Important'),
    ('Super'),
    ('Spangley');
-- insert some notes
insert into note (title, modified, content, folderId)
values (
        'Little heron',
        '4/30/2020',
        'Aenean fermentum. Donec ut mauris eget massa tempor convallis.',
        3
    );
insert into note (title, modified, content, folderId)
values (
        'Black-capped capuchin',
        '7/25/2020',
        'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
        1
    );
insert into note (title, modified, content, folderId)
values (
        'Purple moorhen',
        '6/18/2020',
        'In congue. Etiam justo. Etiam pretium iaculis justo.',
        1
    );
insert into note (title, modified, content, folderId)
values (
        'Ring dove',
        '10/22/2019',
        'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
        1
    );
insert into note (title, modified, content, folderId)
values (
        'Bushbaby',
        '10/16/2020',
        'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
        2
    );
insert into note (title, modified, content, folderId)
values (
        'Least chipmunk',
        '5/12/2020',
        'In congue. Etiam justo. Etiam pretium iaculis justo.',
        1
    );
insert into note (title, modified, content, folderId)
values (
        'Dove, rock',
        '1/7/2020',
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
        3
    );
insert into note (title, modified, content, folderId)
values (
        'Secretary bird',
        '4/10/2020',
        'Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.',
        1
    );
insert into note (title, modified, content, folderId)
values (
        'Egyptian viper',
        '10/3/2019',
        'Proin interdum mauris non ligula pellentesque ultrices.',
        3
    );
insert into note (title, modified, content, folderId)
values (
        'Monkey',
        '10/29/2019',
        'In hac habitasse platea dictumst.',
        3
    );
insert into note (title, modified, content, folderId)
values (
        'Kangaroo',
        '9/16/2020',
        'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.',
        1
    );
insert into note (title, modified, content, folderId)
values (
        'Cat',
        '12/31/2019',
        'In congue. Etiam justo. Etiam pretium iaculis justo.',
        2
    );
insert into note (title, modified, content, folderId)
values (
        'Green-winged trumpeter',
        '7/1/2020',
        'Sed ante. Vivamus tortor. Duis mattis egestas metus.',
        2
    );
insert into note (title, modified, content, folderId)
values (
        'Arctic fox',
        '6/5/2020',
        'In congue. Etiam justo. Etiam pretium iaculis justo.',
        2
    );
insert into note (title, modified, content, folderId)
values (
        'Raccoon dog',
        '3/26/2020',
        'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
        2
    );
insert into note (title, modified, content, folderId)
values (
        'Griffon vulture',
        '9/4/2020',
        'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.',
        2
    );
insert into note (title, modified, content, folderId)
values (
        'Tropical buckeye butterfly',
        '6/24/2020',
        'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
        1
    );
insert into note (title, modified, content, folderId)
values (
        'Silver gull',
        '11/2/2020',
        'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue.',
        3
    );
insert into note (title, modified, content, folderId)
values (
        'Kookaburra',
        '9/25/2020',
        'Fusce consequat. Nulla nisl. Nunc nisl.',
        1
    );


COMMIT;