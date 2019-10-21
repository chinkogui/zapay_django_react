from ..models import PastLaunch
from django.http import JsonResponse
import json, requests

def listar_past_launch():
    response = requests.get("https://api.spacexdata.com/v3/launches/past")
    flights = json.dumps(response.content.decode('utf-8'))
    return flights