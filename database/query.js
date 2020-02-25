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
  'insert-twit': (json, { username, twit }) => {
    const twit_id = Math.round(Math.random() * 1000);

    const to_append = {
      twit_id,
      username,
      twit
    };

    json.push(to_append);

    const new_json = JSON.stringify(json);

    fs.unlinkSync(__dirname + '/db.json');
    fs.writeFileSync(__dirname + '/db.json', new_json);

    return to_append;
  }
};

const query = (statement, data) => {
  const old_json = JSON.parse(fs.readFileSync(__dirname + '/db.json'));

  console.log('the old_json', old_json);
  console.log('the statement', statement);
  // perform statement
  return actions[statement](old_json, data);
};

module.exports = {
  query: query
};
