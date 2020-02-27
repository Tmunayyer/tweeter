/**
 * There tends to be a bit of overhead/boiler plate that
 *  goes with querying the DB if no ORM is used. I would
 *  write out some functions that takes in the desired query,
 *  makes the query, and return just the dataset.
 *
 *  Example: PostgreSQL returns lots of info outside of the
 *      desires rows, its usually not necessary and can be filtered
 *      at this step to make things more approachable and debuggable
 *      further down the line.
 *
 * For this project we can have it parse the JSON file for us
 */

const fs = require('fs');

const actions = {
  'get-all': (records) => {
    return records.reverse();
  },
  'get-user': (records, username) => {
    const filtered_results = records.filter((elem) => {
      return elem.username === username;
    });

    return filtered_results;
  },
  'insert-twit': (records, { username, twit }) => {
    const twit_id = Math.round(Math.random() * 1000);

    const to_append = {
      twit_id,
      username,
      twit
    };

    records.push(to_append);

    const new_records = JSON.stringify(records);

    fs.unlinkSync(__dirname + '/db.json');
    fs.writeFileSync(__dirname + '/db.json', new_records);

    return to_append;
  },
  'update-twit': (records, { twit_id, twit }) => {
    let updated_twit = undefined;

    for (let i = 0; i < records.length; i++) {
      const record = records[i];
      updated_twit = record;

      if (record.twit_id === twit_id) {
        record.twit = twit;
        break;
      }
    }

    const new_json = JSON.stringify(records);

    fs.unlinkSync(__dirname + '/db.json');
    fs.writeFileSync(__dirname + '/db.json', new_json);

    return updated_twit;
  },
  'delete-twit': (records, twit_id) => {
    let twit = { message: 'nothing was removed...' };
    const filtered_records = records.filter((elem) => {
      if (elem.twit_id === twit_id) twit = elem;
      return elem.twit_id !== twit_id;
    });

    const new_json = JSON.stringify(filtered_records);

    fs.unlinkSync(__dirname + '/db.json');
    fs.writeFileSync(__dirname + '/db.json', new_json);

    return twit;
  }
};

const query = (statement, data) => {
  const old_json = JSON.parse(fs.readFileSync(__dirname + '/db.json'));

  // perform statement
  return actions[statement](old_json, data);
};

module.exports = {
  query: query
};
