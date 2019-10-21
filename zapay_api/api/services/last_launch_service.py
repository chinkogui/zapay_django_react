from ..models import LastLaunch
from django.http import JsonResponse
import json, requests

def listar_last_launch():
    response = requests.get("https://api.spacexdata.com/v3/launches/next")
    flights = json.dumps(response.content.decode('utf-8'))
    return flights