#!/usr/bin/python
import sqlite3
conn = sqlite3.connect('data-dev.sqlite')
print ' connect success'
conn.execute("""DROP TABLE alembic_version;""")
print ' drop success'

conn.commit()
conn.close()