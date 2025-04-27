import json
import pandas as pd

# 1. Đọc file JSON
with open('vocab.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

# 2. Tạo DataFrame
df = pd.DataFrame(data)

# 3. Xuất ra Excel
df.to_excel('vocabulary_list.xlsx', index=False)

print("Created vocabulary_list.xlsx with", len(df), "entries.")
