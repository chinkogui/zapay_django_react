from ..models import UpcomingLaunch
from django.http import JsonResponse
import json, requests

def listar_upcoming_launch():
    response = requests.get("https://api.spacexdata.com/v3/launches/upcoming")
    flights = json.dumps(response.content.decode('utf-8'))
    return flights