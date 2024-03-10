import pandas as pd
import os

def read_csv(csv_file_path):
    return pd.read_csv(csv_file_path, delimiter=';')
