import MySQLdb
import json
import collections

db = MySQLdb.connect(host='localhost',
                     user='anniekramer',
                     passwd='anniekramer',
                     db='hopscotch')
cursor = db.cursor()

cursor.execute("""
    SELECT name, town, state
    FROM breweries
    """)

rows = cursor.fetchall()
result = []
for row in rows:
    d = dict()
    d['name'] = row[0]
    d['town'] = row[1]
    d['state'] = row[2]
    result.append(d)

print(json.dumps((result), sort_keys=True, indent=4))
content = (json.dumps((result), sort_keys=True, indent=4))

with open('breweries.json', 'w') as outfile:
    json.dump(content, outfile)

print "Done!"

db.close()