import requests
import json
response = requests.get("https://api.spacexdata.com/v3/launches/next")
flights = json.dumps(response.content)
with open('arq.json', 'w') as arq:
    json.dump(flights, arq)