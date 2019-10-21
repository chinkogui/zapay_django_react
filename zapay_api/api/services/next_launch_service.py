from ..models import NextLaunch
from django.http import JsonResponse
import json, requests

def listar_next_launch():
    response = requests.get("https://api.spacexdata.com/v3/launches/next")
    flights = json.dump(response.content.decode('utf-8'))
    return flights