const cassandraDriver = require('cassandra-driver');

const cassandra = new cassandraDriver.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'escuela_musica',
});

module.exports = { cassandra};
