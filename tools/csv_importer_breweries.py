#!/Users/anniekramer/anaconda/bin/python

import csv
import MySQLdb
import sys

def main():
    # open connection to MySQL database
    mydb = MySQLdb.connect(host='localhost', 
        user='anniekramer',
        passwd='anniekramer',
        db='hopscotch')
    cursor = mydb.cursor()

    csv_data = csv.reader(file('breweries.csv', "rU"))
    
    for row in csv_data:
        name, town, state = row
        cursor.execute('INSERT INTO breweries(name, town, state )' \
          ' VALUES(%r, %r, %r)' % (name, town, state,))

    # close connection to MySQL database
    cursor.close()
    mydb.commit()
    print "Done!"

if __name__ == '__main__':
    main() 