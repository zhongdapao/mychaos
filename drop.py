#!/usr/bin/python
from sqlalchemy import create_engine

engine=create_engine('postgres://hixwsddzkurpll:b79219acb9e07b8d5577e2c4973c995538bb3a9ac7743d4e30081814f98a7400@ec2-184-73-247-240.compute-1.amazonaws.com:5432/dec335tk9t63kh')
engine.execute("""DROP TABLE alembic_version;""")

engine.commit()
engine.close()